import './App.css'
import Clarifai from 'clarifai'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm'
import Particle from './components/particles/Particles'
import FacailRecognition from './components/facailrecognition/FacailRecognition'
import React, { Component }  from 'react'
import Button from 'react-bootstrap/Button'




const app = new Clarifai.App({
  apiKey: '878b22666998433ebe21d338ddb1e2d7'
 });

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      imageUrl: '',
      box: [],
      showLinkForm: true
    }
  }
  
  
  calculateFaceLocation = (data) => {
    const detections = data.outputs[0].data.regions
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    if (Array.isArray(detections)) {
      detections.forEach(element => {
        const data = {
          leftCol: element.region_info.bounding_box.left_col * width,
          topRow: element.region_info.bounding_box.top_row * height,
          rightCol: width - (element.region_info.bounding_box.right_col * width),
          bottomRow: height - (element.region_info.bounding_box.bottom_row * height)
        }        
        this.state.box.push(data);
        this.setState({ box: this.state.box });
      })
    }
  } 
  
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }
  
  onButtonSubmit = () => {
    if(this.state.input) {
      this.setState({ imageUrl: this.state.input }); 
    } else  {
      this.state.input = 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3Jvd2R8ZW58MHx8MHx8&w=1000&q=80'
      this.setState({input: this.state.input})
      this.setState({ imageUrl: this.state.input }); 
    }
    this.setState({showLinkForm: false})  
    app.models.predict(
        {
          id: 'face-detection',
          name: 'face-detection',
          version: '6dc7e46bc9124c5c8824be4822abe105',
          type: 'visual-detector',
        },
        this.state.input

      )
      .then(response => this.calculateFaceLocation(response))
      .catch(err => {
        console.log(err)       
        alert("Unable to detect faces in image. Please use a valid link to an image")
      })
  }
  

  reset = () => {
    this.setState({input: '', imageUrl: '', box: [], showLinkForm: true})
  }
  
  
  render() {
    const {imageUrl, showLinkForm, box} = this.state;  
    
    return (
      <div className="App">
        <Particle />
        <Logo />
        { 
          showLinkForm ? (            
            <ImageLinkForm  
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}
            />
          ) : ( 
            <div>   
              <div className='p-2'>
                <Button variant="outline-dark" onClick={this.reset}>
                  Reset
                </Button>
              </div>                   
              <FacailRecognition box={box} imageUrl={imageUrl} />
            </div>
          )
        } 
        <h6 className="fixed-bottom d-flex p-2 justify-content-end">&copy; Peter Garas 2022</h6>         
      </div>
    )
  }
}

export default App

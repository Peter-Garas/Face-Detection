import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { useState } from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box}) => {  
  return (
    <Container fluid className='position-static'>
      <Row>
        <Col className="d-flex justify-content-center">
          <div className='position-absolute'>
            <img className='shadow-lg rounded-5' id='inputimage' alt='' src={imageUrl} width='400px' heigh='auto'/>
            {
              box.map(box => 
                <div key={`box${box.topRow}${box.rightCol}`}
                  className='bounding-box'
                  style={{
                    top: box.topRow, 
                    right: box.rightCol, 
                    bottom: box.bottomRow, 
                    left: box.leftCol
                    }}>
                </div>
              )
            }
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FaceRecognition;

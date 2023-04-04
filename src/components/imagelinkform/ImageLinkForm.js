import React from "react"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <Container fluid className="d-flex justify-content-center">
            <div className="blur shadow-lg p-3 rounded-5">
                <Row>
                    <Col>
                        <p>This magic brain will detect faces in images. <br/> 
                        Provide a link to an image from google and watch the magic 
                        or click detect to use default image.</p>
                    </Col>                    
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-3" onChange={onInputChange}>
                            <Form.Control placeholder="http://www.example.com/" />
                            <Button variant="primary" id="button-addon2" onClick={onButtonSubmit}>Detect</Button>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default ImageLinkForm
import React from "react"
import Tilt from 'react-parallax-tilt'
import brain from './brain.png'
import './Logo.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsArrowReturnLeft } from 'react-icons/bs'
import Button from 'react-bootstrap/Button'



const Logo = () => {
    return (
        <Container fluid >
            <Row>
                <Col className="py-1 d-flex justify-content-start">
                    <div>
                        <Button variant="outline-dark" href="https://peter-garas.netlify.app/#projects"><BsArrowReturnLeft /> Return To Portfolio</Button>
                    </div>
                </Col>
                <Col className="py-1 d-flex justify-content-end">
                    <Tilt className="d-flex justify-content-center align-items-center"style={{ width: '150px', height: '150px' }}>
                        <img className="p-1 Tilt rounded-5 shadow" src={brain} alt='brain logo' width='100px' height='100px'/>
                    </Tilt>
                </Col>                
            </Row>
        </Container>
    )
}

export default Logo
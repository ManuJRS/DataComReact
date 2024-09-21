import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export const IntroNosotros = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={0} sm={2}>
                </Col>
                <Col xs={12} sm={8}>
                    <div className="card-nosotros">
                        <h1>¿QUIENES SOMOS?</h1>
                        <p>Somos un equipo comprometido con la excelencia. Con un enfoque en el servicio personalizado, trabajamos cada día para superar expectativas y brindar soluciones efectivas.</p>
                        <div className="vertical-line"></div>
                    </div>
                </Col>
                <Col xs={0} sm={2}>
                </Col>
            </Row>
        </Container>
    )
}
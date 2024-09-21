import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Disclaimer = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={4}>
                </Col>
                <Col xs={12} sm={4}>
                </Col>
                <Col xs={12} sm={4}>
                    <div className="Content-padre-disclaimer">
                        <p><strong>*</strong><i>Los servicios pueden tener un costo extra</i></p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
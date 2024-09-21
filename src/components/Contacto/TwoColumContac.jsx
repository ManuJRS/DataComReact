import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { MapContent } from '../Maps/MapContent'



export const TwoColumContac = () => {
    return (
        <Container  className="form-column">
            <Row>
                <Col xs={12} sm={6}>
                    <Form className="Form-contacto-principal">
                        <h1>¡Contáctanos!</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Nombre Completo" className="text-form"/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" className="text-form"/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Número de Teléfono" className="text-form"/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="¿En que podemos ayudarte?" >
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                className="text-form"
                            />
                        </FloatingLabel>
                        <Button className="btn-card-contact" variant="secondary">Enviar Mensaje</Button>
                    </Form>
                </Col>
                <Col xs={12} sm={6} className="col-map">
                    <MapContent />
                    <div className="map-content-text">
                    <p><a href="">Av Alemán calle 4, 53-local 8 planta alta, entre Calle 5, Felipe Carrillo Puerto, 97136 Mérida, Yuc.</a></p>
                    
                    </div>

                </Col>
            </Row>
        </Container>
    )
}
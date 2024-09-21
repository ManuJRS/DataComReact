import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const InfoContacto = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col xs={12} sm={6}>
                    <div className="Contenedor-titulo-contacto">
                        <p>Estamos para servirte</p>
                        <h3>Otras formas
                            de contactarnos</h3>
                    </div>
                </Col>
                <Col xs={12} sm={6}>
                    <div className="contenedor-info-padre">
                        <div className="Contenedor-info-contacto">
                            <hr className="linea-div-info" />
                            <h3>Conmutador</h3>
                            <p><strong>Tel: </strong><a href="">(999) 2875920</a></p>
                        </div>
                        <div className="Contenedor-info-contacto">
                            <hr className="linea-div-info" />
                            <h3>Departamento de Ventas</h3>
                            <p><strong>Tel: </strong><a href="">(999) 2875920</a></p>
                            <p><strong>Email: </strong><a href="">ventas@datacomsureste.com.mx</a></p>
                        </div>
                        <div className="Contenedor-info-contacto">
                            <hr className="linea-div-info" />
                            <h3>WhatsApp</h3>
                            <p><strong>Tel: </strong><a href="">(999) 2875920</a></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
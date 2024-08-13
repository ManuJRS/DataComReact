import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgOneCardInverted from '../../assets/images/VIDEOPUERTO.webp'
import imgTwoCardInverted from '../../assets/images/VIDEOSEGURIDAD.webp'


export const CardInverted = () => {
    return (
        <Container>
            {/** PRIMERA CARD */}
            <Row>
                <Col xs={0} sm={1}></Col>
                <Col xs={12} sm={8}>
                    <Card className="my-5 card-inverted">
                        <Card.Img className="img-card" variant="top" src={imgOneCardInverted} />
                        <Card.Body className="card-inverted-body">
                            <Card.Title><h2>Telefonia y Videoportero</h2></Card.Title>
                            <hr />
                            <Card.Text className="card-text-inverted">
                                Venta, instalación y programación de conmutadores telefonicos para casas u oficinas, también realizamos instalaciones y reubicaciones de extensiones telefonicas. Venta, instalación y mantenimiento a sistemas de intercomunicación (interfone y videoportero)..
                            </Card.Text>
                            <div className="card-btn-inverted">
                                <Button className="btn-card" variant="secondary">Más información</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={0} sm={3}></Col>
            </Row>
            {/** SEGUNDA CARD */}
            <Row>
                <Col xs={0} sm={3}></Col>
                <Col xs={12} sm={8}>
                    <Card className="ms-auto card-inverted">
                        <Card.Img className="img-card" variant="top" src={imgTwoCardInverted} />
                        <Card.Body style={{ textAlign: 'right' }} className="card-inverted-body">
                            <Card.Title> <h2>Video Vigilancia CCTV/IP</h2></Card.Title>
                            <hr />
                            <Card.Text className="card-text-inverted">
                                Circuito Cerrado de Televisión (CCTV), nuestros equipos pueden transmitir constantemente vía remota o Internet, tambien pueden avisar a tu dispositivo móvil si existe algún incidente o movimiento cuando no estés presente.
                            </Card.Text>
                            <div className="card-btn-inverted">
                            <Button className="btn-card" variant="secondary">Más información</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={0} sm={1}></Col>
            </Row>
        </Container>
    )
}
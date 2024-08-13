import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgOneCardInferior from '../../assets/images/FIBRA.webp'
import imgTwoCardInferior from '../../assets/images/INSTALACIONREDES.webp'

export const CardInferior = () => {
    return (
            <Container>
            {/** PRIMERA CARD */}
            <Row>
                <Col xs={0} sm={1}></Col>
                <Col xs={12} sm={8}>
                    <Card className="my-5 card-inverted">
                        <Card.Img className="img-card" variant="top" src={imgOneCardInferior} />
                        <Card.Body className="card-inverted-body">
                            <Card.Title> <h2> Fibra Óptica</h2></Card.Title>
                            <hr />
                            <Card.Text className="card-text-inverted">Como especialistas en el campo de la fibra óptica, ponemos a su disposición nuestra amplia experiencia con el fin de que usted obtenga los beneficios con soluciones integrales totalmente probadas para seleccionar los mejores productos del mercado.</Card.Text>
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
                        <Card.Img className="img-card" variant="top" src={imgTwoCardInferior} />
                        <Card.Body style={{ textAlign: 'right' }} className="card-inverted-body">
                            <Card.Title> <h2> Redes de Voz y Datos</h2></Card.Title>
                            <hr />
                            <Card.Text className="card-text-inverted">Redes de datos, instalaciones de red, servidores, configuraciones, redes inalámbricas, routers, switchs, access point, cable UTP, Redes de voz, conmutadores, configuraciones.</Card.Text>
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
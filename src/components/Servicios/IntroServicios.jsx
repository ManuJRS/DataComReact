import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import DataConmutadors from '../../Data/DataConmutadores';
import { IntroServicioConmutadores } from '../Conmutaodres/IntroServicioConmutadores';

export const IntroServicios = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={6}>
                    {DataConmutadors.map((introMap) => (
                        <React.Fragment key={introMap.id}>
                            <IntroServicioConmutadores
                                introconmutadores={introMap.introconmutadores}
                                disponibilidadconmutadores={introMap.disponibilidadconmutadores}
                            />
                        </React.Fragment>
                    ))}
                </Col>
                <Col xs={12} sm={6}>
                    <Card className="card-intro card-intro-servicios">

                        <Card.Body>
                            <Card.Text className="card-texto">En Datacom le ofrecemos las mejores marcas y precios del mercado para que usted se comunique con tecnología de punta y no tenga que preocuparse porque sus teléfonos se vuelvan obsoletos. Los conmutadores que le ofrecemos son los más modernos en tecnología, análogos o digitales de fácil operación interna y externa, flexibles a sus necesidades. Además son compatibles con cualquier aparato unilinea que se le conecte.</Card.Text>
                            <div className="d-flex justify-content-center my-2">
                            </div>
                            <div className="d-flex justify-content-center my-2">
                                <Link to="/Contacto"><Button variant="secondary" className="btn-card">Contactar</Button>
                                </Link>
                            </div>
                        </Card.Body>

                    </Card>


                </Col>

            </Row>

        </Container>

    )
}
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import imgConmutador from '../../assets/images/conmutador_servicios.webp'

export const CuerpoServicios = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={6} className="col-carousel">
                    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-servicios">
                        <Carousel.Item>
                            <img className="img-carousel-servicios" src={imgConmutador} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="img-carousel-servicios" src={imgConmutador} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="img-carousel-servicios" src={imgConmutador} alt="First slide" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={12} sm={6} >
                    <div className="contenedor-espec-padre">
                        <div className="titulo-spect-content">
                            <h2 >Especificaciones</h2>
                        </div>
                        <div className="contenedor-info-padre-espec">
                            <div className="Contenedor-info-contacto">
                                <hr className="linea-div-info" />
                                <h3>Capacidad de Líneas</h3>
                                <p>Soporta hasta 3 líneas telefónicas.</p>
                            </div>
                            <div className="Contenedor-info-contacto">
                                <hr className="linea-div-info" />
                                <h3>Extensiones</h3>
                                <p>Permite asignar hasta 8 extensiones</p>
                            </div>
                            <div className="Contenedor-info-contacto">
                                <hr className="linea-div-info" />
                                <h3>Funciones</h3>
                                <p>Incluye deshabilitación de líneas/extensiones, grabación de saludo, restricciones de números y transferencias de llamadas.</p>
                            </div>
                            <div className="Contenedor-info-contacto">
                                <hr className="linea-div-info" />
                                <h3>Conectores</h3>
                                <p>Utiliza conectores RJ11 para una instalación sencilla.</p>
                            </div>
                            <div className="Contenedor-info-contacto">
                                <hr className="linea-div-info" />
                                <h3>Indicadores</h3>
                                <p>LEDs indicadores de actividad para una fácil supervisión.</p>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-espec-padre">
                        <div className="titulo-spect-content">
                            <h2 >Servicios</h2>
                        </div>
                        <div className="contenedor-info-padre-espec">
                            <div className="Contenedor-info-contacto">
                                <hr className="linea-div-info" />
                                <h3>Instalación de Extensiones Telefónicas:</h3>
                                <p>Servicio de instalación y reubicación de extensiones.*</p>
                            </div>
                            <div className="Contenedor-info-contacto">
                                <hr className="linea-div-info" />
                                <h3>Mantenimiento de Sistemas de Intercomunicación:</h3>
                                <p>Instalación y mantenimiento de sistemas de intercomunicación como interfonos y videoporteros. *</p>
                            </div>
                            
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
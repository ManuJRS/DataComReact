import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dataLogo from '../../assets/images/logo.png'
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import DataFooter from '../../Data/DataFooter';


export const FooterComponent = () => {
    return (
        <div className="footer-content-padre">
            <div className="footer-bg">
                <Container fluid>
                    <Row>
                        <Col xs={{ order: 1, span: 12 }} sm={{ order: 1, span: 8 }}>
                            <div className="footer-title">
                                <h3>Hardware and Network Solutions</h3>
                            </div>
                        </Col>
                        <Col xs={{ order: 2, span: 12 }} sm={{ order: 2, span: 4 }}>
                            <div className="ms-auto d-flex justify-content-center btn-footer-content">
                                <Button className="btn-card" variant="secondary">WhatsApp</Button>
                                <Button variant="outline-light">Contacto</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
            <hr className="hr-footer" />
            <div className="footer-bg">
                <Container fluid>
                    <Row>
                        <Col xs={{ order: 1, span: 12 }} sm={{ order: 1, span: 6 }}>
                            <div className="logo-footer first-content-footer">
                                <a href="#home">
                                    <img
                                        src={dataLogo}
                                        width="250"
                                        height="auto"
                                        alt="React Bootstrap logo"
                                    />
                                </a>
                                {DataFooter.map((ContentFooter) => (
                                    <React.Fragment key={ContentFooter.id}>
                                        <div className="div-lista-contenedor">
                                            <div className="div-lista-title d-flex align-items-center">
                                                <HiOutlineOfficeBuilding className="footer-icon" />
                                                <h4>Dirección</h4>
                                            </div>
                                            <a href={ContentFooter.linkdireccion}><p>{ContentFooter.direccion}</p></a>
                                        </div>
                                        <div className="div-lista-contenedor">
                                            <div className="div-lista-title d-flex align-items-center">
                                                <FaPhoneAlt className="footer-icon" />
                                                <h4>Conmutador</h4>
                                            </div>
                                            <a href={ContentFooter.telefonolink}><p>{ContentFooter.telefono}</p></a>
                                        </div>
                                        <div className="div-lista-contenedor">
                                            <div className="div-lista-title d-flex align-items-center">
                                                <h4>Departamento de Ventas</h4>
                                            </div>
                                            <p>Extensión: 602</p>
                                            <div className="d-flex align-items-center data-extra-dpto">
                                                <CiMail className="mini-logo-footer" />
                                                <a href={ContentFooter.ventasemaillink}><p><strong>Email: </strong>{ContentFooter.ventasemail}</p></a>
                                            </div>
                                        </div>
                                        <div className="div-lista-contenedor">
                                            <div className="div-lista-title d-flex align-items-center">
                                                <h4>Departamento de Proyectos</h4>
                                            </div>
                                            <p>Extensión: 601</p>
                                            <div className="d-flex align-items-center data-extra-dpto">
                                                <CiMail className="mini-logo-footer" />
                                                <a href={ContentFooter.proyectosemaillink}><p><strong>Email: </strong>{ContentFooter.proyectosmail}</p></a>
                                            </div>
                                        </div>
                                        <div className="div-lista-contenedor">
                                            <div className="div-lista-title d-flex align-items-center">
                                                <FaRegClock className="footer-icon" />
                                                <h4>Horario</h4>
                                            </div>
                                            <p>Lunes - Viernes: 9:00 AM - 18:00 PM</p>
                                            <p>Sábado: 9:00 AM - 13:00 PM</p>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </Col>
                        <Col xs={{ order: 2, span: 12 }} sm={{ order: 2, span: 2 }}>
                            <div className="menu-footer">
                                <div className="acordion-item-footer">
                                    <h2 className="centered-header">Servicios</h2>
                                    <div className="card-list-footer">
                                        <Card.Link href="#" className="d-block card-link-block">Conmutadores</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Controles de acceso biometricos</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Diseño de Páginas Web</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Enlaces inalámbricos</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Facturación Electrónica</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Fibra óptica</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Mantenimiento a Equipos</Card.Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{ order: 3, span: 12 }} sm={{ order: 3, span: 2 }}>
                            <div className="menu-footer">
                                <div className="acordion-item-footer">
                                    <h2 className="centered-header">Servicios</h2>
                                    <div className="card-list-footer">
                                        <Card.Link href="#" className="d-block card-link-block">Outsourcing</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Redes de voz y datos</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Sistemas de almacenamiento en red</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Sistemas de energía</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Terminales Punto de Venta</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Tierras físicas</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Video vigilancia CCTV/IP</Card.Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{ order: 4, span: 12 }} sm={{ order: 4, span: 2 }}>
                            <div className="menu-footer">
                                <div className="acordion-item-footer">
                                    <h2 className="centered-header">Nosotros</h2>
                                    <div className="card-list-footer">
                                        <Card.Link href="#" className="d-block card-link-block">Misión</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Visión</Card.Link>
                                        <Card.Link href="#" className="d-block card-link-block">Valores</Card.Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}
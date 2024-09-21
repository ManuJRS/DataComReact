import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FiActivity } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";

export const TripeCard = () => {
    return (
        <Container  className="my-5">
            <Row>
                <Col xs={12} sm={4}>
                    <Card className="triple-card-nosotros">
                        <div className="icon-container">
                        <GoTrophy className="card-icon" />
                        </div>
                        <Card.Body>
                            <h3>Misión</h3>
                            <p>Brindar un trato amable, cordial, confiable y seguro al cliente, facilitando las herramientas de trabajo que necesiten, con el objetivo principal de cumplir y satisfacer sus expectativas.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4}>
                    <Card className="triple-card-nosotros">
                    <div className="icon-container">
                        <FaRegEye className="card-icon" />
                        </div>
                        <Card.Body>
                        <h3>Visión</h3>
                        <p>Ser una empresa en constante evolución, con una actitud dinámica y vanguardista en tecnología, dedicada a resolver cualquier problema que enfrenten tanto los clientes como la empresa.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4}>
                    <Card className="triple-card-nosotros">
                    <div className="icon-container">
                        <FiActivity className="card-icon" />
                        </div>
                        <Card.Body>
                        <h3>Valores</h3>
                        <p>nuestros valores fundamentales son la eficiencia para maximizar los recursos y satisfacer las necesidades de los clientes, el compromiso de cumplir nuestras responsabilidades con dedicación, y la honestidad para enfrentar y superar nuestros defectos con integridad.</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
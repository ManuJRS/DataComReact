import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardIntroContent } from './CardIntroContent';
import DataCardIntro from '../../Data/DataCardIntro';


export const CardIntro = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={0} sm={3}></Col>
                <Col xs={12} sm={6}>
                    {DataCardIntro.map((cardIntro) => (
                        <Card className="card-intro" key={cardIntro.id}>
                            <CardIntroContent
                                introh2={cardIntro.introh2}
                                introtext={cardIntro.introtext}
                            />
                        </Card>
                    ))}
                </Col>
                <Col xs={0} sm={3}></Col>
            </Row>
        </Container>
    )
}

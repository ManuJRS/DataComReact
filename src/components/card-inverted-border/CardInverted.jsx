import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardInvertedContentOne } from './CardInvertedContentOne';
import { CardInvertedContentTwo } from './CardInvertedContentTwo.jsx';
import DataCardOne from '../../Data/DataCardOne.js';
import DataCardTwo from '../../Data/DataCardTwo.js';


export const CardInverted = () => {
    return (
        <Container>
            {/** PRIMERA CARD */}
            <Row>
                <Col xs={0} sm={1}></Col>
                <Col xs={12} sm={8}>
                    {DataCardOne.map((ContentCardOne) => (
                        <Card className="my-5 card-inverted" key={ContentCardOne.id}>
                            <CardInvertedContentOne
                                imgOneCardInverted={ContentCardOne.imgOneCardInverted}
                                titulocardone={ContentCardOne.titulocardone}
                                textcardone={ContentCardOne.textcardone}
                                LinkCardOne={ContentCardOne.LinkCardOne}
                            />
                        </Card>
                    ))}
                </Col>
                <Col xs={0} sm={3}></Col>
            </Row>
            {/** SEGUNDA CARD */}
            <Row>
                <Col xs={0} sm={3}></Col>
                <Col xs={12} sm={8}>
                    {DataCardTwo.map((ContentCardTwo) => (
                        <Card className="ms-auto card-inverted" key={ContentCardTwo.id}>
                            <CardInvertedContentTwo 
                            imgTwoCardInverted={ContentCardTwo.imgTwoCardInverted}
                            titulocardtwo={ContentCardTwo.titulocardtwo}
                            textcardtwo={ContentCardTwo.textcardtwo}
                            LinkCardtwo={ContentCardTwo.LinkCardtwo}
                            />
                        </Card>
                    ))}
                </Col>
                <Col xs={0} sm={1}></Col>
            </Row>
        </Container>
    )
}
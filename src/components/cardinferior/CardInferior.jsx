import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardInferiorContentThree } from '../cardinferior/CardInferiorContentThree'
import DataCardThree from '../../Data/DataCardThree';
import DataCardFour from '../../Data/DataCardFour';
import { CardInferiorContentFour } from './CardInferiorContentFour';

export const CardInferior = () => {
    return (
        <Container>
            {/** PRIMERA CARD */}
            <Row>
                <Col xs={0} sm={1}></Col>
                <Col xs={12} sm={8}>
                    {DataCardThree.map((ContentCardThree) => (
                        <Card className="my-5 card-inverted" key={ContentCardThree.id}>
                            <CardInferiorContentThree
                                imgOneCardInferior={ContentCardThree.imgOneCardInferior}
                                titulocarthree={ContentCardThree.titulocarthree}
                                textcardthree={ContentCardThree.textcardthree}
                                LinkCardthree={ContentCardThree.LinkCardthree}
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
                    {DataCardFour.map((ContentCardFour) => (
                        <Card className="ms-auto card-inverted" key={ContentCardFour.id}>
                            <CardInferiorContentFour
                            imgTwoCardInferior={ContentCardFour.imgTwoCardInferior}
                            titulocardfour={ContentCardFour.titulocardfour}
                            textcardfour={ContentCardFour.textcardfour}
                            LinkCardfour={ContentCardFour.LinkCardfour}
                            />
                        </Card>
                    ))}
                </Col>
                <Col xs={0} sm={1}></Col>
            </Row>
        </Container>
    )
}
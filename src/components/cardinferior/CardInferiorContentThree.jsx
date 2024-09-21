import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



export const CardInferiorContentThree = ({ imgOneCardInferior, titulocarthree, textcardthree, LinkCardthree }) => {
    return (
        <>
            <Card.Img className="img-card" variant="top" src={imgOneCardInferior} />
            <Card.Body className="card-inverted-body">
                <Card.Title><h2>{titulocarthree}</h2></Card.Title>
                <hr />
                <Card.Text className="card-text-inverted">{textcardthree}</Card.Text>
                <div className="card-btn-inverted">
                <Link to={LinkCardthree}><Button className="btn-card-contact" variant="secondary">Más información</Button></Link>
                </div>
            </Card.Body>
        </>
    )
}

CardInferiorContentThree.propTypes = {
    imgOneCardInferior: PropTypes.string.isRequired,
    titulocarthree: PropTypes.string.isRequired,
    textcardthree: PropTypes.string.isRequired,
    LinkCardthree: PropTypes.string.isRequired,
}
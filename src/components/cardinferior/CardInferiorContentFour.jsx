import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export const CardInferiorContentFour = ({imgTwoCardInferior, titulocardfour, textcardfour, LinkCardfour}) => {
    return (
        <>
            <Card.Img className="img-card" variant="top" src={imgTwoCardInferior} />
            <Card.Body style={{ textAlign: 'right' }} className="card-inverted-body">
                <Card.Title><h2>{titulocardfour}</h2></Card.Title>
                <hr />
                <Card.Text className="card-text-inverted">{textcardfour}</Card.Text>
                <div className="card-btn-inverted">
                <Link to={LinkCardfour}><Button className="btn-card-contact" variant="secondary">Más información</Button></Link>
                </div>
            </Card.Body>
        </>
    )
}

CardInferiorContentFour.propTypes = {
    imgTwoCardInferior: PropTypes.string.isRequired,
    titulocardfour: PropTypes.string.isRequired,
    textcardfour: PropTypes.string.isRequired,
    LinkCardfour: PropTypes.string.isRequired,
}
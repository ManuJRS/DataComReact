import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CardInvertedContentTwo = ({ imgTwoCardInverted, titulocardtwo, textcardtwo, LinkCardtwo }) => {
    return (
        <>
            <Card.Img className="img-card" variant="top" src={imgTwoCardInverted} />
            <Card.Body style={{ textAlign: 'right' }} className="card-inverted-body">
                <Card.Title> <h2>{titulocardtwo}</h2></Card.Title>
                <hr />
                <Card.Text className="card-text-inverted">{textcardtwo}</Card.Text>
                <div className="card-btn-inverted">
                    <Link to={LinkCardtwo}><Button className="btn-card-contact" variant="secondary">Más información</Button></Link>
                </div>
            </Card.Body>
        </>
    )
}

CardInvertedContentTwo.propTypes = {
    imgTwoCardInverted: PropTypes.string.isRequired,
    titulocardtwo: PropTypes.string.isRequired,
    textcardtwo: PropTypes.string.isRequired,
    LinkCardtwo: PropTypes.string.isRequired,
}
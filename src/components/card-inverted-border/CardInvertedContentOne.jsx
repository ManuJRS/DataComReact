import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export const CardInvertedContentOne = ({titulocardone, textcardone, imgOneCardInverted, LinkCardOne}) => {
  return (
    <>
      <Card.Img className="img-card" variant="top" src={imgOneCardInverted} />
      <Card.Body className="card-inverted-body">
        <Card.Title><h2>{titulocardone}</h2></Card.Title>
        <hr />
        <Card.Text className="card-text-inverted">{textcardone}</Card.Text>
        <div className="card-btn-inverted">
          <Link to={LinkCardOne}><Button className="btn-card-contact" variant="secondary">Más información</Button></Link>
        </div>
      </Card.Body>
    </>
  )
}

CardInvertedContentOne.propTypes = {
  imgOneCardInverted: PropTypes.string.isRequired,
  textcardone: PropTypes.string.isRequired,
  titulocardone: PropTypes.string.isRequired,
  LinkCardOne: PropTypes.string.isRequired,
}
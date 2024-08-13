import React from 'react'
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiWorld } from "react-icons/bi";


export const CardIntroContent = ({ introh2, introtext}) => {
    return (
        <div>
            <Card.Body>
                <div className='d-flex text-intro justify-content-center'>
                    <Card.Title><h2>{introh2}</h2></Card.Title>
                    <BiWorld className="wordl-icon" />
                </div>
                <Card.Text className="card-texto">{introtext}</Card.Text>
                <div className="d-flex justify-content-center my-2">
                    <Button variant="secondary" className="btn-card">¡Quiero más información!</Button>
                </div>
            </Card.Body>
        </div>
    )
}

CardIntroContent.propTypes = {
    introh2: PropTypes.string.isRequired,
    introtext: PropTypes.string.isRequired,
}
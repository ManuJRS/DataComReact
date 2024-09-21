import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export const IntroServicioConmutadores = ({introconmutadores, disponibilidadconmutadores}) => {
    return (
        <div>
            <div className="intro-servicios">
                <h1>{introconmutadores}</h1>
                <hr className="linea-div-servicios" />
                <h4>{disponibilidadconmutadores}</h4>
            </div>
        </div>
    )
}

IntroServicioConmutadores.propTypes = {
    introconmutadores: PropTypes.string.isRequired,
    disponibilidadconmutadores: PropTypes.string.isRequired,
}


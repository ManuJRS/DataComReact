import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'leaflet/dist/leaflet.css';
import { SiGooglemaps } from "react-icons/si";
import { MapContent } from '../Maps/MapContent';


export const Map = () => {
    return (
        <Container className="main-content-map-home">
            <div className="content-map-title">
                <div className='d-flex justify-content-center align-items-center'>
                    <h2>¿Cómo llegar?</h2>
                    <SiGooglemaps className="google-icon" />
                </div>
                <div className="map-direccion d-flex justify-content-center">
                    <p>Av Alemán calle 4, 53-local 8 planta alta, entre Calle 5, Felipe Carrillo Puerto, 97136 Mérida, Yuc.</p>
                </div>
                <div className="d-flex justify-content-center">
                    <Button className="btn-card" variant="secondary">Mapa</Button>
                </div>
                <hr className="my-3 d-flex justify-content-center" />
            </div>
            <div className="contenedor-mapa-inicio">
                <MapContent />
            </div>
        </Container>
    );
};

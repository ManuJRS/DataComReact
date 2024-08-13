import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Container from 'react-bootstrap/Container';
import 'leaflet/dist/leaflet.css';


const position = [20.997289186042153, -89.597151115419]; // Coordenadas para centrar el mapa


export const MapContent = () => {
    return (
        <MapContainer center={position} zoom={18} style={{ height: "100%", width: "100%", borderRadius: "10px", overflow: "hidden" }} className="Map-google">
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            <Marker position={position}>
                <Popup>DATACOM<br /> Proveedor de servicios de telecomunicaciones
                </Popup>
            </Marker>
        </MapContainer>
    )
}
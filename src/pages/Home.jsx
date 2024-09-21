import React, { useEffect } from 'react'
import { CardIntro } from '../components/Card-Intro/CardIntro'
import { CardInverted } from '../components/card-inverted-border/CardInverted'
import { CarouselSlider } from '../components/Carousel/CarouselSlider'
import { CardInferior } from '../components/cardinferior/CardInferior'
import { Map } from '../components/Maps/Map'
import { FooterComponent } from '../components/footer/FooterComponent'

export const Home = () => {
    /*useEffect(() => {
        alert('Bienvenido a la página principal!');
    }, []);*/
    return (
        <div>
            <CarouselSlider />
            <CardInverted />
            <CardIntro />
            <CardInferior />
            <Map />
            <FooterComponent />
        </div>
    )
}
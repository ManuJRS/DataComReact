import React from 'react'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

export const CarouselItemContent = ({imgCarousel, Carouselh2, Carouselh3, Carouselp}) => {
    return (
        <div>
                <img className="img-carousel-component" src={imgCarousel} alt="First slide" />
                <Carousel.Caption className="Caption-container">
                    <h2>{Carouselh2}</h2>
                    <h3><strong>{Carouselh3}</strong></h3>
                    <p>{Carouselp}</p>
                    <hr className="divider" />
                    <Button variant="secondary">Ver oferta</Button>
                </Carousel.Caption>
        </div>
    )
}

CarouselItemContent.propTypes = {
    imgCarousel: PropTypes.string.isRequired,
    Carouselh2: PropTypes.string.isRequired,
    Carouselh3: PropTypes.string.isRequired,
    Carouselp: PropTypes.string.isRequired,
}
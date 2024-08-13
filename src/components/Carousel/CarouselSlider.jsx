import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DataCarouselSlider from '../../DataCarousel/DataCarouselSlider';
import { CarouselItemContent } from '../Carousel/CarouselItemContent';

export function CarouselSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="CarouselSlider">
            
            {DataCarouselSlider.map((contentSlider) => (
                <Carousel.Item key={contentSlider.id}>
                    <CarouselItemContent
                    imgCarousel={contentSlider.imgCarousel}
                    Carouselh2={contentSlider.Carouselh2}
                    Carouselh3={contentSlider.Carouselh3}
                    Carouselp={contentSlider.Carouselp}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
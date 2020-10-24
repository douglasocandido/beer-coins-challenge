import React from "react";
import {
    Carousel,
} from 'react-bootstrap';
import './style.scss';

const imageUrl = 'https://emporiodacerveja.vtexassets.com/arquivos/ids/178169-800-auto?width=800&height=auto&aspect=true'

const CarouselComponent = () => {
    return (
        <Carousel indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <p>Conheça nosso programa de pontos</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <p>Conheça nosso programa de pontos</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <p>Conheça nosso programa de pontos</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default CarouselComponent; 
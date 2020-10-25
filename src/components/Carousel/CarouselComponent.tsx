import React from "react";
import { Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './style.scss';

const imageUrl = 'https://emporiodacerveja.vtexassets.com/arquivos/ids/178169-800-auto?width=800&height=auto&aspect=true'

const CarouselComponent = () => {

    const history = useHistory();

    const redirectToRewards = () => {
        history.push('/rewards')
    }

    return (
        <Carousel indicators={false}>
            <Carousel.Item onClick={redirectToRewards} className="carousel-item">
                <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <p>Conheça nosso programa de pontos</p>
                    <p><b>Beerwards</b></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item onClick={redirectToRewards} className="carousel-item">
                <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <p>Conheça nosso programa de pontos</p>
                    <p><b>Beerwards</b></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item onClick={redirectToRewards} className="carousel-item">
                <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <p>Conheça nosso programa de pontos</p>
                    <p><b>Beerwards</b></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    )
};

export default CarouselComponent; 
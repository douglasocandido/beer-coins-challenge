import React from "react";
import { Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './style.scss';
import cauim from '../../assets/images/rewards-cauim.jpg';
import original from '../../assets/images/rewards-original.jpg';
import hallo from '../../assets/images/rewards-hallo.jpg'


const CarouselComponent = () => {

    const history = useHistory();

    const redirectToRewards = () => {
        history.push('/rewards')
    }

    return (
        <>
        <header className='rewards-header'>
            <h2>Conheça nosso programa de pontos</h2>
            <h3><b>Beerwards</b></h3>
        </header>   
        <Carousel indicators={false}>
            <Carousel.Item onClick={redirectToRewards} className="carousel-item">
                <img
                    className="d-block w-100"
                    src={cauim}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item onClick={redirectToRewards} className="carousel-item">
                <img
                    className="d-block w-100"
                    src={original}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item onClick={redirectToRewards} className="carousel-item">
                <img
                    className="d-block w-100"
                    src={hallo}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel >
    </>
    )
    
};

export default CarouselComponent; 
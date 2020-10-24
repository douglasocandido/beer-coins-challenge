import React from 'react'
import {
    Button,
    Card
} from 'react-bootstrap';
import "./style.scss";

interface ICard {
    title: string,
    description: string,
    price: number,
    imageUrl: string,

}

const CardComponent: React.FC<ICard> = ({ title, description, price, imageUrl }) => {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{description}</Card.Subtitle>
                <div className="card-bottom-wrapper">

                    <Card.Text className="product-price">Valor: B$ {price}</Card.Text>
                    <Button className="regular-button" variant="primary">Resgatar</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardComponent
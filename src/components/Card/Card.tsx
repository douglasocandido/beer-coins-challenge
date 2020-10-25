import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import ConfirmExchange from "../../pages/Rewards/components/ConfirmExchange"
import "./style.scss";

interface ICard {
    title: string,
    description: string,
    price: number,
    imageUrl: string,

}

const CardComponent: React.FC<ICard> = ({ title, description, price, imageUrl }) => {
    const [showExchangeModal, setShowExchangeModal] = useState<boolean>()
    const handleShow = () => setShowExchangeModal(true)
    const handleClose = () => setShowExchangeModal(false)
    return (
        <>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{description}</Card.Subtitle>
                    <div className="card-bottom-wrapper">
                        <Card.Text className="product-price">Valor: B$ {price}</Card.Text>
                        <Button className="regular-button" onClick={handleShow} variant="primary">Resgatar</Button>
                    </div>
                </Card.Body>
            </Card>
            <ConfirmExchange productTitle={title} productPrice={price} show={!!showExchangeModal} handleShow={handleShow} handleClose={handleClose} />
        </>
    )
}

export default CardComponent
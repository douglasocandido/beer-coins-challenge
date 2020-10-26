import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import ConfirmExchange from "../../pages/Rewards/components/ConfirmExchange"
import "./style.scss";

interface ICard {
    title: string,
    description: string,
    price: number,
    imageUrl: string,
    productId: number

}

const CardComponent: React.FC<ICard> = ({ title, productId, description, price, imageUrl }) => {
    const [showExchangeModal, setShowExchangeModal] = useState<boolean>(false)

    const handleShow = () => setShowExchangeModal(true)
    const handleClose = () => setShowExchangeModal(false)

    return (
        <>
            <Card style={{ width: '300px', height: '100%', maxHeight: '600px' }}>
                <Card.Img variant="top" className="card-image" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{description}</Card.Subtitle>
                    <div className="card-bottom-wrapper">
                        <Card.Text className="product-price">Valor: B$ {price}</Card.Text>
                        <Button className="regular-button" onClick={handleShow} variant="primary">Resgatar</Button>
                    </div>
                </Card.Body>
            </Card>
            <ConfirmExchange productTitle={title} productId={productId} productPrice={price} show={!!showExchangeModal} handleShow={handleShow} handleClose={handleClose} />
        </>
    )
}

export default CardComponent
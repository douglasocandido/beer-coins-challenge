import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import ConfirmExchange from "../../pages/Rewards/components/ConfirmExchange"
import "./style.scss";
import { useAppState } from '../../AppContext';

interface ICard {
    title: string,
    description: string,
    price: number,
    imageUrl: string,
    productId: number
}

const CardComponent: React.FC<ICard> = ({ title, productId, description, price, imageUrl }) => {
    const [showExchangeModal, setShowExchangeModal] = useState<boolean>(false)
    const { user } = useAppState()
    const { Saldo: saldo } = user
    const handleShow = () => setShowExchangeModal(true)
    const handleClose = () => setShowExchangeModal(false)
    const isButtonEnabled = saldo > price
    return (
        <>
            <Card className="card-container">
                <Card.Img variant="top" className="card-image" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{description}</Card.Subtitle>
                    <div className="card-bottom-wrapper">
                        <Card.Text className="product-price">Valor: B$ {price}</Card.Text>
                        <Button disabled={!isButtonEnabled} className="regular-button" onClick={handleShow} variant="primary">Resgatar</Button>
                    </div>
                </Card.Body>
            </Card>
            <ConfirmExchange productTitle={title} productId={productId} productPrice={price} show={!!showExchangeModal} handleShow={handleShow} handleClose={handleClose} />
        </>
    )
}

export default CardComponent
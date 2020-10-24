import React from "react";
import {
    Jumbotron,
    Button,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import './style.scss'
import ModalTransfer from '../ModalTransfer'
import HistoryRewards from '../../pages/Rewards/components/HistoryRewards'

interface PresentationProps {
    title: string;
    balance: number;
    backToHome?: boolean;
    isRewardsScreen?: boolean,
    image: string;
}

const Presentation = ({ title, balance, backToHome, isRewardsScreen, image }: PresentationProps) => {

    const [isModalVisible, setModalVisible] = React.useState(false);
    const handleCloseModal = () => setModalVisible(false);
    const handleOpenModal = () => setModalVisible(true);

    return (
        <Jumbotron className='presentation-container'>
            <Row>
                <Col>
                    <h1 className='presentation-title'>{title}</h1>
                    <Row>
                        <Col className='align-left'>
                            <p className='presentation-subtitle'>Saldo em conta:</p>
                            <p className='presentation-subtitle'>B$ {balance}</p>
                        </Col>
                        {
                            !isRewardsScreen ?
                                <Col className='align-center'>
                                    {<p><Button className='regular-button' variant="warning" onClick={handleOpenModal}>Transferir</Button></p>}
                                    {backToHome && <p><Button className='regular-outline-button' variant="outline-warning" href="/">Voltar</Button></p>}
                                </Col>
                                :
                                <Col className='align-center'>
                                    <p><Button className='regular-button' variant="warning" onClick={handleOpenModal}>Ver histórico</Button></p>
                                    <p><Button className='regular-outline-button' variant="outline-warning" href="/">Voltar</Button></p>
                                </Col>
                        }
                    </Row>
                </Col>
                <Col className='align-center'>
                    <Image className='presentation-image' src={image} />
                </Col>
            </Row>
            {
                isRewardsScreen ?
                    <HistoryRewards handleClose={handleCloseModal} handleShow={handleOpenModal} show={isModalVisible} />
                    :
                    <ModalTransfer hash={"sssss"} handleClose={handleCloseModal} show={isModalVisible} />
            }
        </Jumbotron>
    )
};

export default Presentation;

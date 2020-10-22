import React from "react";
import { 
    Jumbotron, 
    Button,
    Row,
    Col,
    Image
} from 'react-bootstrap';


interface PresentationProps {
    title: string;
    balance: number;
    backToHome?: boolean;
    image: string;
}

const Presentation = ({ title, balance, backToHome, image }: PresentationProps) => {
    return (
        <Jumbotron style={{ backgroundColor: '#fff', marginBottom: '0px', padding: '2rem 2rem' }}>
            <Row>
                <Col>
                    <h1 style={{ textAlign: 'center', marginBottom: '25px' }}>{title}</h1>
                    <Row>
                        <Col style={{ textAlign: 'center' }}>
                            <p style={{fontSize: '23px'}}>Saldo em conta:</p>
                            <p style={{fontSize: '23px'}}>B$ {balance}</p>
                        </Col>
                        <Col style={{ textAlign: 'center' }}>
                            <p><Button style={{ color: '#fff', fontWeight: 'bold', backgroundColor: '#FF8832', borderColor: '#FF8832' }} variant="warning">Transferir</Button></p>
                            {backToHome ? <p><Button style={{ color: '#FF8832', borderColor: '#FF8832', backgroundColor: 'transparent' }} variant="outline-warning" href="/client">Voltar</Button></p> : null}
                        </Col>
                    </Row>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                    <Image style={{ height: '290px' }} src={image} />
                </Col>
            </Row>
            <ModalTransfer handleClose={handleCloseModal} handleShow={handleOpenModal} show={isModalVisible} />
        </Jumbotron>
    )
};

export default Presentation;

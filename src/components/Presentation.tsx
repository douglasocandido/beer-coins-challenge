import React, { CSSProperties } from "react";
import { 
    Jumbotron, 
    Button,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import contentImage from '../assets/images/client.svg'

interface PresentationProps {
    name: string;
    lastName: string;
    balance: number;
}

const outLineButtonStyle: CSSProperties =  {
    color: '#FF8832', 
    borderColor: '#FF8832',
    backgroundColor: 'transparent' 
}

const buttonStyle: CSSProperties = {
    color: '#fff', 
    fontWeight: 'bold', 
    backgroundColor: '#FF8832', 
    borderColor: '#FF8832'
}

const presentationTitle: CSSProperties = {
    textAlign: 'center', 
    marginBottom: '25px'
}

const presentationContainer: CSSProperties = {
    backgroundColor: '#fff', 
    marginBottom: '0px',
    padding: '2rem 2rem'
}

const textAlignCenter: CSSProperties = {
    textAlign: 'center'
}

const presentationImage: CSSProperties = {
    width: '290px'
}

const Presentation = ({ name, lastName, balance }: PresentationtProps) => {
    return (
        <Jumbotron style={ presentationContainer }>
            <Row>
                <Col>
                    <h1 style={ presentationTitle }>Olá, {name} {lastName}!</h1>
                    <Row>
                        <Col style={ textAlignCenter }>
                            <p>Saldo em conta:</p>
                            <p>R$ {balance}</p>
                        </Col>
                        <Col style={ textAlignCenter }>
                            <p><Button style={ buttonStyle } variant="warning">Transferir</Button></p>
                            <p><Button style={ outLineButtonStyle } variant="outline-warning">Ver extrato</Button></p>
                        </Col>
                    </Row>
                </Col>
                <Col style={ textAlignCenter }>
                    <Image style={ presentationImage } src={contentImage} />
                </Col>
            </Row>
        </Jumbotron>
    )
};

export default Presentation;

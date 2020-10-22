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
    backToHome?: boolean;
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

const Presentation = ({ name, lastName, balance, backToHome }: PresentationProps) => {
    return (
        <Jumbotron style={ presentationContainer }>
            <Row>
                <Col>
                    <h1 style={ presentationTitle }>Olá, {name} {lastName}!</h1>
                    <Row>
                        <Col style={ textAlignCenter }>
                            <p style={{fontSize: '23px'}}>Saldo em conta:</p>
                            <p style={{fontSize: '23px'}}>B$ {balance}</p>
                        </Col>
                        <Col style={ textAlignCenter }>
                            <p><Button style={ buttonStyle } variant="warning">Transferir</Button></p>
                            {backToHome ? <p><Button style={ outLineButtonStyle } variant="outline-warning" href="/client">Voltar</Button></p> : null}
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

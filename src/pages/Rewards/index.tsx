import React from 'react';
import Presentation from '../../components/Presentation/index';
import NavbarComponent from '../../components/NavbarComponent';
import {
    Row,
    Col,
} from 'react-bootstrap';
import contentImage from '../../assets/images/rewards.svg';
import Card from "../../components/Card/Card"

import './style.scss';

const imageUrl = 'https://emporiodacerveja.vtexassets.com/arquivos/ids/178169-800-auto?width=800&height=auto&aspect=true'


export default function Rewards() {
    return (
        <>
            <NavbarComponent name="Douglas" />
            <Presentation isRewardsScreen={true} title="Rewards" balance={9999.77} image={contentImage} />
            <Row className='client-container'>
                <Col xs={6} md={4}>
                    <Card title='Colorado do Leme ao Pontal' price={9020} description=' A refrescancia já é uma caracteristica do estilo Summer Ale' imageUrl={imageUrl} />
                </Col>
                <Col xs={6} md={4}>
                    <Card title='Colorado do Leme ao Pontal' price={9020} description=' A refrescancia já é uma caracteristica do estilo Summer Ale' imageUrl={imageUrl} />
                </Col>
                <Col xs={6} md={4}>
                    <Card title='Colorado do Leme ao Pontal' price={9020} description=' A refrescancia já é uma caracteristica do estilo Summer Ale' imageUrl={imageUrl} />
                </Col>
            </Row>
        </>
    )
}
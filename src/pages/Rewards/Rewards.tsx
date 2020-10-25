import React from 'react';
import {
    Row,
    Col,
} from 'react-bootstrap';
import { Card, Presentation, NavbarComponent } from '../../components/';
import contentImage from '../../assets/images/rewards.svg';

import './style.scss';

const imageUrl = 'https://emporiodacerveja.vtexassets.com/arquivos/ids/178169-800-auto?width=800&height=auto&aspect=true'

export default function Rewards() {

    return (
        <>
            <NavbarComponent />
            <Presentation isRewardsScreen={true} title="Beerwards" image={contentImage} />
            <Row className='client-container'>
                <Col>
                    <Card title='Colorado do Leme ao Pontal' price={9020} description=' A refrescancia já é uma caracteristica do estilo Summer Ale' imageUrl={imageUrl} />
                </Col>
                <Col>
                    <Card title='Colorado do Leme ao Pontal' price={9020} description=' A refrescancia já é uma caracteristica do estilo Summer Ale' imageUrl={imageUrl} />
                </Col>
                <Col>
                    <Card title='Colorado do Leme ao Pontal' price={9020} description=' A refrescancia já é uma caracteristica do estilo Summer Ale' imageUrl={imageUrl} />
                </Col>
            </Row>
        </>
    )
}
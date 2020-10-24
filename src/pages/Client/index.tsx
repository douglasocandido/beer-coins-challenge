import React from 'react';
import Presentation from '../../components/Presentation/index';
import CarouselComponent from "../../components/Carousel/index"
import NavbarComponent from '../../components/NavbarComponent';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { useAppState } from '../../AppContext';

import ReceiptTable from '../../components/ReceiptTable';
import OperationsTable from '../../components/OperationsTable';
import contentImage from '../../assets/images/client.svg';
import './style.scss';

export default function Client() {

  const history = useHistory();
  const handleRedirect = (url: string) => {
    history.push(`/${url}`)
  }

  const { user } = useAppState()
  return (
    <>
      <NavbarComponent />
      <Presentation title={`Olá, ${user.Nome}`} balance={9999.77} image={contentImage} />
      <Row className='client-container'>
        <Col xs={6}>
          <Row className="justify-content-center resumed-table" style={{ marginBottom: '20px' }}>
            <h2>Últimos lançamentos</h2>
            <ReceiptTable tableSize={3} />
            <Button className='regular-outline-button' variant="outline-warning" onClick={() => handleRedirect('receipt')}>Ver todos os lançamentos</Button>
          </Row>
          <Row className="justify-content-center resumed-table" style={{ marginBottom: '20px' }}>
            <h2>Extrato</h2>
            <OperationsTable tableSize={3} />
            <Button className='regular-outline-button' variant="outline-warning" onClick={() => handleRedirect('operations')}>Ver extrato completo</Button>
          </Row>
        </Col>
        <Col className='rewards-preview-container'>
          <div className='rewards-preview'>
            <CarouselComponent />
          </div>
        </Col>
      </Row>
    </>
  )
}
import React from 'react';
import { OperationsTable, ReceiptTable, Presentation, Carousel, NavbarComponent } from '../../components';
import { Row, Col } from 'react-bootstrap';
import { useAppState } from '../../AppContext';
import contentImage from '../../assets/images/client.svg';
import './style.scss';

export default function Client() {
  const { user } = useAppState();

  return (
    <>
      <NavbarComponent />
      <Presentation title={`Olá, ${user.Nome}`} image={contentImage} />
      <Row className='client-container'>
        <Col>
          <Row className="justify-content-center resumed-table">
            <Col>
              <Row className="justify-content-center">
                <h2>Últimos lançamentos</h2>
              </Row>
              <Row className="justify-content-center">
                <ReceiptTable tableSize={3} isClientDashboard />
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center resumed-table">
            <Col>
              <Row className="justify-content-center">
                <h2>Resumo do Extrato</h2>
              </Row>
              <Row className="justify-content-center">
                <OperationsTable tableSize={3} isClientDashboard />
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className='rewards-preview-container'>
          <div className='rewards-preview'>
            <Carousel />
          </div>
        </Col>
      </Row>
    </>
  )
}
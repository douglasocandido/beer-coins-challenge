import React, { CSSProperties } from 'react';
import Presentation from '../components/Presentation';
import NavbarComponent from '../components/NavbarComponent';
import { 
  Row,
  Col,
  Button
} from 'react-bootstrap';
import SummaryTable from '../components/SummaryTable';

const outLineButtonStyle: CSSProperties =  {
  color: '#FF8832', 
  borderColor: '#FF8832',
  backgroundColor: 'transparent',
}

export default function Client() {
  return (
    <>
      <NavbarComponent name="Douglas"></NavbarComponent>
      <Presentation name="Douglas" lastName="Candido" balance={9999.77}></Presentation>
      <Row style={{ padding: '0rem 2rem 2rem 2rem', marginRight: 0, marginLeft: 0 }}>
        <Col xs={8}>
          <Row className="justify-content-center" style={{ marginBottom: '20px' }}>
            <SummaryTable tableTitle='Últimos lançamentos' />
            <Button style={ outLineButtonStyle } variant="outline-warning">Ver todos os lançamentos</Button>
          </Row>
          <Row className="justify-content-center" style={{ marginBottom: '20px' }}>
            <SummaryTable tableTitle='Extrato' />
            <Button style={ outLineButtonStyle } variant="outline-warning">Ver extrato completo</Button>
          </Row>
        </Col>
        <Col style={{ padding: '2rem 4rem' }}>
          <div style={{ width: '100%', height: '100%', backgroundColor: '#dedede' }}></div>
        </Col>
      </Row>
    </>
  )
}
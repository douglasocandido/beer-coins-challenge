import React, { CSSProperties } from 'react';
import Presentation from '../components/Presentation';
import NavbarComponent from '../components/NavbarComponent';
import { 
  Row,
  Col,
  Button
} from 'react-bootstrap';
import ReceiptTable from '../components/ReceiptTable';
import OperationsTable from '../components/OperationsTable';
import IReceiptData from '../interfaces/IReceiptData';
import IOperationData from '../interfaces/IOperationData';

const receipts: IReceiptData[] = [
  {
    id: '23145656',
    value: 200, 
    operationDate: new Date()
  },
  {
    id: '2342344',
    value: 500, 
    operationDate: new Date()
  },
  {
    id: '7907890',
    value: 1000, 
    operationDate: new Date()
  }
];

const operations: IOperationData[] = [
  {
    id: '654651',
    beneficiary: 'Sheldon Cooper',
    value: 200, 
    operationDate: new Date(),
    operationType: 'Transferência'
  },
  {
    id: '23234',
    beneficiary: 'Rajesh Koothrappali',
    value: 200, 
    operationDate: new Date(),
    operationType: 'Transferência'
  },
  {
    id: '53563563',
    beneficiary: 'Leonard Hofstadter',
    value: 200, 
    operationDate: new Date(),
    operationType: 'Transferência'
  },
  {
    id: '2146980',
    beneficiary: 'Howard Wolowitz',
    value: 200, 
    operationDate: new Date(),
    operationType: 'Transferência'
  }
];

export default function Client() {
  return (
    <>
      <NavbarComponent name="Douglas" />
      <Presentation name="Douglas" lastName="Candido" balance={9999.77} />
      <Row style={{ padding: '0rem 2rem 2rem 2rem', marginRight: 0, marginLeft: 0 }}>
        <Col xs={6}>
          <Row className="justify-content-center" style={{ marginBottom: '20px' }}>
            <ReceiptTable tableTitle='Últimos lançamentos' receiptData={receipts}/>
            <Button style={{color: '#FF8832',  borderColor: '#FF8832', backgroundColor: 'transparent'}} variant="outline-warning" href="/receipt">Ver todos os lançamentos</Button>
          </Row>
          <Row className="justify-content-center" style={{ marginBottom: '20px' }}>
            <OperationsTable tableTitle='Extrato' operationData={operations}/>
            <Button style={{color: '#FF8832',  borderColor: '#FF8832', backgroundColor: 'transparent'}} variant="outline-warning" href="/operations">Ver extrato completo</Button>
          </Row>
        </Col>
        <Col style={{ padding: '2rem 4rem' }}>
          <div style={{ width: '100%', height: '100%', backgroundColor: '#dedede' }}></div>
        </Col>
      </Row>
    </>
  )
}
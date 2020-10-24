import React from 'react';
import Presentation from '../../components/Presentation';
import NavbarComponent from '../../components/NavbarComponent';
import { 
  Row,
  Col,
  Button
} from 'react-bootstrap';
import ReceiptTable from '../../components/ReceiptTable';
import OperationsTable from '../../components/OperationsTable';
import IReceiptData from '../../interfaces/IReceiptData';
import IOperationData from '../../interfaces/IOperationData';
import contentImage from '../../assets/images/client.svg';
import './style.scss'

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
      <Presentation title="Olá, Douglas Candido!" balance={9999.77} image={contentImage} />
      <Row className='client-container'>
        <Col xs={6}>
          <Row className="justify-content-center" style={{ marginBottom: '20px' }}>
            <h2>Últimos lançamentos</h2>
            <ReceiptTable receiptData={receipts}/>
            <Button className='regular-outline-button' variant="outline-warning" href="/receipt">Ver todos os lançamentos</Button>
          </Row>
          <Row className="justify-content-center" style={{ marginBottom: '20px' }}>
            <h2>Extrato</h2>
            <OperationsTable operationData={operations}/>
            <Button className='regular-outline-button' variant="outline-warning" href="/operations">Ver extrato completo</Button>
          </Row>
        </Col>
        <Col className='rewards-preview-container'>
          <div className='rewards-preview'></div>
        </Col>
      </Row>
    </>
  )
}
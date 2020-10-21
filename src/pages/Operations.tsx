import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import Presentation from '../components/Presentation';
import OperationsTable from '../components/OperationsTable';
import IOperationData from '../interfaces/IOperationData';

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

export default function Operations() {
  return (
    <>
      <NavbarComponent name="Douglas" />
      <Presentation name="Douglas" lastName="Candido" balance={9999.77} backToHome/>
      <div className="justify-content-center" style={{ textAlign: 'center', padding: '10px 45px' }}>
        <OperationsTable tableTitle='Extrato completo' operationData={operations}/>
      </div>
    </>
  )
}
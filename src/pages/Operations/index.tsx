import React from 'react';
import NavbarComponent from '../../components/NavbarComponent';
import Presentation from '../../components/Presentation';
import OperationsTable from '../../components/OperationsTable';
import IOperationData from '../../interfaces/IOperationData';
import contentImage from '../../assets/images/operations.svg';

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
      <Presentation title="Extrato completo" balance={9999.77} backToHome  image={contentImage}/>
      <div className="justify-content-center completed-table-container">
        <OperationsTable operationData={operations}/>
      </div>
    </>
  )
}
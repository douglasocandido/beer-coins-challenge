import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import Presentation from '../components/Presentation';
import ReceiptTable from '../components/ReceiptTable';
import IReceiptData from '../interfaces/IReceiptData';

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

export default function Operations() {
  return (
    <>
      <NavbarComponent name="Douglas" />
      <Presentation name="Douglas" lastName="Candido" balance={9999.77} backToHome/>
      <div className="justify-content-center" style={{ textAlign: 'center', padding: '10px 45px' }}>
        <ReceiptTable tableTitle='Todos lançamentos' receiptData={receipts}/>
      </div>
    </>
  )
}
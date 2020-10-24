import React from 'react';
import NavbarComponent from '../../components/NavbarComponent';
import Presentation from '../../components/Presentation';
import ReceiptTable from '../../components/ReceiptTable';
import IReceiptData from '../../interfaces/IReceiptData';
import contentImage from '../../assets/images/receipt.svg';

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

export default function Receipt() {
  return (
    <>
      <NavbarComponent name="Douglas" />
      <Presentation title="Todos meus lançamentos" balance={9999.77} backToHome image={contentImage} />
      <div className="justify-content-center completed-table-container">
        <ReceiptTable />
      </div>
    </>
  )

}
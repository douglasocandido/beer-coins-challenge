import React from 'react';
import NavbarComponent from '../../components/NavbarComponent';
import Presentation from '../../components/Presentation';
import ReceiptTable from '../../components/ReceiptTable';
import IReceiptData from '../../interfaces/IReceiptData';
import contentImage from '../../assets/images/receipt.svg';


export default function Receipt() {
  return (
    <>
      <NavbarComponent name="Douglas" />
      <Presentation title="Todos meus lançamentos" balance={9999.77} backToHome image={contentImage} />
      <div className="justify-content-center completed-table-container">
        <ReceiptTable receiptData={receipts}/>
      </div>
    </>
  )

}
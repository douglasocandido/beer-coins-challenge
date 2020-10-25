import React from 'react';
import { ReceiptTable, NavbarComponent, Presentation } from '../../components/';
import contentImage from '../../assets/images/receipt.svg';

export default function Receipt() {
  return (
    <>
      <NavbarComponent />
      <Presentation title="Todos meus lançamentos" backToHome image={contentImage} />
      <div className="justify-content-center completed-table-container">
        <ReceiptTable />
      </div>
    </>
  )

}
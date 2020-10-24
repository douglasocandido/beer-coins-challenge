import React from 'react';
import NavbarComponent from '../../components/NavbarComponent';
import Presentation from '../../components/Presentation';
import ReceiptTable from '../../components/ReceiptTable';
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
import React from 'react';
import { NavbarComponent, OperationsTable, Presentation } from '../../components/';
import contentImage from '../../assets/images/operations.svg';

export default function Operations() {

  return (
    <>
      <NavbarComponent />
      <Presentation title="Extrato completo" backToHome image={contentImage} />
      <div className="justify-content-center completed-table-container">
        <OperationsTable />
      </div>
    </>
  )
}
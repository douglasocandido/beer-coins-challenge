import React from 'react';
import NavbarComponent from '../../components/NavbarComponent';
import Presentation from '../../components/Presentation';
import OperationsTable from '../../components/OperationsTable';
import IOperationData from '../../interfaces/IOperationData';
import contentImage from '../../assets/images/operations.svg';

t default function Operations() {
  return(
    <NavbarComponent name="Douglas">
      <Presentation name="Douglas" lastName="Candido" balance={9999.77}></Presentation>    
    </NavbarComponent>

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
import React, { useEffect, useState } from 'react';
import NavbarComponent from '../../components/NavbarComponent';
import Presentation from '../../components/Presentation';
import OperationsTable from '../../components/OperationsTable';
import contentImage from '../../assets/images/operations.svg';
import { IExtrato } from '../../interfaces/Extrato'

import { apiService } from '../../App';

export default function Operations() {

  const [operations, setOperations] = useState<IExtrato[]>([]);

  useEffect(() => {
    (async () => {
      const operationsData = await apiService.extrato()
      setOperations(operationsData)
    } )()
  },[])

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
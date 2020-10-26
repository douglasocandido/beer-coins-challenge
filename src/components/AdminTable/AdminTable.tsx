import React, { useState, useEffect, useCallback } from "react";
import { toast } from 'react-toastify';
import { Spinner, Table } from "react-bootstrap"

import { IConta } from '../../interfaces/Conta'
import { Popover } from '../index'
import { apiService } from '../../App';

interface AdminTableProps {
  tableTitle: string;
}

const AdminTable = ({ tableTitle }: AdminTableProps) => {
  const [isLoading, setLoading] = useState(true);
  const [adminData, setAdminData] = useState<IConta[]>([]);

  const fetchTableData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiService.listaContas();
      setAdminData(data);
    } catch (error) {
      console.error(error);
      toast.error('Ooops algo de errado não está certo. Tente novamente mais tarde');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTableData();
  }, [fetchTableData]);

  return (
    <>
      {
        isLoading ?
          <div className="spinner-container">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div> :
          <>
            <h2>{tableTitle}</h2>
            <Table className='text-align-center'>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>CNPJ</th>
                  <th>Saldo</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {adminData.map((conta: IConta, index: number) => (
                  <tr key={conta.hash}>
                    <td>{conta.nome}</td>
                    <td>{conta.email}</td>
                    <td>{conta.cnpj}</td>
                    <td>{conta.saldo}</td>
                    <td>
                      <Popover hash={conta.hash} nome={conta.nome} onCompleted={fetchTableData} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
      }
    </>
  )
};

export default AdminTable;
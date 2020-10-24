import React, { useEffect, useState } from "react";
import { 
    Table
} from 'react-bootstrap';
import { IExtrato, IExtratoForm } from '../../interfaces/Extrato';
import { apiService } from '../../App';

interface OperationsTableProps {
    tableSize?: number;
}

const OperationsTable = ({ tableSize=10 }: OperationsTableProps) => {

    const [operations, setOperations] = useState<IExtrato[]>([]);
    const filters: IExtratoForm = { page: 0, pageSize: tableSize }

    useEffect(() => {
      (async () => {
        const operationsData = await apiService.extrato(filters)
        setOperations(operationsData)
      })()
    }, [filters]);

    return (
        <>
            <Table striped bordered hover className='text-align-left'>
                <thead>
                <tr>
                    <th>Data</th>
                    <th>Beneficiário</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                </tr>
                </thead>
                <tbody>
                    {operations.map((operation: IExtrato) => (
                        <tr>
                            <td>{operation.dataHora}</td>
                            <td>{operation.nomeContaOrigemOuDestino}</td>
                            <td>B$ {operation.valor}</td>
                            <td>{operation.tipo}</td>
                        </tr>
                        )
                    )}
                </tbody>
            </Table>
        </>
    )
};

export default OperationsTable;
import React, { useEffect, useState } from "react";
import {
    Table,
    Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { IExtrato, IExtratoForm } from '../../interfaces/Extrato';
import { apiService } from '../../App';
import FormatDate from '../../services/FormatDate';
import EmptyTable from '../../components/EmptyTable';

interface OperationsTableProps {
    tableSize?: number;
    isClientDashboard?: boolean;
}

const OperationsTable = ({ tableSize = 10, isClientDashboard }: OperationsTableProps) => {

    const [operations, setOperations] = useState<IExtrato[]>([]);
    const [emptyTable, setEmptyTable] = useState(true);
    const filters: IExtratoForm = { page: 0, pageSize: tableSize }
    const formatDate = new FormatDate()

    const history = useHistory();
    const handleRedirect = (url: string) => {
        history.push(`/${url}`)
    }

    useEffect(() => {
        (async () => {
          const operationsData = await apiService.extrato(filters)
          setOperations(operationsData)

          if(operationsData.length > 0) {
            setEmptyTable(false)
          }
        })()
    }, [filters])

    const renderTable = (() => {
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
                                <td>{formatDate.format(operation.dataHora)}</td>
                                <td>{operation.nomeContaOrigemOuDestino}</td>
                                <td>B$ {operation.valor}</td>
                                <td>{operation.tipo}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </Table>
                { isClientDashboard ? <Button className='regular-outline-button' variant="outline-warning" onClick={() => handleRedirect('operations')}>Ver extrato completo</Button> : null }
            </>
        )
    })

    return (
        <>     
            { emptyTable ? <EmptyTable /> : renderTable()}
        </>
    )
};

export default OperationsTable;
import React, { useEffect, useState, useCallback } from "react";
import {
    Table,
    Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { IExtrato, IExtratoForm } from '../../interfaces/Extrato';
import { apiService } from '../../App';
import FormatDate from '../../services/FormatDate'

interface OperationsTableProps {
    tableSize?: number;
}

const OperationsTable = ({ tableSize = 10 }: OperationsTableProps) => {

    const [operations, setOperations] = useState<IExtrato[]>([]);
    const [emptyTable, setEmptyTable] = useState(true);
    const filters: IExtratoForm = { page: 0, pageSize: tableSize, tipoOperacao: '' }
    const formatDate = new FormatDate()

    const history = useHistory();
    const handleRedirect = (url: string) => {
        history.push(`/${url}`)
    }

    const getOperations = useCallback(async () => {
        const operationsData = await apiService.extrato(filters)
        setOperations(operationsData)
        if(operationsData.length > 0) {
            setEmptyTable(false)
        }
    }, [])

    useEffect(() => {
        getOperations()
    },[])

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
            { emptyTable ? <span className='empty-table-text'>AINDA NÃO HÁ LANÇAMENTOS NA SUA CONTA</span>: <Button className='regular-outline-button' variant="outline-warning" onClick={() => handleRedirect('operations')}>Ver extrato completo</Button>}
        </>
    )
};

export default OperationsTable;
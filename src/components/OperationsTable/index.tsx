import React, { useEffect, useState } from "react";
import { 
    Table
} from 'react-bootstrap';
import { IExtrato, IExtratoForm } from '../../interfaces/Extrato';
import { apiService } from '../../App';
import FormatDate from '../../services/FormatDate'

interface OperationsTableProps {
    tableSize?: number;
}

const OperationsTable = ({ tableSize=10 }: OperationsTableProps) => {

    const [operations, setOperations] = useState<IExtrato[]>([]);
    const [emptyTable, setEmptyTable] = useState(true);
    const filters: IExtratoForm = { page: 0, pageSize: tableSize }
    const formatDate = new FormatDate()

    useEffect(() => {
    (async () => {
        const operationsData = await apiService.extrato(filters)
        setOperations(operationsData)

        if(operationsData.length > 0) {
            setEmptyTable(false)
        }
    } )()
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
            { emptyTable ? <span className='empty-table-text'>AINDA NÃO HÁ LANÇAMENTOS NA SUA CONTA</span>: null}
        </>
    )
};

export default OperationsTable;
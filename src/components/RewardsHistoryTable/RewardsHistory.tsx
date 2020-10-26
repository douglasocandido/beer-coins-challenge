import React, { useEffect, useState } from "react";
import {
    Table,
    Spinner
} from 'react-bootstrap';
import { IExtrato, IExtratoForm } from '../../interfaces/Extrato';
import { apiService } from '../../App';
import FormatDate from '../../services/FormatDate';

interface ReceiptTableProps {
    tableSize?: number;
}

const RewardsHistoryTable = ({ tableSize = 10 }: ReceiptTableProps) => {

    const [operations, setOperations] = useState<IExtrato[]>([]);
    const [loading, setLoading] = useState(false);

    const formatDate = new FormatDate();

    useEffect(() => {
        setLoading(true);
        const filters: IExtratoForm = { page: 0, pageSize: tableSize, tipoOperacao: 'RESGATE' };
        apiService.extrato(filters).then((operationsData: IExtrato[]) => {
            setOperations(operationsData)
        }).finally(() => setLoading(false))
    }, [tableSize]);

    const renderTable = (() => {
        return (
            <>
                <Table striped bordered hover className='text-align-left'>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Produto</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operations.map((operation: IExtrato, index: number) => (
                            <tr key={index}>
                                <td>{formatDate.format(operation.dataHora)}</td>
                                <td>B$ {operation.nomeContaOrigemOuDestino}</td>
                                <td>B$ {operation.valor}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </Table>
            </>
        )   
    })

    return (
        <>
            { loading ? <Spinner className="spinner-tables" animation='border' variant="secondary" size="sm" /> : renderTable() }
        </>
    )
};

export default RewardsHistoryTable;
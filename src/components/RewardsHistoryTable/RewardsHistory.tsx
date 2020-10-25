import React, { useEffect, useState } from "react";
import {
    Table,
    Spinner
} from 'react-bootstrap';
import { IExtrato, IExtratoForm } from '../../interfaces/Extrato';
import { apiService } from '../../App';

interface ReceiptTableProps {
    tableSize?: number;
}

const RewardsHistoryTable = ({ tableSize = 10 }: ReceiptTableProps) => {

    const [operations, setOperations] = useState<IExtrato[]>([]);
    const [loading, setLoading] = useState(false);
    const filters: IExtratoForm = { page: 0, pageSize: tableSize, tipoOperacao: 'DEPOSITO' }

    useEffect(() => {
        setLoading(true);
        apiService.extrato(filters).then((operationsData: IExtrato[]) => {
            setOperations(operationsData)
        }).finally(() => setLoading(false))
    }, [])

    const renderTable = (() => {
        return (
            <>
                <Table striped bordered hover className='text-align-left'>
                    <thead>
                        <tr>
                            <th>Valor</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operations.map((receipt: IExtrato) => (
                            <tr>
                                <td>{receipt.dataHora}</td>
                                <td>B$ {receipt.valor}</td>
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
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
                            <th>Valor</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operations.map((receipt: IExtrato, index: number) => (
                            <tr key={index}>
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
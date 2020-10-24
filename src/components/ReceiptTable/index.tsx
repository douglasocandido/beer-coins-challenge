import React, { useEffect, useState } from "react";
import { 
    Table
} from 'react-bootstrap';
import { IExtrato, IExtratoForm } from '../../interfaces/Extrato';
import { apiService } from '../../App';

interface ReceiptTableProps {
    tableSize?: number;
}

const ReceiptTableTable = ({ tableSize=10 }: ReceiptTableProps) => {

    const [operations, setOperations] = useState<IExtrato[]>([]);
    const filters: IExtratoForm = { page: 0, pageSize: tableSize, tipoOperacao: 'DEPOSITO' }

    useEffect(() => {
    (async () => {
        const operationsData = await apiService.extrato(filters)
        setOperations(operationsData)
    } )()
    },[])

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
};

export default ReceiptTableTable;
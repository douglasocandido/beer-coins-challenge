import React, { useEffect, useState, useCallback } from "react";
import { 
    Table,
    Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { IExtrato, IExtratoForm } from '../../interfaces/Extrato';
import { apiService } from '../../App';
import FormatDate from '../../services/FormatDate';

interface ReceiptTableProps {
    tableSize?: number;
}

const ReceiptTableTable = ({ tableSize=10 }: ReceiptTableProps) => {

    const [operations, setOperations] = useState<IExtrato[]>([]);
    const [emptyTable, setEmptyTable] = useState(true);
    const filters: IExtratoForm = { page: 0, pageSize: tableSize, tipoOperacao: 'DEPOSITO' }
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
                    <th>Valor</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                    {operations.map((receipt: IExtrato) => (
                        <tr>
                            <td>{formatDate.format(receipt.dataHora)}</td>
                            <td>B$ {receipt.valor}</td>
                        </tr>
                        )
                    )}
                </tbody>
            </Table>
            { emptyTable ? <span className='empty-table-text'>AINDA NÃO HÁ LANÇAMENTOS NA SUA CONTA</span>: <Button className='regular-outline-button' variant="outline-warning" onClick={() => handleRedirect('receipt')}>Ver todos os lançamentos</Button>}
        </>
    )
};

export default ReceiptTableTable;
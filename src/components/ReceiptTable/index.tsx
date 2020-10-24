import React, { useEffect, useState } from "react";
import { 
    Table
} from 'react-bootstrap';
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
            { emptyTable ? <span className='empty-table-text'>AINDA NÃO HÁ LANÇAMENTOS NA SUA CONTA</span>: null}
        </>
    )
};

export default ReceiptTableTable;
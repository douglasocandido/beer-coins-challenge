import React, { useEffect, useState } from "react";
import {
    Table,
    Button,
    Spinner
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { IExtrato, IExtratoForm } from '../../interfaces/Extrato';
import { apiService } from '../../App';
import FormatDate from '../../services/FormatDate';
import EmptyTable from '../EmptyTable'

interface ReceiptTableProps {
    tableSize?: number;
    isClientDashboard?: boolean;
}

interface paginationProps {
    page: number,
    pageSize: number
}

const ReceiptTableTable = ({ tableSize = 10, isClientDashboard }: ReceiptTableProps) => {

    const paginationInitialState = {
        page: 0,
        pageSize: 10,
        tipoOperacao: 'DEPOSITO'
    }

    const [operations, setOperations] = useState<IExtrato[]>([]);
    const [emptyTable, setEmptyTable] = useState(true);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState<paginationProps>(paginationInitialState)
    
    const formatDate = new FormatDate()

    const history = useHistory();
    const handleRedirect = (url: string) => {
        history.push(`/${url}`)
    }

    useEffect(() => {
        setLoading(true);
        const filters: IExtratoForm = { page: 0, pageSize: tableSize, tipoOperacao: 'DEPOSITO' };
        apiService.extrato(filters).then((operationsData: IExtrato[]) => {
            setOperations(operationsData)
            if (operationsData.length > 0) {
                setEmptyTable(false)
            }
        }).finally(() => setLoading(false))
    }, [tableSize]);

    const handleProductPagination = () => {
        let tempPagination = {
            ...pagination,
            pageSize: (pagination.pageSize + 10)
        }
        apiService.extrato((tempPagination)).then((operationsData: IExtrato[]) => {
            setOperations(operationsData)
        }).finally(() => setLoading(false))
        setPagination(tempPagination)
    }

    const renderTable = (() => {
        return (
            <>
                <Table striped bordered hover className='text-align-left'>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operations.map((receipt: IExtrato, index) => (
                            <tr key={index}>
                                <td>{formatDate.format(receipt.dataHora)}</td>
                                <td>B$ {receipt.valor}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </Table>
                { isClientDashboard ? <Button className='regular-outline-button' variant="outline-warning" onClick={() => handleRedirect('receipt')}>Ver todos os lançamentos</Button> : <Button className='regular-outline-button show-more-button' variant="outline-warning" onClick={handleProductPagination}>Ver mais</Button> }
            </>
        )
    })

    return (
        <>
            { loading ? <Spinner className="spinner-tables" animation='border' variant="secondary" size="sm" /> : emptyTable ? <EmptyTable /> : renderTable()}
        </>
    )
};

export default ReceiptTableTable;
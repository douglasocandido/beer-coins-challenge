import React from "react";
import { 
    Table
} from 'react-bootstrap';
import IOperationData from '../interfaces/IOperationData'

interface OperationsTableProps {
    tableTitle: string;
    operationData: IOperationData[];
}

const OperationsTable = ({ tableTitle, operationData }: OperationsTableProps) => {

    return (
        <>
            <h2>{tableTitle}</h2>
            <Table striped bordered hover style={{ textAlign: 'left' }}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Beneficiário</th>
                    <th>Valor</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                    {operationData.map((operation: IOperationData) => (
                        <tr>
                            <td>{operation.id}</td>
                            <td>{operation.beneficiary}</td>
                            <td>B$ {operation.value}</td>
                            <td>{operation.operationDate.toDateString()}</td>
                        </tr>
                        )
                    )}
                </tbody>
            </Table>
        </>
    )
};

export default OperationsTable;
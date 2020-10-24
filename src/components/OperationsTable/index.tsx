import React from "react";
import { 
    Table
} from 'react-bootstrap';
import { IExtrato } from '../../interfaces/Extrato';

interface OperationsTableProps {
    operationData: IExtrato[];
}

const OperationsTable = ({ operationData }: OperationsTableProps) => {

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
                    {operationData.map((operation: IExtrato) => (
                        <tr>
                            <td>{operation.dataHora}</td>
                            <td>{operation.nomeContaOrigemOuDestino}</td>
                            <td>B$ {operation.valor}</td>
                            <td>{operation.tipo}</td>
                        </tr>
                        )
                    )}
                </tbody>
            </Table>
        </>
    )
};

export default OperationsTable;
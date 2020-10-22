import React from "react";
import { 
    Table
} from 'react-bootstrap';
import IReceiptData from '../interfaces/IReceiptData'

interface ReceiptTableProps {
    tableTitle: string;
    receiptData: IReceiptData[];
}

const ReceiptTableTable = ({ tableTitle, receiptData }: ReceiptTableProps) => {

    return (
        <>
            <h2>{tableTitle}</h2>
            <Table striped bordered hover style={{ textAlign: 'left' }}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Valor</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                    {receiptData.map((receipt: IReceiptData) => (
                        <tr>
                            <td>{receipt.id}</td>
                            <td>B$ {receipt.value}</td>
                            <td>{receipt.operationDate.toDateString()}</td>
                        </tr>
                        )
                    )}
                </tbody>
            </Table>
        </>
    )
};

export default ReceiptTableTable;
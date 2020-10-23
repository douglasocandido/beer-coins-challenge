import React from "react";
import { 
    Table
} from 'react-bootstrap';
import IReceiptData from '../interfaces/IReceiptData'

interface ReceiptTableProps {
    receiptData: IReceiptData[];
}

const ReceiptTableTable = ({ receiptData }: ReceiptTableProps) => {

    return (
        <>
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
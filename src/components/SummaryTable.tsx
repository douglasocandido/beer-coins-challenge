import React from "react";
import { 
    Table
} from 'react-bootstrap';

interface SummaryTableProps {
    tableTitle: string;
}

const SummaryTable = ({ tableTitle }: SummaryTableProps) => {
    return (
        <>
            <h2>{tableTitle}</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                </tbody>
            </Table>
        </>
    )
};

export default SummaryTable;
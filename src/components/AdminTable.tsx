import React from "react";
import { 
    Table
} from 'react-bootstrap';
import { IConta } from '../interfaces/Conta'
import Popover from './Popover'

interface AdminTableProps {
    tableTitle: string;
    adminData: IConta[];
}

const AdminTable = ({ tableTitle, adminData }: AdminTableProps) => {

    return (
        <>
            <h2>{tableTitle}</h2>
            <Table responsive = "sm" className='text-align-center'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>CNPJ</th>
                    <th>Saldo</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                    {adminData.map((conta: IConta, index: number) => (
                        <tr key={conta.hash}>
                            <td>{index+1}</td>
                            <td>{conta.nome}</td>
                            <td>{conta.email}</td>
                            <td>{conta.cnpj}</td>
                            <td>{conta.saldo}</td>
                            <td><a href='#depósito' >
                            </a>
                            < Popover />
                           </td>
                        </tr>
                        )
                    )}
                </tbody>
            </Table>
        </>
    )
};

export default AdminTable;
import React from "react";
import { 
    Table
} from 'react-bootstrap';
import IAdminData from '../interfaces/IAdminData'
import Popover from './Popover'

interface AdminTableProps {
    tableTitle: string;
    adminData: IAdminData[];
}



const AdminTable = ({ tableTitle, adminData }: AdminTableProps) => {

    return (
        <>
            <h2>{tableTitle}</h2>
            <Table responsive = "sm" style={{ textAlign: 'center' }}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>E-mail</th>
                    <th>CNPJ</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                    {adminData.map((admin: IAdminData, index: number) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>{admin.name}</td>
                            <td>{admin.lastname}</td>
                            <td>{admin.email}</td>
                            <td>{admin.cnpj}</td>
                            <td><a href={`#${admin.action}`} >
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
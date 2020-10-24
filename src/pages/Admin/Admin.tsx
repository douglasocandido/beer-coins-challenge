import React  from "react";
import NavbarComponent from '../../components/NavbarComponent'
import AdminTable from '../../components/AdminTable'
import IAdminData from '../../interfaces/IAdminData'
import "./styles.css"

const admins: IAdminData[] = [
  {
    name: "Jose",
    lastname: "Carvalho",
    email: "jcarvalho@hotmail.com",
    cnpj: 10209288000189, 
    action: "depósito"
  },
  {
    name: "Joao",
    lastname: "Madeira",
    email: "joao.m@gmail.com",
    cnpj: 10207283000199, 
    action: "depósito"
  },
  {
    name: "Paulo",
    lastname: "Borges",
    email: "pborges@gmail.com",
    cnpj: 10509788000159, 
    action: "depósito"  
  },
  {
    name: "Jose",
    lastname: "Carvalho",
    email: "jcarvalho@hotmail.com",
    cnpj: 10209288000189, 
    action: "depósito"
  },
  {
    name: "Joao",
    lastname: "Madeira",
    email: "joao.m@gmail.com",
    cnpj: 10207283000199, 
    action: "depósito"
  },
  {
    name: "Paulo",
    lastname: "Borges",
    email: "pborges@gmail.com",
    cnpj: 10509788000159, 
    action: "depósito"  
  },
  {
    name: "Jose",
    lastname: "Carvalho",
    email: "jcarvalho@hotmail.com",
    cnpj: 10209288000189, 
    action: "depósito"
  },
  {
    name: "Joao",
    lastname: "Madeira",
    email: "joao.m@gmail.com",
    cnpj: 10207283000199, 
    action: "depósito"
  },
  {
    name: "Paulo",
    lastname: "Borges",
    email: "pborges@gmail.com",
    cnpj: 10509788000159, 
    action: "depósito"  
  }
];


export default function Admin() {
  return (
    <>
    
      <NavbarComponent name="Douglas"/>
      <div>
          <h1 className="title-admin">
            BeerCoins Administrador
          </h1>
      </div>
      <div className="justify-content-center" style={{ textAlign: 'left', padding: '10px 250px 10px 45px' }}>
        <AdminTable tableTitle='Contas' adminData={admins}/>
      </div>
    </>
  )
}




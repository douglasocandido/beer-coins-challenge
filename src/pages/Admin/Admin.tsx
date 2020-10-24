import React, { useState }  from "react";

import NavbarComponent from '../../components/NavbarComponent'
import { Button } from "react-bootstrap"
import AdminTable from '../../components/AdminTable'
import IAdminData from '../../interfaces/IAdminData'
import "./style.scss"

import Register from "../Register"

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
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCloseModal = () => setModalVisible(false);
  const handleOpenModal = () => setModalVisible(true);

  return (
    <>
      <NavbarComponent />
      <h1 className="title-admin">
        BeerCoins Administrador
      </h1>
      <section className="justify-content-center contas-wrapper">
        <Button onClick={handleOpenModal} className="regular-button criar-conta-btn" type="button" variant="warning">Criar Conta</Button>
        <AdminTable tableTitle='Contas' adminData={admins} />
      </section>
      <Register handleClose={handleCloseModal} show={isModalVisible} />
    </>
  )
}




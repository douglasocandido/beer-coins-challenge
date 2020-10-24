import React, { useState }  from "react";
import { Button } from "react-bootstrap"

import NavbarComponent from '../../components/NavbarComponent'
import AdminTable from '../../components/AdminTable'
import "./style.scss"
import Register from "../Register";

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
      <section className="contas-wrapper">
        <Button onClick={handleOpenModal} className="regular-button criar-conta-btn" type="button" variant="warning">Criar Conta</Button>
        <AdminTable tableTitle='Contas' />
      </section>
      <Register handleClose={handleCloseModal} show={isModalVisible} />
    </>
  )
}




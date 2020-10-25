import React, { useState } from "react";
import { Button } from "react-bootstrap"

import { AdminTable, NavbarComponent, Presentation } from '../../components'
import Register from "../Register";

import imageContent from "../../assets/images/admin.svg"
import "./style.scss"

export default function Admin() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCloseModal = () => setModalVisible(false);
  const handleOpenModal = () => setModalVisible(true);

  return (
    <>
      <NavbarComponent />
      <Presentation title={'BeerCoins | Administrador'} image={imageContent} />

      <section className="contas-wrapper">
        <Button onClick={handleOpenModal} className="regular-button criar-conta-btn" type="button" variant="warning">Criar Conta</Button>
        <AdminTable tableTitle='Contas' />
      </section>
      <Register handleClose={handleCloseModal} show={isModalVisible} />
    </>
  )
}





import React from 'react';
import NavbarComponent from '../components/NavbarComponent'
import Presentation from '../components/Presentation'

export default function Client() {
  return (
    <>
      <NavbarComponent name="Douglas" />
      <Presentation name="Douglas" lastName="Candido" balance={9999.77}></Presentation>
    </>
  )
}
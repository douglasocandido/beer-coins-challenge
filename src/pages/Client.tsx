import React from 'react';
import Presentation from '../components/Presentation'
import NavbarComponent from '../components/NavbarComponent'

export default function Client() {
  return (
    <>
      <NavbarComponent name="Douglas"></NavbarComponent>
      <Presentation name="Douglas" lastName="Candido" balance={9999.77}></Presentation>
    </>
  )
}
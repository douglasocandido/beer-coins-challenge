import React, { useState, } from 'react';
import { Button, } from "react-bootstrap";
import ModalDeposito from "./ModalDeposito"
import './style.scss';

interface BeerPopoverProps {
  hash: string,
  nome: string,
  onCompleted: () => void
}

function BeerPopover({ nome, hash: hashDaConta, onCompleted }: BeerPopoverProps) {
  const [show, setShow] = useState(false);
  const openPopover = () => { setShow(true); };
  const closePopover = () => { setShow(false); };
  return (
    <>
      <Button onClick={openPopover} variant="link">Depósito</Button>
      <ModalDeposito hashDaConta={hashDaConta} nomeDestinatario={nome} show={show} handleClose={closePopover} onCompleted={onCompleted} />
    </>
  );
}


export default BeerPopover;
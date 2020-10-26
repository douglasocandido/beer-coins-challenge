import React from 'react';
import { Button, Form, Modal } from "react-bootstrap"
import { ModalFooter } from "../../../components/"
import { toast } from 'react-toastify';

import { TokenService } from '../../../services/TokenService';
import AxiosHandler from '../../../services/AxiosHandler';
import APIService from '../../../services/APIService';

import "./style.scss";


const tokenService = new TokenService(window.localStorage);
const apiUrl = process.env.REACT_APP_API_URL || 'https://beertech-banco-produto.herokuapp.com/beercoins';
const axiosHandler = new AxiosHandler(apiUrl, tokenService)
const apiServiceProducts = new APIService(axiosHandler)


interface RegisterProps {
  handleShow: () => void,
  handleClose: () => void,
  show: boolean,
  productPrice: number,
  productTitle: string,
  productId: number
}



export default function ConfirmExchange({ handleShow, handleClose, show, productPrice, productId, productTitle }: RegisterProps) {
  const handleReward = (productId: number, productPrice: number) => {
    apiServiceProducts.rewardProduct(productId).then((response: any) => {
      toast.success('Troca realizada com sucesso!')
      handleCancel()
      setTimeout(function(){ window.location.reload() }, 1000);
    }).catch((error: any) => {
      console.error('transferencia', error)
      toast.error('Algo está errado, desculpe!');
    })
  }

  const handleCancel = () => {
    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação de troca</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            {`Você confirma a troca de ${productPrice} pontos por uma ${productTitle}?`}
          </Modal.Body>
          <div className="exchange-modal-footer">
            <Button className="outline-button-cancel" variant="link" onClick={handleCancel}>Cancelar</Button>
            <Button className="regular-button" variant="warning" onClick={() => handleReward(productId, productPrice)}>Confirmar</Button>
          </div>
          <ModalFooter />
        </Form>
      </Modal>
    </>
  );
}
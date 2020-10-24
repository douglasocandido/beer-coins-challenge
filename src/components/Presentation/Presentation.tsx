import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Button,
  Row,
  Col,
  Spinner
} from 'react-bootstrap';
import './style.scss'
import ModalTransfer from '../ModalTransfer/ModalTransfer'
import HistoryRewards from '../../pages/Rewards/components/HistoryRewards'
import { apiService } from "../../App";

interface PresentationProps {
  title: string;
  backToHome?: boolean;
  isRewardsScreen?: boolean,
  image: string;
}

const Presentation = ({ title, backToHome, isRewardsScreen, image }: PresentationProps) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const handleCloseModal = () => setModalVisible(false);
  const handleOpenModal = () => setModalVisible(true);

  const [saldo, setSaldo] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    apiService.getSaldo().then(({saldo}) => {
      setSaldo(saldo);
    }).finally(() => setLoading(false))
  }, [])

  return (
    <Jumbotron className='presentation-container'>
    <Row>
      <Col>
          <h1 className='presentation-title'>{title}</h1>
          <Row>
            <Col className='align-left'>
              <p className='presentation-subtitle'>Saldo em conta:</p>
              { loading ? <Spinner animation='border' /> :
                <p className='presentation-subtitle'>B$ {saldo}</p>
              }
            </Col>
            {
              !isRewardsScreen ?
                <Col className='align-center'>
                  <p><Button className='regular-button' variant="warning" onClick={handleOpenModal}>Transferir</Button></p>
                  {backToHome && <p><Button className='regular-outline-button' variant="outline-warning" href="/">Voltar</Button></p>}
                </Col>
                :
                <Col className='align-center'>
                  <p><Button className='regular-button' variant="warning" onClick={handleOpenModal}>Ver histórico</Button></p>
                  <p><Button className='regular-outline-button' variant="outline-warning" href="/">Voltar</Button></p>
                </Col>
            }
          </Row>
      </Col>
    </Row>
    {
      isRewardsScreen ?
        <HistoryRewards handleClose={handleCloseModal} handleShow={handleOpenModal} show={isModalVisible} />
        :
        <ModalTransfer handleClose={handleCloseModal} handleShow={handleOpenModal} show={isModalVisible} />
    }
    </Jumbotron>
  );
};

export default Presentation;

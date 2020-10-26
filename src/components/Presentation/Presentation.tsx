import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Button,
  Row,
  Col,
  Spinner,
  Image
} from 'react-bootstrap';
import './style.scss'
import ModalTransfer from '../ModalTransfer/'
import HistoryRewards from '../../pages/Rewards/components/HistoryRewards'
import { apiService } from "../../App";
import { useAppState, useAppDispatch } from '../../AppContext';

interface PresentationProps {
  title: string;
  backToHome?: boolean;
  isRewardsScreen?: boolean,
  image: string;
}

const Presentation = ({ title, backToHome, isRewardsScreen, image }: PresentationProps) => {
  const { user } = useAppState()
  const {Saldo: saldo} = user
  const { Perfil: userPerfil } = user
  const isAdmin = userPerfil === 'ROLE_ADMIN'
  const [isModalVisible, setModalVisible] = useState(false);
  const handleCloseModal = () => setModalVisible(false);
  const handleOpenModal = () => setModalVisible(true);

  const [loading, setLoading] = useState(false)
  const [dispatch] = useAppDispatch()
  useEffect(() => {
    setLoading(true);
    apiService.getSaldo().then(({ saldo }) => {
      dispatch({
        type: 'SET_SALDO',
        saldo
      })
    }).finally(() => setLoading(false))
  }, [dispatch])

  return (
    <Jumbotron className='presentation-container'>
      <Row>
        <Col>
          <h1 className='presentation-title'>{title}</h1>
          <Row>
            <Col className='align-left'>
              {!isAdmin && <p className='presentation-subtitle'>Saldo em conta: {loading ? <Spinner className="spinner-saldo" animation='border' variant="secondary" size="sm" /> : ` B$ ${saldo}`}</p>}              <p className="presentation-hash">{`seu hash: ${user.Hash}`} </p>
            </Col>
            {
              !isRewardsScreen ?
                <Col className='align-center'>
                  {!isAdmin && <p><Button className='regular-button' variant="warning" onClick={handleOpenModal}>Transferir</Button></p>}
                  {backToHome && <p><Button className='regular-outline-button voltar-transf' variant="outline-warning" href="/">Voltar</Button></p>}
                </Col>
                :
                <Col className='align-center'>
                  <p><Button className='regular-button' variant="warning" onClick={handleOpenModal}>Ver histórico</Button></p>
                  <p><Button className='regular-outline-button voltar' variant="outline-warning" href="/">Voltar</Button></p>
                </Col>
            }
          </Row>
        </Col>
        <Col className='align-center'>
          <Image className='presentation-image' src={image} />
        </Col>
      </Row>
      {
        isRewardsScreen ?
          <HistoryRewards handleClose={handleCloseModal} handleShow={handleOpenModal} show={isModalVisible} />
          :
          <ModalTransfer handleClose={handleCloseModal} show={isModalVisible} />
      }
    </Jumbotron>
  );
};

export default Presentation;



import React, { useState, useEffect }  from "react";
import { toast } from 'react-toastify';
import { Button, Spinner } from "react-bootstrap"

import { IConta } from '../../interfaces/Conta'
import NavbarComponent from '../../components/NavbarComponent'
import AdminTable from '../../components/AdminTable'
import "./style.scss"
import Register from "../Register"
import { apiService } from '../../App';

export default function Admin() {
  const [isLoading, setLoading] = useState(true);
  const [adminData, setAdminData] = useState<IConta[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCloseModal = () => setModalVisible(false);
  const handleOpenModal = () => setModalVisible(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await apiService.listaContas();
        setAdminData(data);
      } catch (error) {
        console.error(error);
        toast.error('Ooops algo de errado não está certo. Tente novamente mais tarde');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <NavbarComponent />
      <h1 className="title-admin">
        BeerCoins Administrador
      </h1>
      <section className="contas-wrapper">
        <Button onClick={handleOpenModal} className="regular-button criar-conta-btn" type="button" variant="warning">Criar Conta</Button>
        {
          isLoading ?
            <div className="spinner-container">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div> :
            <AdminTable tableTitle='Contas' adminData={adminData} />
        }
      </section>
      <Register handleClose={handleCloseModal} show={isModalVisible} />
    </>
  )
}




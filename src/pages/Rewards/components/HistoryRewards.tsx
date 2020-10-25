import React from 'react';
import { Button, Form, Modal } from "react-bootstrap"
import { ModalFooter, RewardsHistoryTable } from "../../../components/"
import "./style.scss";


interface RegisterProps {
    handleShow: () => void,
    handleClose: () => void,
    show: boolean,
}

export default function HistoryRewards({ handleShow, handleClose, show }: RegisterProps) {

    const handleCancel = () => {
        handleClose()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Histórico de trocas</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <RewardsHistoryTable />
                    </Modal.Body>
                    <div className="history-modal-footer">
                        <Button className="outline-button-cancel" variant="link" onClick={handleCancel}>Fechar</Button>
                    </div>
                    <ModalFooter />
                </Form>
            </Modal>
        </>
    );
}
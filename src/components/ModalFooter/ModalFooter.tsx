import React from "react";
import { Navbar } from 'react-bootstrap';
import logo from "../../assets/images/logo.svg"
import BeerTechLogo from "../../assets/images/beer-tech-logo.png";
import './style.scss';


const ModalFooter = () => {
    return (
        <Navbar className='footer-container'>
            <Navbar.Brand href="#home" className='footer-title'>
                <div>
                    <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{' '}
                    <span className='footer-title-margin'>eer Coins</span>
                    <p className='footer-description'>AB Inbev Virtual Wallet</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <img alt="beer-tech-logo" src={BeerTechLogo} width="50" height="50" className="d-inline-block align-top footer-beer-tech-logo"
                />
            </Navbar.Collapse>
        </Navbar>
    )
};

export default ModalFooter; 
import React from "react";
import {
    Navbar,
} from 'react-bootstrap';
import logo from "../assets/images/logo.svg";
import BeerTechLogo from "../assets/images/beer-tech-logo.png";


const ModalFooter = () => {
    return (
        <Navbar style={{ backgroundColor: '#373A3C', width: '100%' }}>
            <Navbar.Brand href="#home" style={{ color: '#fff', fontWeight: 'bold' }}>
                <div>
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <span style={{ marginLeft: '-9px' }}>eer Coins</span>
                    <p style={{ marginBottom: '0', fontSize: '10px', color: '#dedede', marginLeft: '5px' }}>AB Inbev Virtual Wallet</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <img
                    alt="beer-tech-logo"
                    src={BeerTechLogo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    style={{ marginRight: '15px' }}
                />
            </Navbar.Collapse>
        </Navbar>
    )
};

export default ModalFooter; 
import React, { CSSProperties } from "react";
import { 
    Navbar,
    ButtonGroup,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';
import logo from "../assets/images/logo.svg";
import BeerTechLogo from "../assets/images/beer-tech-logo.png";

interface NavbarComponentProps {
    name: string
}

const NavbarComponent = ({ name }: NavbarComponentProps) => {
    return (
        <Navbar style={{ backgroundColor: '#373A3C' }}>
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
                    alt=""
                    src={BeerTechLogo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    style={{ marginRight: '15px' }}
                />
                <Navbar.Text style={{ marginRight: '15px' }}>
                <ButtonGroup vertical>
                    <DropdownButton as={ButtonGroup} title={name} id="bg-vertical-dropdown-3">
                        <Dropdown.Item eventKey="1">Logout</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavbarComponent; 
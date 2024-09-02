import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import NucampLogo from "../app/assets/img/logo.png";

const Header = () => {
    return (
        <Navbar dark color="primary" sticky="top" expand="md">
            <NavbarBrand href="/">
                <img src={NucampLogo} alt="nucamp logo"></img>
            </NavbarBrand>
            <Nav className="ms-auto" navbar>
                <NavItem>
                    <NavLink className="nave-link" to="/directory">
                    
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nave-link" to="/">
                    
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nave-link" to="/">
                    
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nave-link" to="/">
                    
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;
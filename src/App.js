import React from 'react';
import CampsitesList from './features/campsites/CampsitesList';
import  { Container, Navbar, NavbarBrand }  from "reactstrap";
import NucampLogo from "./app/assets/img/logo.png";
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Navbar dark color="primary" sticky="top" expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <img src={NucampLogo} alt="nucamp logo"></img>
                    </NavbarBrand>
                </Container>
            </Navbar>
            <CampsitesList />
        </div>
    );
}

export default App;
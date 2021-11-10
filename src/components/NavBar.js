import "./nav.css";
import React from 'react';
import {Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

function NavBar(props) {
    return (

        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><p className="logo">PortFolio</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav navbarScroll>
                        <Nav.Link className="nav-links" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav-links" href="#about">About Me</Nav.Link>
                        <Nav.Link className="nav-links" href="#skills">Skills</Nav.Link>
                        <Nav.Link className="nav-links" href="#projects">Projects</Nav.Link>
                        <Nav.Link className="nav-links" href="#experiences">Experiences</Nav.Link>
                        <Nav.Link className="nav-links" href="#academic">Academic</Nav.Link>
                        <Nav.Link className="nav-links" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
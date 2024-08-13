import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import dataLogo from '../assets/images/logo.png'


export const NavBarComp = () => {
    const [navbarClass, setNavbarClass] = useState('navBarBgone');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Ajusta el valor según tus necesidades
                setNavbarClass('navBarBgtwo');
            } else {
                setNavbarClass('navBarBgone');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpiar el evento cuando el componente se desmonte
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <Navbar collapseOnSelect expand="lg" className={navbarClass} fixed="top">
            <Container>
            <Navbar.Brand href="#home">
                <img
                    src={dataLogo}
                    width="150"
                    height="auto"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <NavDropdown title="Servicios" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Nosotros" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Button variant="outline-light">Contacto</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
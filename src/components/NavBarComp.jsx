import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import dataLogo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'


export const NavBarComp = () => {
    const [navbarClass, setNavbarClass] = useState('navBarBgone');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Con esto ajusto los eventos, aqui sucede la magia xd
                setNavbarClass('navBarBgtwo');
            } else {
                setNavbarClass('navBarBgone');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // con esto logè limpiar el evnto 
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <Navbar collapseOnSelect expand="lg" className={navbarClass} fixed="top">
            <Container>
                <Navbar.Brand>
                    <Link  to="/">
                    <img
                        src={dataLogo}
                        width="150"
                        height="auto"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <NavDropdown title="Servicios" id="collapsible-nav-dropdown">
                        <Link className="Item-Dropdown-link" to={"/Conmmutadores"}><div className="link-item">Conmutadores</div></Link>
                        </NavDropdown>
                        <Link  className="LinkNav" to="/nosotros">Nosotros</Link>
                        <Link  to="/Contacto"><Button variant="outline-light">Contacto</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
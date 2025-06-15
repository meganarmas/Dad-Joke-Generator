import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar expand="lg" className="p-2" style={{ width: "100%", backgroundColor: "beige" }}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase">
                   Joke Generator
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="nav-item-custom"> Dad Joke </Nav.Link>
                        <Nav.Link as={Link} to="/silly-joke" className="nav-item-custom"> Silly Joke </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
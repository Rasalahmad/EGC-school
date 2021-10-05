import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const style = {
        color: "blue",
        marginRight: "30px",
        color: "white",
        textDecoration: 'none',
        padding: '10px 15px',
        borderRadius: '15px'
    }
    const activeStyle = {
        backgroundColor: 'gray',
        fontWeight: 'bold'
    }
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container >
                    <Navbar.Brand href="/home" className = 'fw-bold fs-3 text-white'>EGC-School</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink
                            to="/home"
                            style={style}
                            activeStyle = {activeStyle}
                            >
                            Home
                        </NavLink>
                        <NavLink
                            to="/services"
                            style={style}
                            activeStyle = {activeStyle}
                            >
                            Services
                        </NavLink>
                        <NavLink
                            to="/blogs"
                            style={style}
                            activeStyle = {activeStyle}
                            >
                            Blogs
                        </NavLink>
                        <NavLink
                            to="/about"
                            style={style}
                            activeStyle = {activeStyle}
                            >
                            About Us
                        </NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;
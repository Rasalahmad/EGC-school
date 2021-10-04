import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className = 'bg-dark py-5 text-white'>
            <Container>
                <Row>
                    <Col md={4}>
                        <h1>EGC-School</h1>
                        <p>Great lesson ideas and lesson plans for EGC teachers! Educators can customize lesson plans to best.</p>
                        <i className="fab fa-facebook me-3 fs-1 text-light"></i>
                        <i className="fab fa-linkedin me-3 fs-1 text-light"></i>
                        <i className="fab fa-twitter me-3 fs-1 text-light"></i>
                    </Col>


                    <Col md={2}>
                        <h3>Company</h3>
                        <p>About</p>
                        <p>Services</p>
                        <p>Event</p>
                        <p>Instructor</p>
                        <p>Become a Teacher</p>
                        <p>Contact</p>
                    </Col>
                    <Col md={2}>
                    <h3>Platform</h3>
                        <p>Browse Library</p>
                        <p>Library</p>
                        <p>Partner</p>
                        <p>News and Blogs</p>
                        <p>Tutorials</p>
                        <p>Contact</p>
                    </Col>
                    <Col md={4} className = 'text-center'>
                        <h3>Subscribe</h3>
                        <InputGroup className="w-75 mx-auto my-3">
                            <FormControl
                            placeholder="Your e-mail address"
                            aria-label="email address"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-light" id="button-addon2">
                            Go
                            </Button>
                        </InputGroup>
                        <small>Get the latest news and updates <br/> right at your inbox.</small> 
                        <p>Location</p>
                        <p><small>Bandarban Saadar, Bandarba VIP road</small></p>
                    </Col>
                </Row>
                </Container>
        </div>
    );
};

export default Footer;
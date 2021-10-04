import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './About.css'
const About = () => {
    const [about, setAbout] = useState([]);
    useEffect( () => {
        fetch('./aboutDb.JSON')
        .then(res => res.json())
        .then(data => setAbout(data));
    }, [])
    return (
        <div className = 'bg-dark'>
            <div className = 'about-container'>
                <div className = 'container'>
                    <h2 className = 'text-white text-center py-5'>About Us</h2>
                    <p className = 'text-white text-center'>Education and language are the major elements of Intangible Cultural Heritage (ICH). They carry immense reserves of cultural, historical, economic and ecological information, determine the identity of communities and reflect various aspects of community life such as emotions, beliefs, thoughts, values and so on</p>
                    <h4 className = 'text-white text-center'>ESTD: 2015</h4>
                </div>
            </div>
            <Container className = 'py-5'>
                {
                    about.map((ab, key) => <Row className = 'about-details'
                    key = {key}
                    >
                        <Col md={3}>
                        <img className='about-img' src={ab.img} />
                        </Col>
                        <Col md={9}>
                        <h2>{ab.title}</h2>
                        <p>{ab.description}</p>
                        <NavLink to = '/learn'>Learn More</NavLink>
                        </Col>
                    </Row>)
                }
            </Container>
        </div>
    );
};

export default About;
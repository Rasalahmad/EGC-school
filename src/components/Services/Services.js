import React from 'react';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./servicesDb.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
            <div>
                <div className = 'service-thamb'>
                    <div className = 'service-title'>
                        <h1>Services</h1>
                        <p>Enroll our world class services and enrich your knowledge</p>
                    </div>
                </div>
                <div className = 'service-card'>
                {
                    services.map((service, key) => <div
                    key = {service.key}
                    >
                        <Card style={{ width: '20rem' }} className = 'single-card'>
                            <Card.Img variant="top" className = 'card-img' src={service.thambnail} />
                            <Card.Body>
                                <Card.Title>{service?.title}</Card.Title>
                                <Card.Text>
                                {service.body.slice(0, 200)}
                                </Card.Text>
                                <NavLink to = {`/services/${service.key}`}
                                >Learn More</NavLink>
                            </Card.Body>
                         </Card>
                    </div>)
                }
            </div>
            </div>
    );
};

export default Services;
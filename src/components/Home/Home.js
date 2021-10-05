import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Home.css';
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('servicesDB.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className = 'home-container text-center'>
                <div className="container main-div py-5">
                <h1 className = 'title'>Ethnic Group <br/> Cultural School (EGC-School)</h1>
                <p className = 'text-white'>An ethnic group is a group of people who identify with each other through a common heritage, which generally consists of a common culture and shared language or dialect. The group’s ethos or ideology may also stress common ancestry, religion, or race.</p>
                </div>
                <Button variant='outline-light' className = 'w-25 p-2'>Learn More</Button>
            </div>
            <div>
                <h2 className = 'text-center my-5 fw-bold'>Our Services</h2>
                <div className = 'service-card'>
                {
                    services.slice(0, 4).map((service, key) => <div 
                    key = {service.key}
                    >
                        <Card className = 'single-card'>
                            <Card.Img variant="top" className = 'card-img' src={service.thambnail} />
                            <Card.Body>
                                <Card.Title>{service?.title}</Card.Title>
                                <Card.Text>
                                {service.body.slice(0, 200)}
                                </Card.Text>
                                <Button variant="outline-dark" className = 'w-100 border-0'>Learn More</Button>
                            </Card.Body>
                         </Card>
                    </div>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;
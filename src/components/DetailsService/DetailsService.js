import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './DetailsService.css'
const DetailsService = () => {
    const {id} = useParams()
    const [details, setDetails] = useState([])
    const [singleService, setSingleService] = useState([]);
    useEffect( () => {
        fetch('/servicesDB.JSON')
        .then(res => res.json())
        .then(data => setDetails(data));
    }, []);

    useEffect(() => {
        // finding match service 
        const foundService = details.find(service => service.key === id)
        setSingleService(foundService)
    } , [details])
    return (
        <div className = 'details-container'>
            <Container className = 'single-service'>
                <img src={singleService?.thambnail} alt="" />
                <h2>{singleService?.title}</h2>
                <p>{singleService?.body}</p>
                <p>Mainly Focused On: {singleService?.types}</p>
                <p>Instructor: {singleService?.instructor?.name}</p>
                <p>Designation: {singleService?.instructor?.designation}</p>
                <p>Total Class: {singleService?.lesson}</p>
                <p>Course Fee: {singleService?.coursefee}</p>
                <p>Course Duration: {singleService?.duration}</p>
                <Button>Enroll Now</Button>
            </Container>
        </div>
    );
};

export default DetailsService;
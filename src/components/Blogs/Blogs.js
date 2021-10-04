import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Col, Container, Row , Button} from 'react-bootstrap';
import './Blogs.css'
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('blogsDb.JSON')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);
    return (
        <div>
            <div className = 'blogs-head'>
                <h1>Blogs</h1>
                <p>This is our blogs section and here your can learn more about us</p>
            </div>
            <div>
                <Container className = 'my-5'>
                    <Row>
                        <Col md={9}>
                            {/* loading data from json file */}
                            {
                                blogs.map((blog, key) => <Card
                                key = {blog.key}>
                                <Card.Img variant="top" src={blog.thamnail} />
                                <Card.Body>
                                  <Card.Title>{blog.title}</Card.Title>
                                  <Card.Text>
                                    {blog.description}
                                  </Card.Text>
                                  <Button variant="success">Learn More</Button>
                                </Card.Body>
                              </Card>)
                            }
                        </Col>
                        <Col md={3}>
                        {
                                blogs.map((blog, key) => <Row className = 'blog-sm-section'
                                key = {blog.key}
                                >
                                    <Col md={4}>
                                        <img className = 'blog-img mt-3 p-2' src = {blog.thamnail} alt = "img"/>
                                    </Col>
                                    <Col md={8} className = 'p-4'>
                                        <p>{blog.title}</p>
                                    </Col>
                                </Row>)
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Blogs;
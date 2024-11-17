import React from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import nuevosprod2 from '../assets/nuevosprod2.jpg';
import nuevosprod4 from '../assets/nuevosprod4.jpg';
import nuevosprod9 from '../assets/nuevosprod9.jpg';


const Home = () => {
    const featuredProducts = [
        { id: 1, name: 'BLAZER TRAJE', image: product1, price: '$279.999' },
        { id: 2, name: 'CAMISETA BÁSICA', image: product2, price: '$42.990' },
        { id: 3, name: 'JEANS CARGO', image: product3, price: '$139.990,00' },
    ];

    return (
        <div className="container" style={{ paddingTop: '20px', paddingBottom: '50px' }}>
            <Carousel style={{ marginBottom: '50px' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={nuevosprod2}
                        alt=""
                        style={{ maxHeight: '800px', objectFit: 'contain' }}
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={nuevosprod4}
                        alt=""
                        style={{ maxHeight: '800px', objectFit: 'contain' }}
                    />
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={nuevosprod9}
                        alt=""
                        style={{ maxHeight: '800px', objectFit: 'contain' }}
                    />
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Productos destacados */}
            <h2 className="mt-4 text-center" style={{
                marginTop: '50px',
                marginBottom: '30px',
                color: '#ff555d', /* Azul vibrante */
                fontWeight: 'bold', /* Negrita para mayor énfasis */
                fontSize: '3rem', /* Aumento del tamaño del texto */
                letterSpacing: '2px', /* Espaciado entre letras */
                textTransform: 'uppercase', /* Convierte el texto a mayúsculas */
                position: 'relative',
                display: 'inline-block',
                paddingBottom: '10px'
            }}>
                Productos Destacados
                <span style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '4px',
                    backgroundColor: '#f91475', /* Color contrastante */
                    borderRadius: '2px'
                }}></span>
            </h2>
            <Row className="featured-products">
                {featuredProducts.map(product => (
                    <Col md={4} key={product.id} className="mb-4" style={{ padding: '20px' }}>
                        <Card>
                            <Card.Img variant="top" src={product.image} alt={product.name} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.price}</Card.Text>
                                <Link to="/products">
                                    <Button variant="primary">Ver Más</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;

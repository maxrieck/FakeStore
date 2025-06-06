import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router";

function ProductList() {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load products.");
                setLoading(false);
            })


    }, [])


    if (loading) return <p>Loading products...</p>
    if (error) return <p>{error}</p>



    return (
        <>           
            <h1 className="mx-5 mt-3">Products</h1>
            <Container className="my-3">
                <Row className="justify-content-center">
                    {products.map((product) => (
                        <Col key={product.id} md={4} className="mb-3">
                            <Card style={{ height: "45vh" }} className="shadow-sm">
                                <div
                                    style={{
                                        height: "220px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: "#f8f9fa"
                                    }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={product.image}
                                        alt={product.title}
                                        style={{
                                            maxHeight: "180px",
                                            maxWidth: "90%",
                                            width: "auto",
                                            height: "auto",
                                            objectFit: "contain",
                                            display: "block"
                                        }}
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "1.2rem" }}>{product.title}</Card.Title>
                                    <Card.Text>{product.price}</Card.Text>
                                </Card.Body>
                                <Link
                                    style={{
                                        fontSize: "1rem",
                                        margin: "8px 20px",
                                        textAlign: "center"
                                    }}
                                    className="custom-button"
                                    to={`/products/${product.id}`}
                                >
                                    View Details
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default ProductList;
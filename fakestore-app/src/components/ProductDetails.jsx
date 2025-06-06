import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/Alert"
import { Link } from "react-router";
import Modal from 'react-bootstrap/Modal';



function ProductDetails() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleted, setDeleted] = useState(false);
    const [show, setShow] = useState(false);

    const deleteProduct = () => {
        axios.delete(`https://fakestoreapi.com/products/${id}`)
            .then(() => {
                setDeleted(true);
                console.log("Product " + id + "had been deleted.")
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);

            })
            .catch(() => {
                setError("Failed to load product details.");
                setLoading(false);
            });
    }, [id]);


    if (loading) return <p>Loading products...</p>
    if (error) return <p>{error}</p>
    if (deleted) return (
        <>
            <Alert variant="success">
                Product has been deleted successfully!
            </Alert>
            <Container>
                <Row style={{ margin: "10px", width: "25%" }} >
                    <Link className="custom-button" to="/products">Back to products page</Link>
                </Row>
            </Container>
        </>
    )


    return (

        <Container>

            <Row style={{ margin: "10px", width: "25%" }} >
                <Link className="custom-button" to="/products">Back to products page</Link>
            </Row>

            <Card className="mb-3">
                <Card.Img style={{

                    maxHeight: "600px",
                    maxWidth: "90%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    display: "block"

                }} variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>${product.price}</Card.Text>
                    <Card.Text>{product.category.toUpperCase()}</Card.Text>
                    <Button className="btn-dark mb-1 mx-2" >Add to Cart</Button>
                    <Button onClick={handleShow} className="btn-dark mb-1" >Delete Product</Button>

                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={deleteProduct}>
                        Delete Product
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}


export default ProductDetails;
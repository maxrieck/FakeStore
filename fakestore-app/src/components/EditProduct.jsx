import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";

function EditProduct({ onUpdate }) {
    const { id } = useParams(); // get id from URL
    const productId = id;
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        image: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch product data and set as default values
    useEffect(() => {
        if (productId) {
            axios.get(`https://fakestoreapi.com/products/${productId}`)
                .then(response => {
                    setFormData({
                        title: response.data.title || '',
                        description: response.data.description || '',
                        price: response.data.price || '',
                        image: response.data.image || '',
                    });
                    setLoading(false);
                })
                .catch(() => {
                    setError("Failed to load product data.");
                    setLoading(false);
                });
        }
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`https://fakestoreapi.com/products/${productId}`, formData);
            onUpdate && onUpdate(response.data);
            setSubmitted(true);
            setError(null);
        } catch (error) {
            setError(`An unexpected error occurred: ${error.message}`);
            setSubmitted(false);
        }
    }

    if (loading) return <Container className="mt-5"><Alert variant="info">Loading product data...</Alert></Container>;

    return (
        <Container className="mt-5">
            <h1>Edit Product</h1>
            {submitted && <Alert variant="success">Product updated successfully!</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Enter a title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        placeholder="Enter a description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        placeholder="Enter a price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="image"
                        placeholder="Enter an image URL"
                        value={formData.image}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="dark" type="submit">Update Product</Button>
            </Form> 

        </Container>
    );
}

export default EditProduct;

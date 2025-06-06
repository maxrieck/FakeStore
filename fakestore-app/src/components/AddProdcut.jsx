import { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function AddProduct() {

    // const [product, setProduct] = useState();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null)
    const[formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        inmage: '',
    });


    const handeChange = (e) => {
        const { name, value } =e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://fakestoreapi.com/products', formData)
                // setProduct(response.data);
                setSubmitted(true);
                setError(null);
                console.log("Product added successfully:", response.data);
                
        }
        catch (error) {
            setError(`An unexpected error occurred: ${error.message}`);
            setSubmitted(false);
        }
    }
    return (

        <Container className="mt-5">
            <h1>Add New Product</h1>
            {submitted && <Alert variant="success">Product added successfully!</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Enter a title" value={formData.title} onChange={handeChange} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="description" placeholder="Enter a description" value={formData.description} onChange={handeChange} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" name="category" placeholder="Enter a category" value={formData.category} onChange={handeChange} required />
                </Form.Group>    

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" placeholder="Enter a price" value={formData.price} onChange={handeChange} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name="image" placeholder="Enter a image url" value={formData.image} onChange={handeChange} required />
                </Form.Group>

                <Button variant="dark" type="submit">Add Product</Button>
                
            </Form>
        </Container>
    )
}


export default AddProduct;
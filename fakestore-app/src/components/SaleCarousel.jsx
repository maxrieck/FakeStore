import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
import './SaleCarousel.css';
import { Link } from "react-router";

function SaleCarousel() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=9')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      });
  }, []);

 
  const groupArray = (arr, size) =>
    arr.length > 0
      ? [arr.slice(0, size), ...groupArray(arr.slice(size), size)]
      : [];

  if (loading) return <div>Loading...</div>;

  const productGroups = groupArray(products, 3);

  return (
    <div className="sale-carousel-wrapper">
      <Carousel
        interval={null}
        indicators={false}
        nextIcon={<span className="carousel-control-next-icon custom-arrow" />}
        prevIcon={<span className="carousel-control-prev-icon custom-arrow" />}
      >
        {productGroups.map((group, idx) => (
          <Carousel.Item key={idx}>
            <CardGroup>
              {group.map(product => {
                // Calculate a fake discount (e.g., 20% off)
                const discountPercent = 20;
                const discountedPrice = (product.price * (1 - discountPercent / 100)).toFixed(2);
                return (
                  <Card key={product.id}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.title}
                      style={{
                        height: "150px",
                        objectFit: "contain",
                        padding: "10px"
                      }}
                    />
                    <Card.Body style = {{display: "flex", flexDirection: "column"}} >
                      <Card.Title
                        style={{
                          fontSize: "clamp(1rem, 2vw, 1.1rem)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                        }}
                        title={product.title}
                      >
                        {product.title}
                      </Card.Title>
                      <Card.Text>
                        <span style={{ textDecoration: "line-through", color: "#888", marginRight: "8px" }}>
                          ${product.price}
                        </span>
                        <span style={{ color: "#d32f2f", fontWeight: "bold" }}>
                          ${discountedPrice}
                        </span>
                      </Card.Text>
                      <Link style={{ fontSize: "1rem", margin: "8px 40px", textAlign: "center" }} className="custom-button" to={`/products/${product.id}`}>View Details</Link>
                    </Card.Body>
                  </Card>
                );
              })}
            </CardGroup>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default SaleCarousel;
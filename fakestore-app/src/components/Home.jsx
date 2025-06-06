import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom"
import MainCarousel from "./MainCarousel";
import SaleCarousel from "./SaleCarousel";

function Home() {



    return (
        <Container>

        <hr />
            
        <Row className="justify-content-center my-3" style={{ minHeight: "25vh" }}>
            <Col>
                <MainCarousel />
            </Col>
            
        </Row>    
       
        <Row className="justify-content-center" >
             <h1 className="mb-2 ">Welcome to our Fake Store</h1>
        </Row>
       
        <div className="mb-5 mt-3">
        <Link className="px-4 py-1 custom-button"to="/products">View all products</Link>
        </div>

        <hr />

        <Row className="justify-content-center mb-5" style={{ minHeight: "25vh" }}>
            <Col>
                <h5>Daily Deals</h5>
                <SaleCarousel />
            </Col>
            
        </Row> 

        </Container>
    )


}

export default Home; 
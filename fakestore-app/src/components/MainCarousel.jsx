import Carousel from 'react-bootstrap/Carousel';


// Example images (replace with your own if desired)
const images = [
  'src/assets/samsung_carousel.jpg',
  'src/assets/jackets_carousel.jpg',
  'src/assets/wd-carousel.jpg',
];

function MainCarousel() {
  return (
    <div style={{ maxWidth: "1200px", margin: "5px auto" }}>
      <Carousel className="shadow" indicators={false} interval={null}>
        <Carousel.Item interval={3000}>
          <h3 className="position-absolute m-2 p-1 top-0 end-0 rounded" style={{color: "white", backgroundColor: "rgba(32, 37, 41, 0.86)", fontSize: "large"}} >Samsung Odyssey G9 available now.</h3>
          <img
            className="d-block w-100"
            src={images[0]}
            alt="First slide"
          />                         
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <h3 className="position-absolute mx-5 px-4 p-1 bottom-0 rounded" style={{color: "white", backgroundColor: "rgba(32, 37, 41, 0.86)", fontSize: "large"}} >New jackets in stock!</h3>
          <img
            className="d-block w-100"
            src={images[1]}
            alt="Second slide"
          />           
        </Carousel.Item>
        <Carousel.Item>
          <h3 className="position-absolute m-3 px-4 p-1 top-0 end-0 rounded" style={{color: "white", backgroundColor: "rgba(32, 37, 41, 0.96)", fontSize: "large"}} >Uprade your PS4 today!</h3>
          <img
            className="d-block w-100"
            src={images[2]}
            alt="Third slide"
          />           
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MainCarousel;
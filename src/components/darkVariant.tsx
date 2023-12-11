import { Carousel } from "react-bootstrap";
import './darkVariant.scss';

function DarkVariantExample() {
  return (
    <div data-testid="DarkVariantExample">
      <Carousel data-bs-theme="dark" className="custom-carousel" interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-image"
            src={`../../../crud-json/uploads/lala.png`}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-image"
            src={`../../../crud-json/uploads/dailoan.png`}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-image"
            src={`../../../crud-json/uploads/viet.png`}
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>

  );
}

export default DarkVariantExample;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../../assets/bannerimg/banner1.jpg"
import banner2 from "../../../assets/bannerimg/banner2.jpg"
import banner3 from "../../../assets/bannerimg/banner3.jpg"
import banner4 from "../../../assets/bannerimg/banner4.jpg"
const BannerSlider = () => {
  return (
    <Carousel className="banner" variant="dark">
      <Carousel.Item>
        <img
          className="d-block h-auto w-100"
          src={banner1}
          alt=""
        />
        <Carousel.Caption className="text-light">
          <h5>HollyWood</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption className="text-light">
          <h5>Bollywood</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src={banner3}
          alt="Third slide"
        />
        <Carousel.Caption className="text-light">
          <h5>Disney</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src={banner4}
          alt="Third slide"
        />
        <Carousel.Caption className="text-light">
          <h5>Cartoon</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerSlider;

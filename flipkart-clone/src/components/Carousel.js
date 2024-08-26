import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel1 from '../assets/images/carousel1.webp';
import carousel2 from '../assets/images/carousel2.webp';
import carousel3 from '../assets/images/carousel3.webp';

function CarouselComponent() {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={carousel1} alt="Carousel 1" />
      </div>
      <div>
        <img src={carousel2} alt="Carousel 2" />
      </div>
      <div>
        <img src={carousel3} alt="Carousel 3" />
      </div>
    </Carousel>
  );
}

export default CarouselComponent;

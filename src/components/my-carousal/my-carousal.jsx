import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ScrollDown from '../scroll-down/scroll-down'
import Slide1 from '../../assets/imgs/Slide1.webp'
import Slide2 from '../../assets/imgs/Slide2.webp'
import Slide3 from '../../assets/imgs/Slide3.webp'
import "./my-carousal.style.css"


const MyCarousal = () => {
    return (
        <div id="home">
           <Carousel controls={false} indicators interval={2500} pause={false}>
  <Carousel.Item>
    <img
      className="d-block w-100 custom"
      src={Slide1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 custom"
      src={Slide2}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 img3 custom"
      src={Slide3}
      alt="Third slide"
    />
  </Carousel.Item>

</Carousel> 
<ScrollDown />
        </div>
    )
}

export default MyCarousal

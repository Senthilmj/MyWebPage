import React, {Component} from 'react';
import Slider from 'react-slick';
import './ImageSlider.css'

class ImageSlider extends Component {
render() {
    const settings = {
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: false,
        autoplaySpeed : 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
        <Slider {...settings}>
            <div className="imageContianer">
              <img src="/images/1.jpg" alt=" img"></img>
            </div>
            <div className="imageContianer ">
              <img src="/images/2.jpg" alt=" img"></img>
            </div>
            <div className="imageContianer ">
              <img src="/images/3.jpg" alt=" img"></img>
            </div>
            <div className="imageContianer ">
              <img src="/images/4.jpg" alt=" img"></img>
            </div >
            <div className="imageContianer ">
              <img src="/images/5.jpg" alt=" img"></img>
            </div>
        </Slider>
      </div>
    )
}
}

export default ImageSlider;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slideshow.css'
import cat1 from '../../images/cat1.jpg'
import cat2 from '../../images/cat2.jpg'

const Slideshow = ({
    images = [
        {
            imgSrc: cat1
        },
        {
            imgSrc: cat2
        },
        {
            imgSrc: '../../images/cat1.jpg'
        },
        {
            imgSrc: '../../images/cat2.jpg'
        },
        {
            imgSrc: '../../images/cat1.jpg'
        },
        {
            imgSrc: '../../images/cat2.jpg'
        },
        {
            imgSrc: '../../images/cat1.jpg'
        },
        {
            imgSrc: '../../images/cat2.jpg'
        },
        {
            imgSrc: '../../images/cat1.jpg'
        },
        {
            imgSrc: '../../images/cat2.jpg'
        }
        
    ]
}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slideshow">
        <Slider {...settings}>
        {images.map((singleImage) => {
            console.log(singleImage.imgSrc)
        return (
            <div>
                <img src={singleImage.imgSrc} />
            </div>
        )})}
        </Slider>
    </div>
  );
}

export default Slideshow
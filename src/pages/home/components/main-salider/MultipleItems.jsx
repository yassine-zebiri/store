import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./MultipleItems.css";

export default class MultipleItems extends Component {
    render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<SampleNextArrow />,
        prevArrow:<SamplePreovArrow />,
        dotsClass:'button__bar'
    };
return (
    <div>
    <Slider {...settings} className="main-salider-s">

        <div className="item">
        <img src="/store/img/pic1.webp" alt="" srcSet="" />
        </div>

        <div className="item">
        <img src="/store/img/pic3.webp" alt="" srcSet="" />
        </div>
        
        <div className="item">
        <img src="/store/img/pic4.webp" alt="" srcSet="" />
        </div>
        <div className="item">
        <img src="/store/img/pic5.webp" alt="" srcSet="" />
        </div>
        <div className="item">
        <h3>5</h3>
        </div>
        <div className="item">
        <h3>6</h3>
        </div>
        <div className="item">
        <h3>7</h3>
        </div>
        <div className="item">
        <h3>8</h3>
        </div>
        <div className="item">
        <h3>9</h3>
        </div>
    </Slider>
    </div>
);
}
}

function SampleNextArrow(props) {
    const { className,onClick } = props;
    return (
        <div
        className={className}
        onClick={onClick}
        />
    );
}
function SamplePreovArrow(props) {
    const { className,onClick } = props;
    return (
        <div
        className={className}
        onClick={onClick}
        />
    );
}
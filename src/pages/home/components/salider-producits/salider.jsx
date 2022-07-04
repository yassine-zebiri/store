import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CardProduict from "./cardProduict";


const DATA=[{name:'iphone',price:'1000'},{name:'iphone',price:'1000'},{name:'iphone',price:'1000'},{name:'iphone',price:'1000'}]


export default class SaliderProducits extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
    this.slider.slickNext();
    }
    previous() {
    this.slider.slickPrev();
    }
    
    render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        nextArrow:<SampleNextArrow />,
        prevArrow:<SampleNextArrow />,
    };
return (
    <div className="salider-produicts">
        <div className="salider-produicts-name">
            <span>فئة اسم </span>
        </div>
    <div className='btn-l-r'>

        <div className='btn-left'><ArrowCircleLeftIcon onClick={this.previous} color="primary"/> </div>
        <div className='btn-right'><ArrowCircleRightIcon onClick={this.next} color="primary"/> </div>

    </div>
    <Slider ref={c => (this.slider = c)}  {...settings} className="salider-produicts-s">

        
        <div className="s-item">
        <CardProduict/>
        </div>
        <div className="s-item">
        <CardProduict/>
        </div>
        <div className="s-item">
        <CardProduict/>
        </div>
        <div className="s-item">
        <CardProduict/>
        </div>
        <div className="s-item">
        <CardProduict/>
        </div>
        <div className="s-item">
        <CardProduict/>
        </div>
        <div className="s-item">
        <CardProduict/>
        </div>
        {DATA.map((item,index)=>(
            <div className="s-item" key={index}>
                <CardProduict/>
            </div>
        ))}
    </Slider>
    </div>
);
}
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
    <div
    className={className}
    style={{ ...style, display: "none", background: "red" }}
    onClick={onClick}
    />
);
}

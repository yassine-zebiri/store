import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CardProduict from "../../../../../../../../home/components/salider-producits/cardProduict";

const DATA=[1,1,1,1]
export default class AdminSaliderProducits extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state={
            card:[]
        }
    }
    
    componentDidMount(){
        //this.setState({card:this.props.cards})
    }
    next() {
    this.slider.slickNext();
    }
    previous() {
    this.slider.slickPrev();
    }
    
    render() {
        
//console.log(this.props.cards);
this.props.cards.map((item)=>{
    console.log(item[0]);
})

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
            <span>{this.props.title}</span>
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
        {this.props.cards.map((item,index)=>(
            <div className="s-item" key={index}>
                <h1>{item[0].title}</h1>
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
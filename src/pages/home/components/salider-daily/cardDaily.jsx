import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './style.css';
import Rating from '@mui/material/Rating';
import { useState } from "react";

export const zero=(h)=>h>=10?String(h):("0"+h);

function MyTime(s){
    var day=0;
    var hour=0;
    var min=0;
    var sec=0;
    if(s>60 && s<3600){
        min=s/60;
        sec=min*60-Math.floor(min)*60;

        min=Math.floor(min);
        sec=Math.floor(sec);

    }else if(s>3600 && s<86400){
        hour=s/60/60;
        min=hour*60-Math.floor(hour)*60;
        sec=min*60-Math.floor(min)*60;

        hour=Math.floor(hour);
        min=Math.floor(min);
        sec=Math.floor(sec);

    }else if(s>86400){
        day=s/60/60/24;
        hour=day*24-Math.floor(day)*24;
        min=hour*60-Math.floor(hour)*60;
        sec=(min*60)-(Math.floor(min)*60);

        day=Math.floor(day);
        hour=Math.floor(hour);
        min=Math.floor(min);
        sec=Math.floor(sec);

    }else{
        sec=s;
    }
    
    return {day:zero(day),hour:zero(hour),min:zero(min),sec:zero(sec)}
}

export default function CardDaily(){
const[Date,setDate]=useState('');
useEffect(()=>{
    let x=6*24*60*60;
    setInterval(() => {
        x=x-1;
        setDate(MyTime(x))
    }, 1000);
},[])

    return(
        <>
        <div className="card-D">


            <div className="card-D-1">
                <Link to='produit/dailay'>
                <img src="store/img/produicts/pic9.jpg" alt="" /></Link>
            </div>


            <div className="card-D-2">


            <div><Link className="card-D-2-title" to='produit/dailay'>حقيبة سفر و تخيم</Link></div>
            <div className="card-D-2-rating" ><span> 150 DZ <strike>450 DZ</strike></span></div>
            
            <div className="card-D-2-p"><p >ريبلب لبقليب لقلي  الا لك ك ك كك ك ك fff df fsd df g  r fezf   rg grfg rgr rgr rrgb brfgbrfghbr rf fre tg gbgg rgrg t gtg tg  طك ك ك</p></div>
            <div className="card-D-2-rating"><Rating defaultValue={2.5} precision={0.5} readOnly/></div>
            <div className="card-D-2-T">

                <div className="card-D-2-T-i-1">
                    <p>اضافة لسلة</p>
                    <span></span>
                </div>

                <div className="card-D-2-T-i-2">d</div>

                <div className="card-D-2-T-i-3">dd</div>
            </div>
            <div className="card-D-2-T-C">
                <div className="c1">
                    <span>{Date.day}</span>
                    <p>days</p>
                </div>
                <div className="c2">:</div>
                <div className="c1">
                    <span>{Date.hour}</span>
                    <p>hours</p>
                </div>
                <div className="c2">:</div>
                <div className="c1">
                    <span>{Date.min}</span>
                    <p>min</p>
                </div>
                <div className="c2">:</div>
                <div className="c1">
                    <span>{Date.sec}</span>
                    <p>sec</p>
                </div>
            </div>
            </div>



        </div>
        </>
    )
}
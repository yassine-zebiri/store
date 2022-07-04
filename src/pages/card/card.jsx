import { useState,useEffect } from "react";

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
    const zero=(h)=>h>=10?String(h):("0"+h);
    return {day:zero(day),hour:zero(hour),min:zero(min),sec:zero(sec)}
}
export default function Card(){
    const[date,setDate]=useState('1');

    
    useEffect(() => {
        let x=1000;
        setInterval(() => {
            x=x-1
        setDate(MyTime(x))    
        }, 1000);
    }, [])
    
    return(
        <>
        <h1>{date.min}:{date.sec}</h1>
        </>
    )
}
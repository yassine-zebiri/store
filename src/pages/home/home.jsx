import React, { useEffect } from "react";
import { useState } from "react";
import { Get_Rows_Api } from "../admin/api";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Feature from "./components/feature-block/feature";
import MainSlider from "./components/main-salider/mainSlider";
import SaliderDaily from "./components/salider-daily/saliderDaily";
import SaliderProducits from "./components/salider-producits/salider";
import "./index.css";

export function Home(){
    const[DATA,SetDATA]=useState([]);
    useEffect(()=>{
        Get_Rows_Api().then(res=>SetDATA(res.data))
    },[])
return(
    <>      
    <Header/>

    <div className="Home">
        <div>
            <MainSlider/>
        </div>
        <div className="mt-5">
            <Feature/>
        </div>
        <div className="mt-5">
            <SaliderProducits/>
        </div>

        <div className="mt-5">
            <SaliderDaily/>
        </div>

        {DATA.map((item,index)=>{
            if(item.type==="products"){
                return(
                    <div className="mt-5">
                        <SaliderProducits/>
                    </div>
                )
            }
        })}



    </div>
    <Footer/>
    </>
)
}
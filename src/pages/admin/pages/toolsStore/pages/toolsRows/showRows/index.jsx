import BoxLeft from "../../../../../components/box-left";
import { useDispatch, useSelector } from 'react-redux/es/exports';
import AdminToolsStoreBoxRight from "../../../components/BoxRigth";
import { Get_Rows_Api } from "../../../../../api";
import { useState, useEffect } from "react";
import AdminSaliderProducits from "./components/saliderProducts";
import AdminToolsRowsShowRows2 from "./components/salider";
export default function AdminToolsRowsShowRows(){
    const state=useSelector((state)=>state);
    const [DATA,SetDATA]=useState([]);
    useEffect(()=>{
        Get_Rows_Api().then(res=>SetDATA(res.data))
        console.log("okk");
    },[])
    //console.log(DATA[0].cards);
    return(
        <div className="Admin">
        
        <BoxLeft/>
        <div className={state.headerTools.boxAdminLeft?"admin-boxright":"admin-boxright admin-box-margin"}>
                <AdminToolsStoreBoxRight/>
            <h1>contant</h1>
            <div className="admin-card-contant admin-tools-box-margin-right" >
                <div className="admin-tools-rows">

                    {DATA.map((item,index)=>{
                        if(item.type==="products"){
                            //console.log(item.cards);
                            return(
                                <div key={index} className="mt-3">
                                    <AdminSaliderProducits className="mt-3" cards={item.cards} title={item.name}/>
                                    <AdminToolsRowsShowRows2 className="mt-3" cards={item.cards} />
                                </div>
                            )
                        }
                    }
                    )}
                </div>
            </div>
        </div>
        
        
        </div>
    )
}
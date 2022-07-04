import BoxLeft from "../../components/box-left";
import { useDispatch, useSelector } from 'react-redux/es/exports';
import AdminHeader from "../../components/header";
import MyTable from "./components/table/table";
import './index.css';
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from "react";
import { get_prod } from "../../api";
import { FETCH_DATA, getProducts } from "../../../../redux/admin";

export default function AdminProduicts(){
    const dispatch=useDispatch();
    const state=useSelector((state)=>state);
    
    useEffect(()=>{
            get_prod().then((res)=>dispatch(getProducts(res.data)));
            dispatch(FETCH_DATA({name:"products"}));
    },[dispatch])
    
return(
    <div className="Admin">
        
        <BoxLeft/>
        <div className={state.headerTools.boxAdminLeft?"admin-boxright":"admin-boxright admin-box-margin"}>
            <AdminHeader/>
            <div className="admin-card-contant">
                <div dir="rtl">
                <div>
                    <h3>قائمة المنتجات :</h3>
                    <p>عدد المنتجات : <span>{(state.ADMIN_DATA.Products).length}</span></p>
                </div>
                <div className='admin-product-div-search'>
                    <SearchIcon/>
                    <TextField size='small' fullWidth placeholder='Search...' />
                </div>
                </div>

                <MyTable/> 
            </div>       
        </div>
    </div>
)
}
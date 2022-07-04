import AdminHeader from "../../components/header";
import BoxLeft from "../../components/box-left";
import { useDispatch, useSelector } from 'react-redux/es/exports';
import MyTable from "./table";
import { Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from "react";
import { get_categories_API } from "../../api";
import { FETCH_DATA, getCategroie_Redux } from "../../../../redux/admin";
import { useState } from "react";
import FormAddCategorie from "./form";

export default function AdminGategorie(){
    const state=useSelector((state)=>state);
    const dispatch=useDispatch();
    useEffect(()=>{


            get_categories_API().then(res=>dispatch(getCategroie_Redux(res.data)));

            dispatch(FETCH_DATA({name:"categorie"}));
            

    },[dispatch]);

    const[HideForm,setHideForm]=useState(false);
    return(
        <div className="Admin">
        
        <BoxLeft/>
        <div className={state.headerTools.boxAdminLeft?"admin-boxright":"admin-boxright admin-box-margin"}>
            <AdminHeader/>
            <div className="admin-card-contant">
                <div className="admin-categorie-header" dir="rtl">
                    <div>
                <div>
                    <h3>قائمة الفئات :</h3>
                    <p>عدد الفئات : <span>{state.ADMIN_DATA.Categorie.length}</span></p>
                </div>
                <div className='admin-product-div-search'>
                    <SearchIcon/>
                    <TextField size='small' fullWidth placeholder='Search...' />
                </div></div>

                <div className="p-1">
                    <Button fullWidth onClick={()=>setHideForm(!HideForm)} className="btn" variant="outlined" >اضافة فئة جديد</Button>
                    {HideForm?<FormAddCategorie click={()=>setHideForm()} value={HideForm}/>:null}

                </div>

                </div>
                

                <MyTable/> 
            </div>   
            
        </div>
    </div>
    )
}
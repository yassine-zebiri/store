import BoxLeft from "../../components/box-left";
import { useDispatch, useSelector } from 'react-redux/es/exports';
import './index.css';
import AdminToolsStoreBoxRight from "./components/BoxRigth";
import MultipleItems from "../../../home/components/main-salider/MultipleItems";
import { MenuItem } from "@mui/material";


import { IconButton } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from "react";
import { get_categories_API } from "../../api";
import { getCategroie_Redux } from "../../../../redux/admin";

export default function AdminToolsStore(){
    const state=useSelector((state)=>state);
    const dispatch=useDispatch();

    useEffect(()=>{


            get_categories_API ().then(res=>dispatch(getCategroie_Redux(res.data)));

            //dispatch(FETCH_DATA({name:"categorie"}));
            

    },[dispatch]);


    return(
        <div className="Admin">
            <BoxLeft/>
            <div className={state.headerTools.boxAdminLeft?"admin-boxright":"admin-boxright admin-box-margin"}>
                <AdminToolsStoreBoxRight/>

                <div className="admin-card-contant admin-tools-box-margin-right" >

                    <div className="admin-tools-store-header">
                        <div dir="rtl" style={{width:'100%'}}>
                            <h3>الواجهة العلوية للصفحة الرأسية :</h3>
                        </div>

                        <div className="admin-tools-store-header-salider">
                            <div>

                                <div dir="rtl" className="mt-2 mb-1">
                                    <h3> عرض الصور</h3>
                                </div>

                                <MultipleItems/>
                            </div>
                        </div>

                        <div  className="admin-tools-store-header-categories">
                            <div>

                                <div dir="rtl" className="mt-5 mb-1">
                                    <h3>الفئات</h3>
                                </div>

                                <div className="admin-tools-store-header-categories-contant">
                                    {state.ADMIN_DATA.Categorie.map((item,index)=>(
                                        <MenuItem key={index} >{item.name}</MenuItem>
                                    ))}

                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="admin-tools-store-rows mt-3">

                        <div dir="rtl" style={{width:'100%'}}>
                            <h3>الأسطرا :</h3>
                        </div>
                        <div  style={{width:'100%'}}>
                            <div dir="rtl" className="admin-tools-store-rows-row">

                                <h4>اسم السطر 0000</h4>
                                <h4>نوع السطرا : 0000</h4>
                                <h4>عدد البطاقات : 00</h4>

                                <div>
                                    <IconButton>
                                        <BorderColorIcon/>
                                    </IconButton>
                                    <IconButton>
                                        <RemoveRedEyeIcon/>
                                    </IconButton>
                                    <IconButton>          
                                        <DeleteIcon/>
                                    </IconButton>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}
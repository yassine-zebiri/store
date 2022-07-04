import BoxLeft from "../../../../../components/box-left";
import AdminToolsStoreBoxRight from "../../../components/BoxRigth";
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Button, MenuItem, TextField } from "@mui/material";
import CameraAlt from "@mui/icons-material/CameraAlt";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ADD_Salider_Pic_API, get_categories_API } from "../../../../../api";
import { getCategroie_Redux } from "../../../../../../../redux/admin";

export default function AdminCreateSaliderPic(){
    const state=useSelector((state)=>state);
    const dispatch=useDispatch();

    useEffect(()=>{


            get_categories_API().then(res=>dispatch(getCategroie_Redux(res.data)));

            //dispatch(FETCH_DATA({name:"categorie"}));
            

    },[dispatch]);


    const [img,setImg]=useState({hide:true,url:null});
    const validationSchema=yup.object({
        containedButtonFile:yup.string().required('pic...'),
        categorie:yup.string().required('يرجى تحديد فئة'),
        categorieSub:yup.string().required('يرجى تحديد فئة فرعية'),
    });
    const formik=useFormik({
        initialValues:{
            categorie:'',
            categorieSub:'',
            containedButtonFile:''
        },

        validationSchema:validationSchema,

        onSubmit:(values)=>{
            ADD_Salider_Pic_API(values);
        }
    });

    return(
        <div className="Admin">
            <BoxLeft/>
            <div className={state.headerTools.boxAdminLeft?"admin-boxright":"admin-boxright admin-box-margin"}>
                <AdminToolsStoreBoxRight/>
                <div className="admin-card-contant admin-tools-box-margin-right" >

                    <form onSubmit={formik.handleSubmit} className="admin-tools-store-create-salider"encType="multipart/form-data">


                        <div className="item-10 admin-tools-store-create-salider-upload-img" style={img.hide?{padding:'4rem'}:{padding:'0rem'}}>
                            <label htmlFor="containedButtonFile">
                                

                                <input type="file" multiple 
                                name="containedButtonFile" id="containedButtonFile" 
                                style={{display:'none'}} 

                                onChange={(e)=>{
                                    const fileReader=new FileReader();
                                    fileReader.onload=()=>{
                                    setImg({hide:false,url:fileReader.result});
                                    }
                                    const files=e.currentTarget.files[0]
                                    formik.setFieldValue("containedButtonFile", files);
                                    fileReader.readAsDataURL(e.target.files[0])
                                }}
                                />
                                {img.hide?(
                                    <>
                                <Button dir="ltr" startIcon={<CameraAlt/>} variant="outlined" component="span">
                                    تحميل صورة
                                </Button>
                                {formik.touched.containedButtonFile && formik.errors.containedButtonFile?(<p style={{color:'red'}} >يرجى تحديد صورة</p>):null}
                                </>
                                ):(
                                    <img src={img.url} alt=""/>
                                )}
                                
                            </label>
                        </div>

                        <div className="item-5">
                            <TextField

                            name="categorie"
                            value={formik.values.categorie}
                            onChange={formik.handleChange}
                            label="الفئة"
                            error={formik.touched.categorie && Boolean(formik.errors.categorie)}
                            helperText={formik.touched.categorie && formik.errors.categorie}
                            select>
                                {state.ADMIN_DATA.Categorie.map((item,index)=>(
                                    <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                ))}
                            </TextField>
                        </div>

                        <div className="item-5">
                            <TextField
                            name="categorieSub"
                            value={formik.values.categorieSub}
                            onChange={formik.handleChange}
                            label="الفئة الفرعي"
                            error={formik.touched.categorieSub && Boolean(formik.errors.categorieSub)}
                            helperText={formik.touched.categorieSub && formik.errors.categorieSub}
                            select>
                                <MenuItem value='dd'>ss</MenuItem>
                                <MenuItem value='dd'>ss</MenuItem>
                                <MenuItem value='dd'>ss</MenuItem>
                            </TextField>
                        </div>

                        <Button type="submit" variant="contained">حفظ</Button>


                    </form>
                    

                </div>
            </div>


        </div>
    )
}
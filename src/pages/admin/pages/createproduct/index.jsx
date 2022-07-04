import BoxLeft from "../../components/box-left";
import { useSelector,useDispatch } from 'react-redux/es/exports';
import AdminHeader from "../../components/header";
import './index.css';
import { Button, MenuItem, TextField } from "@mui/material";
import { useFormik } from 'formik';
import * as yup from 'yup';

import CameraAltIcon from '@mui/icons-material/CameraAlt';


import { useState,useEffect } from "react";
import { ADD_Product_API, get_categories_API, get_prod } from "../../api";
import { FETCH_DATA, getCategroie_Redux, getProducts } from "../../../../redux/admin";
import { useNavigate } from 'react-router-dom';



export default function AdminCreateProduct(){
    const state=useSelector((state)=>state);
    const dispatch=useDispatch();
    useEffect(()=>{
            get_categories_API().then(res=>dispatch(getCategroie_Redux(res.data)));
            dispatch(FETCH_DATA({name:"categorie"}));
        
    },[dispatch]);


    const [img,setImg]=useState({hide:true,url:null})


    const validationSchema=yup.object({
        name:yup.string().min(3,"اسم قصير").required("يجب ادخل اسم منتج"),
        categorie:yup.string().required('ddd'),
    })

    const formik=useFormik({
        initialValues:{
            name:'',
            categorie:'',
            stroeHouse:'',
            containedButtonFile:'',
            buyingPrice:'',
            sallingPrice:'',
            descripiton:''
        },
        validationSchema:validationSchema,
        onSubmit: (values,{resetForm}) => {
            
            ADD_Product_API(values);

            //dispatch(FETCH_DATA({name:"products"}));

            get_prod().then((res)=>dispatch(getProducts(res.data)));

            setImg({hide:true,url:''});
            
            resetForm({valeus:
                {
                    name:'',
                    categorie:'',
                    stroeHouse:'',
                    containedButtonFile:'',
                    buyingPrice:'',
                    sallingPrice:'',
                    descripiton:''
                }
            })

            

        },
    })

return(
    <div className="Admin">
        
        <BoxLeft/>
        <div className={state.headerTools.boxAdminLeft?"admin-boxright":"admin-boxright admin-box-margin"}>
            <AdminHeader/>
            <div className="admin-card-contant">
                <div dir="rtl" className="mp-3">
                    <h2 className="mb-1">اضافة منتج</h2>  
                </div>


            <form  encType="multipart/form-data" className="admin-create-product-form" onSubmit={formik.handleSubmit} >

                <div className="item-5">
                    <TextField 
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    variant="outlined" label="اسم المنتج"/>
                </div>

                

                <div className="item-5">
                    <TextField select label="تحديد فئة المنتج" name="categorie" 
                    value={formik.values.categorie}
                    onChange={formik.handleChange}
                    error={formik.touched.categorie && Boolean(formik.errors.categorie)}
                    helperText={formik.touched.categorie && formik.errors.categorie}
                    >
                        
                        {state.ADMIN_DATA.Categorie.map((item,index)=>(
                            <MenuItem key={index} value={item.id} >{item.name}</MenuItem>
                        ))}
                    </TextField>
                </div>

                <div className="item-5">
                    <TextField 
                    name="stroeHouse"
                    value={formik.values.stroeHouse}
                    onChange={formik.handleChange}
                    error={formik.touched.stroeHouse && Boolean(formik.errors.stroeHouse)}
                    helperText={formik.touched.stroeHouse && formik.errors.stroeHouse}
                    variant="outlined" type="number" label="المخزن"/>                
                </div>

                <div  className="item-5 admin-create-preview">
                    {img.hide?null:(
                    <img src={img.url}  alt=""  />)}
                    <label htmlFor="containedButtonFile">
                        <input 
                        name="containedButtonFile"
                        onChange={(e)=>{
                            const fileReader=new FileReader();
                            fileReader.onload=()=>{
                                setImg({hide:false,url:fileReader.result});
                            }
                            const files=e.currentTarget.files[0]
                            formik.setFieldValue("containedButtonFile", files);
                            fileReader.readAsDataURL(e.target.files[0])
                            //console.log(files);
                            
                        }}
                        style={{display:'none'}} accept="image/*" id="containedButtonFile" multiple type="file" />
                            <Button startIcon={<CameraAltIcon/>}  variant="outlined" component="span">
                            تحميل صورة
                        </Button>
                    </label>

                </div>



                <div  className="item-10">
                    <TextField
                    name="descripiton"
                    value={formik.values.descripiton}
                    onChange={formik.handleChange}
                    error={formik.touched.descripiton && Boolean(formik.errors.descripiton)}
                    helperText={formik.touched.descripiton && formik.errors.descripiton}
                    label="الوصف"
                    placeholder="الوصف ..."
                    multiline
                    rows={10}
                    fullWidth/>
                </div>


                <div className="item-5">
                    <TextField 
                    name="buyingPrice"
                    value={formik.values.buyingPrice}
                    onChange={formik.handleChange}
                    error={formik.touched.buyingPrice && Boolean(formik.errors.buyingPricee)}
                    helperText={formik.touched.buyingPrice && formik.errors.buyingPrice}
                    variant="outlined" type="number" label="سعر بيع المنتج"/>                
                </div>

                <div className="item-5">
                    <TextField 
                    name="sallingPrice"
                    value={formik.values.sallingPrice}
                    onChange={formik.handleChange}
                    error={formik.touched.sallingPrice && Boolean(formik.errors.sallingPrice)}
                    helperText={formik.touched.sallingPrice && formik.errors.sallingPrice}
                    variant="outlined" type="number" label="سعر شراءالمنتج"/>                
                </div>

                <Button variant="contained" type="sumbit">احفظ المنتج</Button>
            </form>

            </div>
        </div>
    </div>
)
}
import BoxLeft from "../../components/box-left";
import { useSelector,useDispatch } from 'react-redux/es/exports';
import AdminHeader from "../../components/header";
import { useFormik } from "formik";
import { Button, MenuItem, TextField } from "@mui/material";
import "./index.css";
import { useEffect } from "react";
import { Add_Gategorie_Api, get_categories_API } from "../../api";
import { getCategroie_Redux } from "../../../../redux/admin";
function FormAddCategorie(){
    const formik=useFormik({
        initialValues:{
            name:''
        },
        onSubmit:(values,{resetForm})=>{
            Add_Gategorie_Api(values.name);
            resetForm();
        }
    })
    return(
        <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} dir="rtl">
            <h4 className="mb-1" >اضافة فئة رئيسية جديد</h4>
            <TextField
            name="name"
            value={formik.values.name}
            label="اسم فئة رئيسية"
            />
            <Button className="mt-2" type="submit" variant="contained" >اضافة</Button>
        </form>
    )
}

function FormAddSubCategorie(){
    const state=useSelector((state)=>state);

    const formik=useFormik({
        initialValues:{
            name:'',
            subCategorie:''
        },
        onSubmit:(values)=>{
            console.log(values);
        }
    })
    return(
        <form onSubmit={formik.handleSubmit}  dir="rtl">
            <h4 className="mb-1" >اضافة فئة فرعية جديد</h4>
            <div className="admin-addCategorie-form-sub">
            <TextField
            name="name"
            value={formik.values.name}
            label="اسم فئة فرعية"
            onChange={formik.handleChange}
            />

            <TextField
            select
            name="subCategorie"
            value={formik.values.subCategorie}
            label="اختار فئة رئيسية"
            onChange={formik.handleChange}

            >
                {state.ADMIN_DATA.Categorie.map((item,index)=>(
                    <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                ))}
            </TextField>
            </div>
            <Button className="mt-2" type="submit" variant="contained" >اضافة</Button>
        </form>
    )
}


export default function AdminCreateCategorie(){
    const state=useSelector((state)=>state);
    const dispatch=useDispatch();
    useEffect(()=>{
        get_categories_API().then(res=>dispatch(getCategroie_Redux(res.data)));

    },[dispatch])

    return(
        <div className="Admin">
            <BoxLeft/>
            <div className={state.headerTools.boxAdminLeft?"admin-boxright":"admin-boxright admin-box-margin"}>
                <AdminHeader/>
                <div className="admin-card-contant ">
                    <div className="admin-addCategorie-form">
                        <FormAddCategorie/>
                    </div>
                    <div className="admin-addCategorie-form mt-6">
                        <FormAddSubCategorie/>
                    </div>
                </div>
            </div>


        </div>
    )
}
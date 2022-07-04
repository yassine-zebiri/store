import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Add_Categorie_Redux, FETCH_DATA, getCategroie_Redux } from '../../../../redux/admin';
import { Add_Gategorie_Api, get_categories_API } from '../../api';
import { useDispatch } from 'react-redux/es/exports';
import { Navigate } from 'react-router-dom';

export default function FormAddCategorie(props){
    const dispatch=useDispatch();
    const formik=useFormik({
        initialValues:{
            name:''
        },
        onSubmit:(values)=>{

            Add_Gategorie_Api(values.name);


            get_categories_API().then(res=>dispatch(getCategroie_Redux(res.data)));
            

            props.click(props.value);
            //;
            

            
            
        }
    })
    return(
        <form className='admin-categorie-form' onSubmit={formik.handleSubmit}>
            <h3 className='icon' onClick={()=>{props.click(props.value)}}>X</h3>
            <h3>اضافة فئة جديد</h3>
            <div className='mt-2 mb-2 w-100'>
                <TextField
                className='w-100'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                variant="outlined" label="اسم فئة"
                />
            </div>
            <div className='w-100 mb-3 mt-1'>
                <Button type="sumbit"  fullWidth variant={"contained"} >اضافة</Button>
            </div>
        </form>
    )
}
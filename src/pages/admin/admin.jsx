import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Add_Gategorie_Api, Add_row_Api, get_categories_API, get_prod, get_rows } from "./api";
import BoxLeft from "./components/box-left";
import './index.css';
import Dashboard from "./pages/dashborad";

//sessionStorage.setItem("lastname", "Smith");
//console.log(window.sessionStorage);

export default function Admin(){
    
return(
    <div className="Admin">
        
        <BoxLeft/>
        <div className="admin-boxright">
            <h1>contant</h1>
        </div>
        
        
    </div>
)
}




/**

<div className="Admin">
        <h2>Admin</h2>
        <Rows/>
        <hr />
        <Produicts/>
        <hr />
        <Cateogries/>
    </div>
 */







function ADD_CATEOGRIE(){
    return(
        <Formik
        initialValues={{name:""}}
        onSubmit={(valeus,{resetForm})=>{
            Add_Gategorie_Api(valeus.name)
            resetForm();
        }}
        >
        {formik=>(
            <Form>
                <div>
                    <label htmlFor="">name</label>
                    <Field name="name" />
                </div>
                <button type="submit">Add categorie</button>
            </Form>
        )}

        </Formik>    
    )
}
function Cateogries(){
    const[rows,setRows]=useState([]);
    useEffect(()=>{
        get_categories_API().then((res)=>setRows(res.data));

    },[])
    return(
        <div className="box">
            <div className="card" >
                <ADD_CATEOGRIE/>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                    </tr>
                </thead>
            
            <tbody>
                {rows.map((item,index)=>
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                </tr>
                )}
            </tbody>
            </table>
        </div>
    )
}





function ADD_PRODUICT(){
    const[rows,setRows]=useState([]);
    useEffect(()=>{
        get_rows().then((res)=>setRows(res.data));

    },[])
    return(
        <Formik
        initialValues={{title:"",price:"",pic:"",row_id:""}}
        onSubmit={(valeus,{resetForm})=>{
            //Add_produict_Api(valeus.title,valeus.price,valeus.pic,valeus.row_id);
            console.log(valeus);
            resetForm();
        }}
        >
        {formik=>(
            <Form>
                <div>
                    <label htmlFor="">title</label>
                    <Field name="title" />
                </div>
                <div>
                    <label htmlFor="">price</label>
                    <Field name="price" />
                </div>
                <div>
                    <label htmlFor="">pic</label>
                    <Field name="pic" value=".."/>
                </div>
                <div>
                    <label htmlFor="">name row</label>
                    <Field name="row_id" component="select">
                        <option defaultValue>chose...</option>
                        {rows.map((item,index)=>
                        <option key={index} value={item.id}>{item.name}</option>
                        )}
                    </Field>
                </div>
                <button type="submit">Add produict</button>
            </Form>
        )}

        </Formik>
    )
}
function Produicts(){
    const[produicts,setProdc]=useState([]);
    useEffect(()=>{
        get_prod().then((res)=>setProdc(res.data));

    },[])
    return(
        <div className="box">
            <div className="card Yitem">
                <ADD_PRODUICT/>
            </div>
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>price</td>
                    <td>pic</td>
                    <td>row_id</td>
                </tr>
            </thead>
            <tbody>
                {produicts.map((item,index)=>
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.pic}</td>
                    <td>{item.row_id}</td>
                </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}

function ADD_ROW(){
    return(
        <Formik
        initialValues={{name:'',type:'',classer:''}}
        onSubmit={(valeus,{resetForm})=>{
            Add_row_Api(valeus.name,valeus.type,valeus.classer)
            console.log(valeus);
            resetForm();
        }}
        >
        {formik=>(
            <Form onReset={formik.handleReset} onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="">name</label>
                    <Field name="name"/>
                </div>
                <div>
                    <label htmlFor="">type</label>
                    <Field name="type" component='select' >
                        <option defaultValue>chose...</option>
                        <option value="prodcuits">prodcuits</option>
                        <option value="Daily">Daily</option>
                        
                    </Field>
                </div>
                <div>
                    <label htmlFor="">type</label>
                    <Field name="classer" />
                </div>
                <button type="submit">Add</button>
            </Form>
        )}
        </Formik>
    )
}

function Rows(){
    const[rows,setRows]=useState([]);
    useEffect(()=>{
        get_rows().then((res)=>setRows(res.data));

    },[])
    return(
        <div className="box">
            <div className="card Yitem">
                <ADD_ROW/>
            </div>
        <table className="Yitem">
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td> 
                    <td>Type</td> 
                    <td>classer</td>  
                </tr>
            </thead>
            <tbody>
                {rows.map((item,index)=>
                <tr key={index} >
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.classer}</td>
                </tr>
                )}
            </tbody>
            

        </table>
        </div>
    )
    }
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { IconButton, TablePagination } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { removeProduct, setCaseProduct } from '../../../../../../redux/admin';
import { Remove_Products_API, Set_Case_Product } from '../../../../api';


const IOSSwitch = styled((props) => (
    <Switch  focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
        },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
        color:
            theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
    }));

export default function MyTable(){
    const state=useSelector((state)=>state);
    //console.log(state.ADMIN_DATA);
    const dispatch=useDispatch();

    const[DATA,SET_DATA]=useState([])
    useEffect(()=>{
        SET_DATA(state.ADMIN_DATA.Products)
    },[state])
    
    const handlChange=(position)=>{
        DATA.map((item,index)=>{
            if(item.id===position){
                if(item.case==="1"){
                    
                    dispatch(setCaseProduct({id:index,case:"0"}));
                    Set_Case_Product({ID:item.id,VALUE:"0"});
                }else{
                    dispatch(setCaseProduct({id:index,case:"1"}));
                    Set_Case_Product({ID:item.id,VALUE:"1"});

                }
            }
        })
    }
    const removeProductAt=(index,id)=>{
        dispatch(removeProduct(index));
        Remove_Products_API(id);
    }
    const[page,setpage]=useState(0);
    const[rowsPage,setRowsPage]=useState(10);
    return(
        
        <div className="admin-product-table">
        
        <table>
            <thead>
                <tr>
                    <td>لاسم</td>
                    <td>فئة</td>
                    <td>سعر</td>
                    <td>حالة النشر</td>
                    <td>اعدادت</td>
                </tr>
            </thead>
            <tbody>
                
                {DATA.map((item,index)=>(

                
                <tr key={index}>

                    <td>
                        <div className="admin-table-product-item">
                            <div>
                                <img
                                className="admin-table-product-item-img" 
                                src={`http://localhost/e-api/${item.positionPic}`} alt="" srcSet="" />
                            </div>
                        
                            <div className="admin-table-product-item-div">
                                <p className="admin-table-product-item-div-p-name">{item.title}</p>
                                <span className="admin-table-product-item-div-span-id">#{item.id}</span>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div>فئة مثل {item.categorie}</div>
                    </td>
                    <td><div>{item.buying_price} DZ</div></td>
                    <td><IOSSwitch checked={Boolean(Number(item.case))} onChange={()=>{handlChange(item.id);}}    /></td>
                    <td>
                        <div>
                            <IconButton>
                                <BorderColorIcon/>
                            </IconButton>
                            <IconButton>
                                <RemoveRedEyeIcon/>
                            </IconButton>
                            <IconButton onClick={()=>removeProductAt(index,item.id)}>
                                
                                <DeleteIcon/>
                                
                            </IconButton>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
            
                <tfoot>
                    <tr>
            <TablePagination
            count={DATA.length}
            page={page}
            onPageChange={(event, newPage)=>{setpage(newPage)}}
            rowsPerPage={rowsPage}
            onRowsPerPageChange={(e)=>{
                setRowsPage(parseInt(e.target.value,10));
                setpage(0);
            }}
            /></tr></tfoot>
        </table>
        </div>
    )
}
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { list1, list2 } from '../../../redux/headerTools';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Badge from '@mui/material/Badge';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Avatar from '@mui/material/Avatar';
import { useState } from 'react';




function ItemSearch(props){
    let navigate = useNavigate();

    return(
        
            <ListItem key={props.value} onClick={()=>{navigate(`id${props.value}`)}}>
                
                <ListItemButton>
                    <ListItemAvatar>
                    <Avatar
                        src={`image${props.value}`}
                    />
                    </ListItemAvatar>
                    <ListItemText primary={`name ${props.value}`} />
                </ListItemButton>
                
            </ListItem>

        
    )
}
function InputSearch(){
    const[A,setA]=useState(false);
    return(
        <>
        <input type="search" name="" id="" onFocus={()=>setA(!A)} />
        {A &&(

        
        <ul className='item-search'>
        {[1,0,1,0,0,11,111,1111,11111,111111].map((value,index)=>
        
            <ItemSearch value={value} key={index}/>
        
        )}
        </ul>)}
        <Button variant='contained' size='small'>ابحث</Button>
        </>
    )
}
function ListSupprot(){
    return(
    <>

        <Link to='r'>مركز المساعدة</Link>
        <Link to='r'>متابعة طلبي</Link>
        <Link to='r'>إلغاء طلبي</Link>
        <Link to='r'>سياسة الإرجاع و الاسترداد</Link>
        <Link to='ff'>خيارات الدفع</Link>

    </>)
}
function ListAccount(){
    return(
    <>
    <main>
    
    <main className='item-list'>
        <Button variant="contained">تسجيل الدخول</Button>
    </main>
    <main className='hr'>
        <hr />
        أو
        <hr />
    </main>
    
    <main className='item-list'>
        <Button variant="outlined" color="success" >انشاء حساب</Button>
    </main>
    
    </main>
    </>)
    }
function MyButton(){
    const data=useSelector((state)=>state);
    const dispatch=useDispatch();

return(
    <>

    <div onClick={()=>dispatch(list1())}>

        <ArrowBackIosNewIcon
        className={data.headerTools.list1?'arrow-icon-activie':'arrow-icon'}/>
        <p>تسجيل</p>
        <PersonOutlineIcon/>
        {data.headerTools.list1 &&(
        <div  className='list-account'>
        <ListAccount/>
        </div>)}
    </div>
    <div>
        
        <Link to={'/card'}>
            <p>سلة التسوق</p>
            <Badge color="primary" badgeContent={5} max={99}>
                <LocalGroceryStoreOutlinedIcon/>
            </Badge> 
        </Link>
    </div>
    <div  onClick={()=>dispatch(list2())}>

        <ArrowBackIosNewIcon
        className={data.headerTools.list2?'arrow-icon-activie':'arrow-icon'}/>

        <p>مساعدة</p>

        <ContactSupportOutlinedIcon/>

        {data.headerTools.list2 && (
            <main className='list-support'>
                <ListSupprot/>
            </main>
        )}
    </div>

    </>
)
}
export default function Header(){

    //console.log(data.headerTools);

    return(
        <header className='header'>
            <div className='logo div'>
                <Link to='/'>Laghouat Shop</Link>
            </div>
            <div className='inputSearch div'>
                <InputSearch/>
            </div>
            <div className='mybutton div'>
                <MyButton/>
            </div>
        </header>
    )
}
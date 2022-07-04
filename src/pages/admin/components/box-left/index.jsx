import './index.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Button, IconButton } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping,faClipboardList,faUsers,faFilterCircleDollar,
faRightFromBracket,faChartLine,faCommentDots,faGears,faScrewdriverWrench,
faGauge,faBarsStaggered
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { boxAdminLeft } from '../../../../redux/headerTools';

export default function BoxLeft(){
const[Box,setBox]=useState(true);

/////////// router 
    const navigate=useNavigate();

///////sttate  Redux
    const state=useSelector((state)=>state.headerTools);
    const dispatch=useDispatch();
//
    return(
        <div 
        onMouseMove={()=>setBox(false)}
        onMouseLeave={()=>setBox(true)}
        className={(Box && state.boxAdminLeft)?"admin-boxleft-close":"admin-boxleft-open"} >
            
            
            <div className='admin-logo'>
                {(Box && state.boxAdminLeft)?(<span></span>):(<span>Laghouat Shop</span>)}
                
                <IconButton onClick={()=>dispatch(boxAdminLeft())}>
                    <ArrowBackIosNewIcon className={!state.boxAdminLeft?"":'admin-list-arrow-activie'} />
                </IconButton>
            </div>



            <div className='admin-list'>
                <div onClick={()=>navigate('/store/admin/')} >
                    <p className='admin-list-p'>ADMIN</p>
                </div>
                <div className='admin-list-item'>
                    <Button  startIcon={<span className='admin-list-icon-btn'><FontAwesomeIcon icon={faGauge} /></span>}
                        onClick={()=>navigate('/store/admin/dashboard/')} >
                        <span  className='admin-list-title' >لوحة القيادة</span>
                    </Button>
                </div>


                <div className='admin-list-item'>
                    <Accordion className=' admin-accordion'>
                        <Button style={{width:'100%',padding:0}} >
                            <AccordionSummary style={{width:'100%'}}  expandIcon={<ArrowBackIosNewIcon/>}>
                                <Typography> 
                                    <span className='admin-list-icon'><FontAwesomeIcon icon={faBagShopping} /></span>
                                    <span className='admin-list-title' >المنتجات</span>
                                </Typography>
                            </AccordionSummary>
                        </Button>
                        <AccordionDetails>

                            <Button onClick={()=>navigate('/store/admin/products')} startIcon={<ArrowRightIcon/>}>قائمة المنتجات</Button>
                            <Button onClick={()=>navigate('/store/admin/products/create')} startIcon={<ArrowRightIcon/>}>اضافة منتج</Button>
                            <Button onClick={()=>navigate('/store/admin/categorie')}  startIcon={<ArrowRightIcon/>}>الفئات</Button>
                            <Button onClick={()=>navigate('/store/admin/categorie/create')}  startIcon={<ArrowRightIcon/>}>اضافة فئة</Button>

                        </AccordionDetails>
                    </Accordion>
                    
                </div>

                <div className='admin-list-item'>
                    <Accordion className='admin-accordion'>
                        <Button style={{width:'100%',padding:0}} >
                            <AccordionSummary style={{width:'100%'}} expandIcon={<ArrowBackIosNewIcon/>}>
                                <Typography>
                                    <span className='admin-list-icon'><FontAwesomeIcon icon={faClipboardList} /></span>
                                    <span className='admin-list-title' >الطلبات</span>
                                </Typography>
                            </AccordionSummary>
                        </Button>
                        <AccordionDetails>
                            <Button startIcon={<ArrowRightIcon/>}>لائحة الطلبات</Button>
                            <Button startIcon={<ArrowRightIcon/>}>تفاصيل الطلب</Button>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className='admin-list-item'>
                    <Accordion className='admin-accordion'>
                        <Button style={{width:'100%',padding:0}} >
                            <AccordionSummary style={{width:'100%'}} expandIcon={<ArrowBackIosNewIcon/>}>
                                <Typography>
                                    <span className='admin-list-icon'><FontAwesomeIcon icon={faUsers} /></span>
                                    <span className='admin-list-title' > المستخدمين</span>
                                </Typography>
                            </AccordionSummary>
                        </Button>
                        <AccordionDetails>
                            <Button startIcon={<ArrowRightIcon/>}>عملاء</Button>
                            <Button startIcon={<ArrowRightIcon/>}>مستخدمين الموقع</Button>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='admin-list-item'>
                    <Accordion className='admin-accordion'>
                        <Button style={{width:'100%',padding:0}} >
                            <AccordionSummary style={{width:'100%'}} expandIcon={<ArrowBackIosNewIcon/>}>
                                <Typography>
                                    <span className='admin-list-icon'><FontAwesomeIcon icon={faFilterCircleDollar} /></span>
                                    <span className='admin-list-title' > المبالغ المعادة</span>
                                </Typography>
                            </AccordionSummary>
                        </Button>
                        <AccordionDetails>
                            <Button startIcon={<ArrowRightIcon/>}>طلب ارجاع</Button>
                            <Button startIcon={<ArrowRightIcon/>}>اعدادات رد الأموال</Button>
                        </AccordionDetails>
                    </Accordion>
                </div>
                
                <div>
                    <p className='admin-list-p'>بائع</p>
                </div>
                <div className='admin-list-item'>
                    <Accordion className='admin-accordion'>
                        <Button style={{width:'100%',padding:0}} >
                            <AccordionSummary style={{width:'100%'}} expandIcon={<ArrowBackIosNewIcon/>}>
                                <Typography>
                                    <span className='admin-list-icon'><FontAwesomeIcon icon={faChartLine} /></span>
                                    <span className='admin-list-title' >أرباح</span>
                                </Typography>
                            </AccordionSummary>
                        </Button>
                        <AccordionDetails>
                            <Button startIcon={<ArrowRightIcon/>}>طلب ارجاع</Button>
                            <Button startIcon={<ArrowRightIcon/>}>اعدادات رد الأموال</Button>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className='admin-list-item'>
                    <Button startIcon={<span className='admin-list-icon-btn'><FontAwesomeIcon icon={faCommentDots} /></span>} >
                        <span  className='admin-list-title' >المراجعات</span>   
                    </Button>
                </div>

                <div className='admin-list-item' onClick={()=>navigate("/store/admin/tools-store")}>
                    <Button startIcon={<span className='admin-list-icon-btn'><FontAwesomeIcon icon={faGears} /></span>} >
                    <span  className='admin-list-title' >اعدادات المتجر</span>
                    </Button>
                </div>

                <div className='admin-list-item'>
                    <Button startIcon={<span className='admin-list-icon-btn'><FontAwesomeIcon icon={faScrewdriverWrench} /></span>} >
                    <span  className='admin-list-title' > اعدادات الموقع</span>
                    </Button>
                </div>

                <div className='admin-list-item mt-3'>
                    <Button startIcon={<span className='admin-list-icon-btn'><FontAwesomeIcon icon={faRightFromBracket} /></span>} >
                    <span  className='admin-list-title' >تسجيل الخروج</span>
                    </Button>
                </div>

            </div>

            

        </div>
    )
}
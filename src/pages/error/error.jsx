import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material";
import React from "react";
import StoreIcon from '@mui/icons-material/Store';
import { useNavigate } from "react-router-dom";

export function Error(){
    const navigate=useNavigate()
return(
    <div style={{margin:"150px"}}>
    <h1>Error 404</h1>
    <div className='admin-list-item'>
    <Accordion className=' admin-accordion'>
        <Button style={{width:'100%',padding:0}} >
            <AccordionSummary style={{width:'100%'}}   expandIcon={"<"}>
                <Typography  startIcon={<StoreIcon/>}> الطلبات</Typography>
            </AccordionSummary>
        </Button>
        <AccordionDetails>
            <Button startIcon={"."}>قائمة المنتجات</Button>
            <Button startIcon={"."}>اضافة منتج</Button>
            <Button startIcon={"."}>الفئات</Button>
        </AccordionDetails>
        </Accordion>
            </div>
    </div>
)
}
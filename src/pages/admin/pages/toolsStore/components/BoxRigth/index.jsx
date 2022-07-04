import { Accordion, AccordionDetails, AccordionSummary, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function AdminToolsStoreBoxRight(){
    const navigate=useNavigate();
    return(
        <div className="admin-tools-store-box-right">
            <div className="text-center pb-3 pt-1 ">
                <h1>box right</h1>
            </div>

            <div>
                <MenuItem onClick={()=>navigate('/store/admin/tools-store/')}>نظرة عامة للموقع</MenuItem>
                
                    <Accordion>
                        <MenuItem>
                            <AccordionSummary expandIcon={<ArrowBackIosNewIcon/>} >
                            عارض الصور
                            </AccordionSummary>
                        </MenuItem>

                        <AccordionDetails>
                            <MenuItem onClick={()=>navigate('/store/admin/tools-store/salider-pic')} >قائمة الشرائح</MenuItem>
                            <MenuItem onClick={()=>navigate('/store/admin/tools-store/salider-pic/create')}>اضافة شريحة جديد</MenuItem>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <MenuItem>
                            <AccordionSummary expandIcon={<ArrowBackIosNewIcon/>} >
                            اعدادات الأسطرا
                            </AccordionSummary>
                        </MenuItem>

                        <AccordionDetails>
                            <MenuItem onClick={()=>navigate('/store/admin/tools-store/show-rows')} >قائمة الأسطرا</MenuItem>
                            <MenuItem onClick={()=>navigate('/store/admin/tools-store/create-row')}>اضافة سطر جديد</MenuItem>
                        </AccordionDetails>
                    </Accordion>
                
                <MenuItem>اعدادات  صندوق الفئات</MenuItem>
                <MenuItem>اضافة سطر للموقع</MenuItem>
            </div>
        </div>
    )
}
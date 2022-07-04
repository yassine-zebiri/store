import { IconButton } from "@mui/material";
import AdminToolsRowsShowRowsCard from "./card";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function  AdminToolsRowsShowRows2(props){
    return(
        <div className="mt-3">
            <h1>ddd</h1>
        <div className="admin-tools-rows-cards">

            <div className="admin-tools-rows-card-add">
                <IconButton>
                    <AddCircleIcon sx={{ fontSize: 40 }}/>
                </IconButton>
                <p>اضافة</p>
            </div>
        {props.cards.map((item,index)=>(
            <div className="admin-tools-rows-card" key={index}>
                <AdminToolsRowsShowRowsCard data={item[0]}/>
            </div>
        ))}</div>
        </div>
    )
}
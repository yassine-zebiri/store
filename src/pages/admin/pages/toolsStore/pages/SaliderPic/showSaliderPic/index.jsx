import BoxLeft from "../../../../../components/box-left";
import AdminToolsStoreBoxRight from "../../../components/BoxRigth";
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { IconButton } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AdminShowSaliderPic(){
    const state=useSelector((state)=>state);
    const arr=[1,1,1,1,1,1,1,1,1];
    return(
        <div className="Admin">

        <BoxLeft/>

        <div className={state.headerTools.boxAdminLeft?"admin-boxright":"admin-boxright admin-box-margin"}>

            <AdminToolsStoreBoxRight/>


            <div className="admin-card-contant admin-tools-box-margin-right" >


            <div className="admin-tools-box-show-salider-box">
            {arr.map((item,index)=>(

            
                

                    <div  key={index}  className="admin-tools-box-show-salider-card">
                        <div  className="admin-tools-box-show-salider-card-header">

                            <div>
                                شريحة رقم : {index+1}
                            </div>
                            <div>
                                <IconButton>
                                    <BorderColorIcon sx={{color:'#8195dfdb'}}/>
                                </IconButton>
                                <IconButton>
                                    <RemoveRedEyeIcon/>
                                </IconButton>
                                <IconButton >
                                    <DeleteIcon  />
                                </IconButton>
                            </div>

                        </div>

                        <div className="admin-tools-box-show-salider-card-body">
                            <img src="/store/img/pic1.webp" alt="" />
                        </div>
                    </div>

                

            ))}


            </div>



            </div>







        </div>


    </div>
    )
}
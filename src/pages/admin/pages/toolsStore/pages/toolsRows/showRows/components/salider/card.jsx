import Rating from '@mui/material/Rating';
import { IconButton } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';


export default function AdminToolsRowsShowRowsCard(props){
    return(
        <div className="admin-tools-rows-card-item">
            <div className="admin-header">
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton>
                    <RemoveRedEyeIcon/>
                </IconButton>
                <IconButton>
                    <BorderColorIcon/>
                </IconButton>
            </div>
            <div>
                <img src={`http://localhost/e-api/${props.data.positionPic}`}/>
            </div>
            <div className="admin-tools-rows-card-item-body">
                
                
                    <div className='title'>
                        <p>{props.data.title}</p>
                    </div>
                    <div>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    </div>
                    <div className='price'>
                        <p>{props.data.buying_price} DZ </p>
                    </div>
                    
            </div>
        </div>
    )
}
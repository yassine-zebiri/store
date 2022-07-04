import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

export default function CardProduict(){
    const navigate=useNavigate();
    return(
        <div className="card-produict" onDoubleClick={()=>navigate(`card01`)}>
        <div className="card-img">
            <img src="/store/img/produicts/1.jpg" alt="" srcSet={""} />
        </div>
        <div className="card-body">

            <div className="card-body-name">
                <p>name</p>
            </div>

            <div className="card-body-rating">
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
            </div>

            <div className="card-body-price">
                <p>0000 DZ <strike>1000</strike> </p>
            </div>
        </div>
        </div>
    )
}
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Button from '@mui/material/Button';


export default function Login(){
    return(
        <div className="login">
            <div><PersonRoundedIcon 
            sx={{fontSize:60,background:'#2955c885',color:'#105',borderRadius:'50%'}} />
            </div>
            <div>
                <p dir='rtl'>مرحبا بك في Laghouat Shop</p>
            </div>
            <div>
                <Button variant='contained' size="small">انضمام</Button>
                <Button variant='outlined' size="small" >تسجيل الدخول</Button>
            </div>
        </div>
    )
}
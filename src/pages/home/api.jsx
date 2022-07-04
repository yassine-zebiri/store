import { API } from "../../redux/API";

export default function get_classes(){
    return API.post('/index.php',{
        TOKEN:"classes"
    })
}
import BoxLeft from "../../../../../components/box-left";
import { useDispatch, useSelector } from 'react-redux/es/exports';
import AdminToolsStoreBoxRight from "../../../components/BoxRigth";

export default function AdminToolsRowsCreateRow(){
    const state=useSelector((state)=>state);
    const dispatch=useDispatch();

    return(
        <div className="Admin">
        
        <BoxLeft/>
        <div className={state.headerTools.boxAdminLeft?"admin-boxright":"admin-boxright admin-box-margin"}>
                <AdminToolsStoreBoxRight/>
            <h1>contant</h1>
        </div>
        
        
        </div>
    )
}
import { Button } from "@mui/material";

export default function TableDashBorad(){
    const data=[1,1,1,1,1,1,1,1,1,1]
    return(
        <div className="admin-dashborad-table-1">
            <div className="admin-dashborad-table-1-header">
                <p>المشتريات الأخيرة</p>
                <Button variant="outlined">جميع الطلبات</Button>
            </div>
            <div >
                <table className="admin-dashborad-table-1-table">
                    <thead>
                        <tr>
                            <td>رقم التعريف الخاص بالطلب</td>
                            <td>منتج</td>
                            <td>سعر</td>
                            <td>تاريخ</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,index)=>(
                        <tr key={index}>
                            <td>#6d3wedo9</td>
                            <td>Aavic Headphone</td>
                            <td>152.25 DZ</td>
                            <td>22/06/2022</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
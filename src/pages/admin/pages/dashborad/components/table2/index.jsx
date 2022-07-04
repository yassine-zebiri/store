import { Button } from "@mui/material";

export default function TableDashBorad2(){
    const data=[1,1,1,1,1,1]
    return(
        <div className="admin-dashborad-table-1">
            <div className="admin-dashborad-table-1-header">
                <p>أحدث التعليقات</p>
                <Button variant="outlined">الرؤى</Button>
            </div>
            <div>
                <table className="admin-dashborad-table-1-table">
                    <thead >
                        <tr>
                            <td>مستخدم</td>
                            <td>التعليق</td>
                            <td>المنتج</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,index)=>(

                        <tr key={index}>
                            <td>yassine zebiri</td>
                            <td> أحذية رياضية خفيفة إلى حد ما. جيد للمشي.</td>
                            <td>
                                <div >
                                    <img src="/store/img/produicts/1.jpg" alt="" />
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
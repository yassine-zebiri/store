import BoxLeft from "../../components/box-left";
import { useDispatch, useSelector } from 'react-redux/es/exports';
import AdminHeader from "../../components/header";
import './index.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


import ApexChart from "./components/h";
import ApexChartLine from "./components/Line";
import PieApex from "./components/pieApex";
import PieApex2 from "./components/pieApex2";
import { Avatar, IconButton } from "@mui/material";
import { zero } from "../../../home/components/salider-daily/cardDaily";

import TableDashBorad from "./components/table";
import TableDashBorad2 from "./components/table2";









export default function Dashboard(){
    const state=useSelector((state)=>state);
    
    

    const date=new Date();

    const mydate=`${zero(date.getDate())}/${zero(date.getMonth()+1)}/${date.getFullYear()}`;
    
    
    

    return(
    <div className="Admin">
        
        <BoxLeft/>
        <div className={state.headerTools.boxAdminLeft?"admin-boxright":"admin-boxright admin-box-margin"}>
            <AdminHeader/>
            <div className="admin-card-contant">
                <div className="admin-dashborad" dir="rtl">

                    <div className="item-5">
                        <div className="card-1" dir="rtl">
                            <div className="p-2 admin-dashborad-item-avetar">
                                <h5>تاريخ اليوم : {mydate} </h5>
                                <h3 className="mt-2">1000</h3>
                                <p className="">زيارات اليومية لموقع</p>
                                <h3 className="mt-2 price">
                                    <div dir="ltr">40000 DZ</div>
                                </h3>
                                <p className="">اجمالي المبيعات اليومية</p>
                                <div className="admin-dashborad-avetar">
                                    <div className="admin-dashborad-avetar-title">
                                        <p>مرحبًا بعودتك  👋</p>
                                    </div>
                                    <div className="admin-dashborad-avetar-icon">
                                        <IconButton>
                                            <Avatar/>
                                        </IconButton>
                                        <p className="text-center mt-0">yassine zebiri</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-5">
                        <div className="item-5 card-2">
                            <div className="p-1 item-small">
                            <h5>عدد مستخدمين الموقع</h5>
                            <h3>1000</h3>
                            <div className="item-small-nbr">
                                <p>الزيادات الاسبوعية</p>
                                <span className="good">
                                        <ArrowRightIcon className="icon"/>
                                        <p>10.25٪</p>
                                    </span>
                            </div>
                            </div>
                        </div>

                        <div className="item-5 card-2">
                            <div className="p-1 item-small">
                            <h5>عدد الطلببات</h5>
                            <h3>10</h3>
                            <div className="item-small-nbr">
                                <p>الزيادات الاسبوعية</p>
                                <span className="bad">
                                        <ArrowRightIcon className="icon"/>
                                        <p>1.1%</p>
                                </span>
                            </div>
                            </div>
                        </div>

                        <div className="item-5 card-2">
                            <div className="p-1 item-small">
                                <h5>عدد زبائن الجدد</h5>
                                <h3>10</h3>
                                <div className="item-small-nbr">
                                    <p>الزيادات الاسبوعية</p>
                                    <span className="good">
                                        <ArrowRightIcon className="icon"/>
                                        <p>1.1%</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="item-5 card-2">
                            <div className="p-1 item-small">
                                <h5>عدد الطلببات التي تم ارجاعها</h5>
                                <h3>10</h3>
                                <div className="item-small-nbr">
                                    <p>الزيادات الاسبوعية</p>
                                    <span className="good">
                                        <ArrowRightIcon className="icon"/>
                                        <p>100%</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-10">
                        <div className="card-1">
                        <div className="">
                            
                            <div className="chartjs p-1"   >
                            <ApexChartLine/>
                            </div>
                        </div>
                            
                        </div>
                    </div>

                    <div className="item-10">

                    <div  className="item-3">
                        <div className=""  >
                            <div className="charts">
                                <PieApex2/>
                                
                            </div><p className="chart-title">الفئات الأكثر تحقيق للرابح خلال الأسبوع</p>
                        </div>

                    </div>

                    <div  className="item-3">
                        <div className="">
                            <div className="charts" >
                                <PieApex/>
                                
                            </div><p className="chart-title">الفئات العمرية للعملاء و مستخدمين</p>
                        </div>
                    </div>

                    <div  className="item-3">
                        <div className="">
                            <div >
                                <p className="m-0">تحليلات </p>
                                <ApexChart/>
                            </div>
                        </div>
                    </div>


                    </div>

                    <div className="item-6">
                        <TableDashBorad/>
                    </div>

                    <div className="item-3">
                        <TableDashBorad2/>
                    </div>

                    



                    
                   

                   




                </div>
            </div>
            
        </div>
    </div>
)
}
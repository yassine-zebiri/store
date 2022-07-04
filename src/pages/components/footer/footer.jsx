import React from "react";
import { Link } from "react-router-dom";
import './style.css';

export default function Footer(params){
return(
<div className="Y-footer">

<div className="Y-footer-col mt-5">

<div className="Y-footer-box">
<span>خدمة الزبائن</span>
<ul>
    <li><Link to="f">مركز المساعدة</Link></li>
    <li><Link to="f">نقاط الترحيل لدينا</Link></li>
    <li><Link to="f">متاجرنا الرسمية</Link></li>
</ul>
</div>
<div className="Y-footer-box">
<span>كل ما يتعلق بنا</span>
<ul>
    <li><Link to="f">من نحن</Link></li>
    <li><Link to="f">وظائف</Link></li>
    <li><Link to="f">إشعار الخصوصية وملفات تعريف الارتباط</Link></li>
    <li><Link to='f'>شروط الخدمة</Link></li>
</ul>
</div>


<div className="Y-footer-box">
<span>خدمات الأعمال لدينا</span>
<ul>
    <li><Link to="f">الخدمة اللوجستية</Link></li>
    <li><Link to="f">ضمان التجارة</Link></li>
    <li><Link to="f">خدمات مراقبة الإنتاج والتفتيش</Link></li>
    <li><Link to='f'>هوية العمل</Link></li>
</ul>
</div>

<div className="Y-footer-box">
<span>خيارات الدفع</span>
<ul>
    <li><Link to="f"><img src="/reactstor2/img/outline_add_card_white_48dp.png" alt=""  /></Link></li>
</ul>
</div>
</div>

<div className="Y-footer-col mt-2">

<div className="Y-footer-box-2">

<div className="Y-footer-box-2-1">
<div className="Y-footer-box-2-1-icon">
    <div className="Y-footer-box-2-1-icon-img"></div>
</div>
    <div className="Y-footer-box-2-1-text">
        <div className="Y-footer-box-2-1-title">تنزيل تطبيق مجاني</div>
        <div className="Y-footer-box-2-1-subtitle">احصل علي العديد من العروض الحصرية</div>
    </div>
</div>

<div className="Y-footer-box-2-2 mt-3">

<Link to="df" className="Y-footer-box-2-2-b">
<img className="" src="/reactstor2/img/icon-and.png" alt=""  />
</Link>

<Link to="zdf" className="Y-footer-box-2-2-b">
<img className="" src="/reactstor2/img/icon-iso.png" alt=""  />
</Link>


</div>

</div>

<div className="Y-footer-box-2">


<div className="Y-footer-box-2-1-title">تابعنا :</div>

<ul className="Y-footer-box-2-icon-s mt-3">

<li><Link to='ff'><img src="/reactstor2/img/icon-facebook.png" alt="" /></Link></li>
<li><Link to='ff'><img src="/reactstor2/img/icon-twitter.png" alt="" /></Link></li>
<li><Link to='ff'><img src="/reactstor2/img/icon-yt.png" alt="" /></Link></li>
<li><Link to='ff'><img src="/reactstor2/img/icon-in.png" alt="" /></Link></li>

</ul>
</div>

</div>

<div className="Y-footer-col mt-1 mb-5">

<div  className="Y-footer-box-3">
<div className="mt-3">
<span>  كل الحقوق محفوظة :</span>
<span>
<span> laghouat shop </span>
<span> © 2022 </span>
</span>
</div>
</div>

</div>

</div>
)
}
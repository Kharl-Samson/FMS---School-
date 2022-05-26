import React, { useEffect } from 'react';
import '../css/pageloader.css';
import img1 from "../images/loader/1.jpg";
import img2 from "../images/loader/2.jpg";
import img3 from "../images/loader/3.jpg";
import img4 from "../images/loader/4.jpg";
import img5 from "../images/loader/5.jpg";
import img6 from "../images/loader/6.jpg";
import img7 from "../images/loader/7.jpg";
import img8 from "../images/loader/8.jpg";
import img9 from "../images/loader/9.jpg";
import img11 from "../images/loader/11.jpg";
import img12 from "../images/loader/12.jpg";
import img13 from "../images/loader/13.jpg";
import img14 from "../images/loader/14.jpg";
import img15 from "../images/loader/15.jpg";
import CICT_Logo from "../images/login/cict_logo.png";
import img16 from "../images/loader/16.png";

export default function PageLoader(){


    setTimeout(function () {
        document.getElementsByClassName("column1")[0].style.marginBottom="0";
        document.getElementsByClassName("column2")[0].style.marginTop="0";
        document.getElementsByClassName("column3")[0].style.marginBottom="0";
        document.getElementsByClassName("column4")[0].style.marginTop="0";
        document.getElementsByClassName("column5")[0].style.marginBottom="0";
        document.getElementById("right_text_loader").style.opacity="100%";
    }, 100);

return(
    <div className="pageLoader_container" id="pageLoader_container"> 

        <div className="logo_container">
            <div className="box_content"
                style={{
                    backgroundImage: `url(${img15})`,
            }}>
                    <img src={CICT_Logo}/>
                    <img src={img16} id="right_text_loader"/>
            </div>
        </div>

        <div className="page_container">
            <div className="column1">
                <div className="img1"><img src={img1} className="loader_img"/></div>
                <div className="img2"><img src={img2} className="loader_img"/></div>
                <div className="img3"><img src={img3} className="loader_img"/></div>
            </div>
            <div className="column2">
                <div className="img4"><img src={img4} className="loader_img"/></div>
                <div className="img5"><img src={img5} className="loader_img"/></div>
                <div className="img6"><img src={img6} className="loader_img"/></div>
            </div>
            <div className="column3">
                <div className="img7"><img src={img7} className="loader_img"/></div>
                <div className="img8"><img src={img8} className="loader_img"/></div>
                <div className="img9"><img src={img9} className="loader_img"/></div>
            </div>
            <div className="column4">
                <div className="img10"><img src={img1} className="loader_img"/></div>
                <div className="img11"><img src={img11} className="loader_img"/></div>
                <div className="img12"><img src={img12} className="loader_img"/></div>
            </div>
            <div className="column5">
                <div className="img13"><img src={img13} className="loader_img"/></div>
                <div className="img13"><img src={img14} className="loader_img"/></div>
            </div>
        </div>
    </div>
)
}
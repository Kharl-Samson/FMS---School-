import React from "react";
import moment from 'moment';
import slider1 from '../images/image_slider1.png';
import slider2 from '../images/image_slider2.png';
import slider3   from '../images/image_slider3.png';
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from "react";
import axios from "axios";

export default function WeatherAndBanner(){

  //Image slider autoplay function
  var myIndex = 0;
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "flex";  
    setTimeout(carousel, 6000); // Change image every 6 seconds
  }

  setTimeout(function(){
    carousel();
  },10);

   let weather = {
       apiKey: "dadee94a86d93919d257e4735ca6aa92",
       fetchWeather: function () {
         fetch(
           "https://api.openweathermap.org/data/2.5/weather?lat=14.874870&lon=120.823967&appid=" +
             this.apiKey
         )
           .then((response) => {
             if (!response.ok) {
               alert("No weather found.");
               throw new Error("No weather found.");
             }
             return response.json();
           })
           .then((data) => this.displayWeather(data));
       },
       displayWeather: function (data) {
         const { icon, description } = data.weather[0];
         const { temp } = data.main;
         document.querySelector(".weather_icon").src ="https://openweathermap.org/img/wn/" + icon + "@4x.png";
         document.getElementsByClassName("weather_description")[1].innerText = description;
         var real_temp = temp - 273.15;
         real_temp = parseInt(real_temp);
         document.getElementsByClassName("weather_temperature")[1].innerText = real_temp + "°C";
       }
     };

     weather.fetchWeather();

     function goToweathersite(){
       window.open('https://weather.com/en-PH/weather/today/l/RPXX0017:1:RP?Goto=Redirected', '_blank');
     }
          
         
   //date today
   var date_today =  moment().format('dddd, h:mm A');
   //for getting the initial name in avatar
   let firstName = localStorage.getItem('name').split(' ')[0]


   //Skeleton show
   setTimeout(function(){
      var elements = document.getElementsByClassName("skeleton_done");
      for (var i = 0, len = elements.length; i < len; i++) {
         elements[i].style.display="block"
     }
     var elements1 = document.getElementsByClassName("skeleton_show");
     for (var i = 0, len = elements1.length; i < len; i++) {
        elements1[i].style.display="none"
      }
   },1000);

  //Hook for getting web content
  const [getWebContent, setWebContent] = useState([]);
  const loadWebContent = async () => {
    const result = await axios.get("http://localhost/fms/getWebContent.php");
    setWebContent(result.data.phpresult);
  };
  useEffect(() => {
    loadWebContent();
  }, []);
  const webC_Name = getWebContent.map((res) => {
      return (
        <p style={{fontSize : "1.7rem"}}>{res.name}</p>
      );
  });
  const webC_Vision = getWebContent.map((res) => {
    return (
      <p>{res.vision}</p>
    );
});

const webC_Mission = getWebContent.map((res) => {
  return (
    <p>{res.mission}</p>
  );
});


const webC_abbr = getWebContent.map((res) => {
  return (
    <span>{res.abbreviation}</span>
  );
});


    return(
        <div className='top_dashboard_content minimizer_adjuster'>

            <div className='weather_container' onClick={goToweathersite}>
                <div className='left'>
                    <Skeleton className='weather_temperature skeleton_show' animation="wave"/>
                    <Skeleton className='weather_description skeleton_show' animation="wave"/>
                    <Skeleton className="date_today skeleton_show" animation="wave"/>
                    <Skeleton className='goodmorning skeleton_show' animation="wave"/>
                    <Skeleton className='name skeleton_show' animation="wave"/>
                    
                    <p className='weather_temperature skeleton_done' style={{ color: "#ffaa28"}}></p>
                    <p className='weather_description skeleton_done' style={{textTransform: "capitalize", color: "#d9a047", fontWeight: "600"}}></p>
                    <p style={{marginBottom: "1vh"}} className="date_today skeleton_done">{date_today}</p>
                    <p className='goodmorning skeleton_done'>Welcome Back,</p>
                    <p className='name skeleton_done'>{firstName}!</p>
                </div>
                <div className='right'>
                    <img src='' className='weather_icon skeleton_done'/>
                </div>      
            </div>

            <div className="slideshow-container slideshow-container1 mySlides" style={{ backgroundImage: `url(${slider1})`}}>
                {webC_Name}
                <div className='line'>
                    <div style={{backgroundColor: "#ffff"}}></div> <div></div> <div></div>
                </div>
            </div>

            <div className="slideshow-container slideshow-container2 mySlides" style={{ backgroundImage: `url(${slider2})`}}>
                <p>{webC_abbr} Vision</p>
                {webC_Vision}
                <div className='line'>
                    <div></div> <div style={{backgroundColor: "#ffff"}}></div> <div></div>
                </div>
            </div>

            <div className="slideshow-container slideshow-container3 mySlides" style={{ backgroundImage: `url(${slider3})`}}>
                <p>{webC_abbr} Mission</p>
                {webC_Mission}
            <div className='line'>
                    <div></div> <div></div> <div  style={{backgroundColor: "#ffff"}}></div>
                </div>
            </div>
 
        </div>
    )
}
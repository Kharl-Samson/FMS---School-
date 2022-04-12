import React from "react";
import moment from 'moment';
import slider1 from '../images/image_slider1.png';
import slider2 from '../images/image_slider2.png';
import slider3   from '../images/image_slider3.png';
import slider_transitionDashboard from '../functions/SliderDashboard'

export default function WeatherAndBanner(){
     //Slider transition
     slider_transitionDashboard();
     setInterval(function(){
       slider_transitionDashboard();
     },15000);

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
         document.querySelector(".weather_description").innerText = description;
         var real_temp = temp - 273.15;
         real_temp = parseInt(real_temp);
         document.querySelector(".weather_temperature").innerText = real_temp + "°C";
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

    return(
        <div className='top_dashboard_content minimizer_adjuster'>

            <div className='weather_container' onClick={goToweathersite}>
                <div className='left'>
                    <p className='weather_temperature' style={{ color: "#ffaa28"}}></p>
                    <p className='weather_description' style={{textTransform: "capitalize", color: "#d9a047", fontWeight: "600"}}></p>
                    <p style={{marginBottom: "1vh"}} className="date_today">{date_today}</p>
                    <p className='goodmorning'>Welcome Back,</p>
                    <p className='name'>{firstName}!</p>
                </div>
                <div className='right'>
                    <img src='' className='weather_icon'/>
                </div>      
            </div>

            <div className="slideshow-container slideshow-container1" style={{ backgroundImage: `url(${slider1})`}}>
                <p style={{fontSize : "1.7rem"}}>College of Information and Communications Technology</p>
                <div className='line'>
                    <div style={{backgroundColor: "#ffff"}}></div> <div></div> <div></div>
                </div>
            </div>

            <div className="slideshow-container slideshow-container2" style={{ backgroundImage: `url(${slider2})`}}>
                <p>CICT Vision</p>
                <p>Bulacan State University exists to provide highly competent, ethical and service-oriented professionals that contribute to the sustainable socio-economic growth and development of the nation.</p>
                <div className='line'>
                    <div></div> <div style={{backgroundColor: "#ffff"}}></div> <div></div>
                </div>
            </div>

            <div className="slideshow-container slideshow-container3" style={{ backgroundImage: `url(${slider3})`}}>
                <p>CICT Mission</p>
                <p>Bulacan State University is a progressive knowledge-generating institution globally recognized for excellent instruction,    pioneering research, and responsive community engagements.</p>
            <div className='line'>
                    <div></div> <div></div> <div  style={{backgroundColor: "#ffff"}}></div>
                </div>
            </div>
 
        </div>
    )
}
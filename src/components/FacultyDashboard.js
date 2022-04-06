import React from 'react';
import '../css/dashboard.css';
import LeftNavbarFaculty from '../navbarsUI/LeftNavbarFaculty';
import NavbarSizer from '../navbarsUI/NavbarSizer';
import RightNavbar from '../navbarsUI/RightNavbar';
import moment from 'moment';
import slider from '../images/image_slider.png';

export default function FacultyDashboard(){

   
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

    return (
        <div className="dashboard_container">
            <LeftNavbarFaculty/>  

            <div className="dashboard_content">
            <NavbarSizer/>

                <div className='top_dashboard_content minimizer_adjuster'>
                    <div className='weather_container' onClick={goToweathersite}>
         
                        <div className='left'>
                            <p className='weather_temperature' style={{ color: "#ffaa28"}}></p>
                            <p className='weather_description' style={{textTransform: "capitalize", color: "#d9a047", fontWeight: "600"}}></p>
                            <p style={{marginBottom: "1vh"}} className="date_today">{date_today}</p>
                 
                            <p className='goodmorning'>Good Morning,</p>
                            <p className='name'>{firstName}!</p>
                        </div>
 

                        <div className='right'>
                            <img src='' className='weather_icon'/>
                        </div>      
                      
                    </div>

                    <div className="slideshow-container">
                      <div className="slideshow-container" style={{ backgroundImage: `url(${slider})`}}> </div>
                    </div>           
        
                </div>


            </div>
            
            <RightNavbar/>

        </div>
    )
}
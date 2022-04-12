import DarkThemeBG from '../images/dark_themeBG.png';
import LightThemeBG from '../images/light_themeBG.png';
   var theme_ctr = "light";
    function theme_toggle(){
            if(theme_ctr === "light"){//togle light mode
                document.getElementById("circle").style.marginLeft = "0";
                document.getElementById("circle").style.backgroundColor = "#ffff";
                document.getElementById("theme_toggle").style.backgroundImage = `url(${DarkThemeBG})`;
                theme_ctr = "dark";
            }
            else{//toggle dark mode
                document.getElementById("circle").style.marginLeft = "3.5vh";
                document.getElementById("circle").style.backgroundColor = "#FFE879";
                document.getElementById("theme_toggle").style.backgroundImage = `url(${LightThemeBG})`;
                theme_ctr = "light";
            }
    }

export default theme_toggle;


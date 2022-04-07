function slider_transitionDashboard(){
    setTimeout(function(){
      document.getElementsByClassName("slideshow-container1")[0].style.display = "flex";
      document.getElementsByClassName("slideshow-container2")[0].style.display = "none";
      document.getElementsByClassName("slideshow-container3")[0].style.display = "none";
    },0);
    setTimeout(function(){
      document.getElementsByClassName("slideshow-container1")[0].style.display = "none";
      document.getElementsByClassName("slideshow-container2")[0].style.display = "flex";
      document.getElementsByClassName("slideshow-container3")[0].style.display = "none";
    },5000);
    setTimeout(function(){
      document.getElementsByClassName("slideshow-container1")[0].style.display = "none";
      document.getElementsByClassName("slideshow-container2")[0].style.display = "none";
      document.getElementsByClassName("slideshow-container3")[0].style.display = "flex";
    },10000);
}

export default slider_transitionDashboard;
  //navbar toggler
  var rightnav_toggler = "open";
  const mediaQuery = window.matchMedia('(max-width: 850px)');
    
    if (mediaQuery.matches) {
        rightnav_toggler = "close";
    }
    else{
       rightnav_toggler = "open";
    }



  function ToggleRightNav(){
      if(rightnav_toggler === "open"){ // Para maclose yung right nav
        document.getElementsByClassName('right_navbar_container')[0].style.marginRight = "-50%";
        document.getElementsByClassName('right_nav_sizer')[0].style.backgroundColor = "#ffff";
        document.getElementsByClassName('right_nav_sizer')[0].style.width = "65px";
        document.getElementsByClassName('right_nav_sizer')[0].title = "Maximize"
        document.getElementsByClassName('avatar_navbar_sizer')[0].style.display = "flex"
        document.getElementsByClassName('span1_right_nav')[0].style.display = "none";
        document.getElementsByClassName('span2_right_nav')[0].style.display = "flex";
        document.getElementsByClassName('span2_right_nav')[0].style.color = "orange";

                
        document.getElementsByClassName('right_nav_sizer')[0].style.display = "none";
        setTimeout(function(){
            document.getElementsByClassName('right_navbar_container')[0].style.display = "none";
            document.getElementsByClassName('right_nav_sizer')[0].style.display = "flex";
        },500);
        rightnav_toggler = "close";
      }
      else{ // Para maopen
        document.getElementsByClassName('right_nav_sizer')[0].style.display = "flex";
        document.getElementsByClassName('right_navbar_container')[0].style.display = "inline-block";
        document.getElementsByClassName('right_nav_sizer')[0].style.width = "45px";
        document.getElementsByClassName('right_nav_sizer')[0].title = "Minimize"
        document.getElementsByClassName('avatar_navbar_sizer')[0].style.display = "none"
        document.getElementsByClassName('span1_right_nav')[0].style.display = "flex";
        document.getElementsByClassName('span2_right_nav')[0].style.display = "none";
        document.getElementsByClassName('right_nav_sizer')[0].style.backgroundColor = "#ffaa28";
        document.getElementsByClassName('span2_right_nav')[0].style.color = "black";

        setTimeout(function(){
          document.getElementsByClassName('right_navbar_container')[0].style.marginRight = "0%";
      },100);
        rightnav_toggler = "open";
      }
  }

export default ToggleRightNav;
var left_navbar_status = "open";

function Left_navToggler(){
    if(left_navbar_status === "open"){ //Closing left nav
        left_navbar_status = "close";
        document.getElementsByClassName('span1_left_nav')[0].style.display = "none";
        document.getElementsByClassName('span2_left_nav')[0].style.display = "flex";
        document.getElementsByClassName('left_nav_sizer')[0].title = "Maximize";
        var left_nav_minimize = document.getElementsByClassName('left_nav_minimize');
        for(var i=0; i< left_nav_minimize.length; i++){
            left_nav_minimize[i].style.display = "none";
        }
        var navlink_container = document.getElementsByClassName('navlink_container');
        for(var i=0; i< navlink_container.length; i++){
            navlink_container[i].style.justifyContent = "center";
        }
        var left_nav_minimize_img = document.getElementsByClassName('left_nav_minimize_img');
        for(var i=0; i< left_nav_minimize_img.length; i++){
            left_nav_minimize_img[i].style.marginLeft = "0%";
        }
    }
    else{
        left_navbar_status = "open";
        document.getElementsByClassName('span1_left_nav')[0].style.display = "flex";
        document.getElementsByClassName('span2_left_nav')[0].style.display = "none";
        document.getElementsByClassName('left_nav_sizer')[0].title = "Minimize";
        var left_nav_minimize = document.getElementsByClassName('left_nav_minimize');
        for(var i=0; i< left_nav_minimize.length; i++){
            left_nav_minimize[i].style.display = "flex";
        }
        var navlink_container = document.getElementsByClassName('navlink_container');
        for(var i=0; i< navlink_container.length; i++){
            navlink_container[i].style.justifyContent = "flex-start";
        }
        var left_nav_minimize_img = document.getElementsByClassName('left_nav_minimize_img');
        for(var i=0; i< left_nav_minimize_img.length; i++){
            left_nav_minimize_img[i].style.marginLeft = "15%";
        }
    }
}

export default Left_navToggler;
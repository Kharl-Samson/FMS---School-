var toggleLeftStatus = "open";
function ToggleLeftNav(){
    if(toggleLeftStatus === "open"){
        document.getElementsByClassName('left_nav_sizer')[0].title = "Maximize"
        document.getElementsByClassName('span2_left_nav')[0].style.display = "flex";
        document.getElementsByClassName('span1_left_nav')[0].style.display = "none";
        var elements = document.getElementsByClassName("left_nav_minimize");
        for (var i = 0, len = elements.length; i < len; i++) {
                elements[i].style.display = "none";
        }
        var elements1 = document.getElementsByClassName("navlink_container");
        for (var i = 0, len = elements1.length; i < len; i++) {
                elements1[i].style.justifyContent = "center";
        }
        var elements3 = document.getElementsByClassName("left_nav_minimize_img");
        for (var i = 0, len = elements3.length; i < len; i++) {
                elements3[i].style.marginLeft = "0%";
        }
        toggleLeftStatus = "close";
    }
    else{
        document.getElementsByClassName('left_nav_sizer')[0].title = "Minimize"
        document.getElementsByClassName('span2_left_nav')[0].style.display = "none";
        document.getElementsByClassName('span1_left_nav')[0].style.display = "flex";
        var elements = document.getElementsByClassName("left_nav_minimize");
        for (var i = 0, len = elements.length; i < len; i++) {
                elements[i].style.display = "flex";
        }
        var elements1 = document.getElementsByClassName("navlink_container");
        for (var i = 0, len = elements1.length; i < len; i++) {
                elements1[i].style.justifyContent = "flex-start";
        }
        var elements3 = document.getElementsByClassName("left_nav_minimize_img");
        for (var i = 0, len = elements3.length; i < len; i++) {
                elements3[i].style.marginLeft = "15%";
        }
        toggleLeftStatus = "open";
    }
}

export default ToggleLeftNav;
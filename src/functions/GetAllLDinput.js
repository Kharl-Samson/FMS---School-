function getAllLDinput(event){
    var LD_title_handler="", LD_dateFrom_handler="", LD_dateTo_handler="", LD_hours_handler="", LD_type_handler="", LD_sponsored_handler="",
    LD_coverage_handler="",LD_category_handler="",LD_img_handler="";

    var titleLD = document.getElementsByName("titleLD[]");
    var dateFromLD = document.getElementsByName("dateFromLD[]");
    var dateToLD = document.getElementsByName("dateToLD[]");
    var hoursLD = document.getElementsByName("hoursLD[]");
    var typeLD = document.getElementsByName("typeLD[]");
    var sponsoredLD = document.getElementsByName("sponsoredLD[]");
    var coverageLD = document.getElementsByName("coverageLD[]");
    var categoryLD = document.getElementsByName("categoryLD[]");
    var imgLD = document.getElementsByName("imgLD[]");
        
        for(var i = 0; i < titleLD.length; i++) {
            
            if(imgLD[i].files.length === 0){
                LD_title_handler+=titleLD[i].value+" |:| ";
                LD_dateFrom_handler+=dateFromLD[i].value+" |:| ";
                LD_dateTo_handler+=dateToLD[i].value+" |:| ";
                LD_hours_handler+=hoursLD[i].value+" |:| ";
                LD_type_handler+=typeLD[i].value+" |:| ";
                LD_sponsored_handler+=sponsoredLD[i].value+" |:| ";
                LD_coverage_handler+=coverageLD[i].value+" |:| ";
                LD_category_handler+=categoryLD[i].value+" |:| ";
                LD_img_handler+=" |:| ";
            }
            else{
                LD_title_handler+=titleLD[i].value+" |:| ";
                LD_dateFrom_handler+=dateFromLD[i].value+" |:| ";
                LD_dateTo_handler+=dateToLD[i].value+" |:| ";
                LD_hours_handler+=hoursLD[i].value+" |:| ";
                LD_type_handler+=typeLD[i].value+" |:| ";
                LD_sponsored_handler+=sponsoredLD[i].value+" |:| ";
                LD_coverage_handler+=coverageLD[i].value+" |:| ";
                LD_category_handler+=categoryLD[i].value+" |:| ";
                LD_img_handler+=imgLD[i].files[0].name+" |:| ";
            }

            
        }

    

    document.getElementById("LD_title_handler").value = LD_title_handler;
    document.getElementById("LD_dateFrom_handler").value = LD_dateFrom_handler;
    document.getElementById("LD_dateTo_handler").value = LD_dateTo_handler;
    document.getElementById("LD_hours_handler").value = LD_hours_handler;
    document.getElementById("LD_type_handler").value = LD_type_handler;
    document.getElementById("LD_sponsored_handler").value = LD_sponsored_handler;
    document.getElementById("LD_coverage_handler").value = LD_coverage_handler;
    document.getElementById("LD_category_handler").value = LD_category_handler;
    document.getElementById("LD_img_handler").value = LD_img_handler;
}

export default getAllLDinput;
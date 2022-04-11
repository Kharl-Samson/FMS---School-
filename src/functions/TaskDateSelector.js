function taskDateClick(params){
    if (params === "date1"){
      document.getElementsByClassName("task1_display")[0].style.display = "block";
      document.getElementsByClassName("task2_display")[0].style.display = "none";
      document.getElementsByClassName("task3_display")[0].style.display = "none";
      document.getElementsByClassName("task4_display")[0].style.display = "none";
      document.getElementsByClassName("task5_display")[0].style.display = "none";
      document.getElementsByClassName("task6_display")[0].style.display = "none";
      document.getElementsByClassName("task7_display")[0].style.display = "none";

      document.getElementsByClassName(params)[0].style.backgroundColor = "#ffff";
      document.getElementsByClassName("date2")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date3")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date4")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date5")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date6")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date7")[0].style.backgroundColor = "transparent";

      let temp = document.getElementsByClassName("task1_display")[0].innerHTML;
      if (temp.indexOf('-') > -1){
        //pag may laman
      }
      else{
        document.getElementsByClassName("empty_data_small1")[0].style.display = "flex"
      }
    
    }
    else if (params === "date2"){
      document.getElementsByClassName("task1_display")[0].style.display = "none";
      document.getElementsByClassName("task2_display")[0].style.display = "block";
      document.getElementsByClassName("task3_display")[0].style.display = "none";
      document.getElementsByClassName("task4_display")[0].style.display = "none";
      document.getElementsByClassName("task5_display")[0].style.display = "none";
      document.getElementsByClassName("task6_display")[0].style.display = "none";
      document.getElementsByClassName("task7_display")[0].style.display = "none";

      document.getElementsByClassName(params)[0].style.backgroundColor = "#ffff";
      document.getElementsByClassName("date1")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date3")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date4")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date5")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date6")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date7")[0].style.backgroundColor = "transparent";

      let temp = document.getElementsByClassName("task2_display")[0].innerHTML;
      if (temp.indexOf('-') > -1){
        //pag may laman
      }
      else{
        document.getElementsByClassName("empty_data_small2")[0].style.display = "flex"
      }
    
      
    }
    else if (params === "date3"){
      document.getElementsByClassName("task1_display")[0].style.display = "none";
      document.getElementsByClassName("task2_display")[0].style.display = "none";
      document.getElementsByClassName("task3_display")[0].style.display =  "block";
      document.getElementsByClassName("task4_display")[0].style.display = "none";
      document.getElementsByClassName("task5_display")[0].style.display = "none";
      document.getElementsByClassName("task6_display")[0].style.display = "none";
      document.getElementsByClassName("task7_display")[0].style.display = "none";

      document.getElementsByClassName(params)[0].style.backgroundColor = "#ffff";
      document.getElementsByClassName("date1")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date2")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date4")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date5")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date6")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date7")[0].style.backgroundColor = "transparent";

      let temp = document.getElementsByClassName("task3_display")[0].innerHTML;
      if (temp.indexOf('-') > -1){
        //pag may laman
      }
      else{
        document.getElementsByClassName("empty_data_small3")[0].style.display = "flex"
      }
    
    }
    else if (params === "date_today"){
      document.getElementsByClassName("task1_display")[0].style.display = "none";
      document.getElementsByClassName("task2_display")[0].style.display = "none";
      document.getElementsByClassName("task3_display")[0].style.display = "none";
      document.getElementsByClassName("task4_display")[0].style.display = "block";
      document.getElementsByClassName("task5_display")[0].style.display = "none";
      document.getElementsByClassName("task6_display")[0].style.display = "none";
      document.getElementsByClassName("task7_display")[0].style.display = "none";

      document.getElementsByClassName("date4")[0].style.backgroundColor = "#ffff";
      document.getElementsByClassName("date1")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date2")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date3")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date5")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date6")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date7")[0].style.backgroundColor = "transparent";

      let temp = document.getElementsByClassName("task4_display")[0].innerHTML;
      if (temp.indexOf('-') > -1){
        //pag may laman
      }
      else{
        document.getElementsByClassName("empty_data_small4")[0].style.display = "flex"
      }
    
    }
    else if (params === "date5"){
      document.getElementsByClassName("task1_display")[0].style.display = "none";
      document.getElementsByClassName("task2_display")[0].style.display = "none";
      document.getElementsByClassName("task3_display")[0].style.display = "none";
      document.getElementsByClassName("task4_display")[0].style.display = "none";
      document.getElementsByClassName("task5_display")[0].style.display = "block";
      document.getElementsByClassName("task6_display")[0].style.display = "none";
      document.getElementsByClassName("task7_display")[0].style.display = "none";

      document.getElementsByClassName(params)[0].style.backgroundColor = "#ffff";
      document.getElementsByClassName("date1")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date2")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date3")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date4")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date6")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date7")[0].style.backgroundColor = "transparent";

      let temp = document.getElementsByClassName("task5_display")[0].innerHTML;
      if (temp.indexOf('-') > -1){
        //pag may laman
      }
      else{
        document.getElementsByClassName("empty_data_small5")[0].style.display = "flex"
      }
    
    }
    else if (params === "date6"){
      document.getElementsByClassName("task1_display")[0].style.display = "none";
      document.getElementsByClassName("task2_display")[0].style.display = "none";
      document.getElementsByClassName("task3_display")[0].style.display = "none";
      document.getElementsByClassName("task4_display")[0].style.display = "none";
      document.getElementsByClassName("task5_display")[0].style.display = "none";
      document.getElementsByClassName("task6_display")[0].style.display = "block";
      document.getElementsByClassName("task7_display")[0].style.display = "none";

      document.getElementsByClassName(params)[0].style.backgroundColor = "#ffff";
      document.getElementsByClassName("date1")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date2")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date3")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date4")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date5")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date7")[0].style.backgroundColor = "transparent";

      let temp = document.getElementsByClassName("task6_display")[0].innerHTML;
      if (temp.indexOf('-') > -1){
        //pag may laman
      }
      else{
        document.getElementsByClassName("empty_data_small6")[0].style.display = "flex"
      }
    
    }
    else if (params === "date7"){
      document.getElementsByClassName("task1_display")[0].style.display = "none";
      document.getElementsByClassName("task2_display")[0].style.display = "none";
      document.getElementsByClassName("task3_display")[0].style.display = "none";
      document.getElementsByClassName("task4_display")[0].style.display = "none";
      document.getElementsByClassName("task5_display")[0].style.display = "none";
      document.getElementsByClassName("task6_display")[0].style.display = "none";
      document.getElementsByClassName("task7_display")[0].style.display = "block";

      document.getElementsByClassName(params)[0].style.backgroundColor = "#ffff";
      document.getElementsByClassName("date1")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date2")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date3")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date4")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date5")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("date6")[0].style.backgroundColor = "transparent";

      let temp = document.getElementsByClassName("task7_display")[0].innerHTML;
      if (temp.indexOf('-') > -1){
        //pag may laman
      }
      else{
        document.getElementsByClassName("empty_data_small7")[0].style.display = "flex"
      }
    
    }
 
}


export default taskDateClick;
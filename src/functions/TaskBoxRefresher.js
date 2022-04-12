function TaskBoxRefresher(){
    if (document.getElementsByClassName("task1_display")[0].innerHTML.indexOf('-') > -1){
      document.getElementsByClassName("empty_data_small1")[0].style.display = "none"
    }// pag wala laman
    else{
      document.getElementsByClassName("empty_data_small1")[0].style.display = "flex"
    }
    if (document.getElementsByClassName("task2_display")[0].innerHTML.indexOf('-') > -1){
      document.getElementsByClassName("empty_data_small2")[0].style.display = "none"
    }// pag wala laman
    else{
      document.getElementsByClassName("empty_data_small2")[0].style.display = "flex"
    }
    if (document.getElementsByClassName("task3_display")[0].innerHTML.indexOf('-') > -1){
      document.getElementsByClassName("empty_data_small3")[0].style.display = "none"
    }// pag wala laman
    else{
      document.getElementsByClassName("empty_data_small3")[0].style.display = "flex"
    }
    if (document.getElementsByClassName("task4_display")[0].innerHTML.indexOf('-') > -1){
      document.getElementsByClassName("empty_data_small4")[0].style.display = "none"
    }// pag wala laman
    else{
      document.getElementsByClassName("empty_data_small4")[0].style.display = "flex"
    }
    if (document.getElementsByClassName("task5_display")[0].innerHTML.indexOf('-') > -1){
      document.getElementsByClassName("empty_data_small5")[0].style.display = "none"
    }// pag wala laman
    else{
      document.getElementsByClassName("empty_data_small5")[0].style.display = "flex"
    }
    if (document.getElementsByClassName("task6_display")[0].innerHTML.indexOf('-') > -1){
      document.getElementsByClassName("empty_data_small6")[0].style.display = "none"
    }// pag wala laman
    else{
      document.getElementsByClassName("empty_data_small6")[0].style.display = "flex"
    }
    if (document.getElementsByClassName("task7_display")[0].innerHTML.indexOf('-') > -1){
      document.getElementsByClassName("empty_data_small7")[0].style.display = "none"
    }// pag wala laman
    else{
      document.getElementsByClassName("empty_data_small7")[0].style.display = "flex"
    }
}

export default TaskBoxRefresher;
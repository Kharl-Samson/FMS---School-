import React from "react"
import $ from 'jquery';
import continueYellow from '../images/icons/continueYellow.svg';
import axios from "axios";
import loading from "../images/loading.gif";
import DeleteIconModal from '../images/icons/delete_icon_modal.svg';

export default function FacultyRowPending(props){ 

    function showAcceptModal(idKey,classF,idName){
        document.getElementsByClassName("accept_faculty_modal_container")[0].style.display = "flex";
        document.getElementById("id_delete_key").value = idKey;
        document.getElementById("id_name_key").value = idName;
        window.localStorage.setItem('acceptClass', classF);
    }

    function showDeclineModal(idKey,classF,idName){
        document.getElementsByClassName("decline_faculty_modal_container")[0].style.display = "flex";
        document.getElementById("id_delete_key1").value = idKey;
        document.getElementById("id_name_key1").value = idName;
        window.localStorage.setItem('acceptClass', classF);
    }

//Getting the value of all input when submitting the form
const submitForm=(e)=>{
        e.preventDefault();

        //Sending the data request to call it on backend
        const sendData = {
            email : localStorage.getItem('email'),
            email1:document.getElementById("id_delete_key").value,
            name:document.getElementById("id_name_key").value,
        }
        //console.log(sendData)
        document.getElementsByClassName("LoadingContainer")[0].style.display = "flex";
        document.getElementsByClassName("accept_faculty_modal_container")[0].style.display = "none";
            //Sending the data to my backend
            axios.post('http://localhost/fms/acceptFaculty.php',sendData)
            .then((result)=>{
                console.log(result.data.status)
                if(result.data.status === "Mailer Error" ){
                    alert("invalid email")
                }
                else if(result.data.status === "Invalid" ){
                    alert("sql error")
                }
                else if(result.data.status === "Mailer Correct" ){
                    document.getElementsByClassName("LoadingContainer")[0].style.display = "none";    
                    document.getElementsByClassName("accept_side_modal")[0].style.display = "flex"; 
                    setTimeout(function(){
                        document.getElementsByClassName("accept_side_modal")[0].style.right = "2%"; 
                    },400);
                    setTimeout(function(){
                        document.getElementsByClassName("accept_side_modal")[0].style.right = "-100%"; 
                    },5000);
                    setTimeout(function(){
                        document.getElementsByClassName("accept_side_modal")[0].style.display = "none"; 
                    },6000);
                    var elem = document.getElementsByClassName(localStorage.getItem("acceptClass"))[0];
                    elem.remove();

                    if ($("#rowTable_forSearch_pending #facultyRow_desktopPending:visible").length === 0) {
                        document.getElementsByClassName("no_searchFound8")[0].style.display ="flex";
                      }
                      else if ($("#rowTable_forSearch_pending #facultyRow_desktopPending:visible").length != 0) {
                        document.getElementsByClassName("no_searchFound8")[0].style.display ="none";
                      }
                }    
            })//End of axios
}

//Getting the value of all input when submitting the form
const submitDeclineForm=(e)=>{
    e.preventDefault();

    //Sending the data request to call it on backend
    const sendData = {
        email : localStorage.getItem('email'),
        email1:document.getElementById("id_delete_key1").value,
        name:document.getElementById("id_name_key1").value,
    }
    //console.log(sendData)
    document.getElementsByClassName("LoadingContainer")[0].style.display = "flex";
    document.getElementsByClassName("decline_faculty_modal_container")[0].style.display = "none";
        //Sending the data to my backend
        axios.post('http://localhost/fms/declineFaculty.php',sendData)
        .then((result)=>{
            console.log(result.data.status)
            if(result.data.status === "Mailer Error" ){
                alert("invalid email")
            }
            else if(result.data.status === "Invalid" ){
                alert("sql error")
            }
            else if(result.data.status === "Mailer Correct" ){
                document.getElementsByClassName("LoadingContainer")[0].style.display = "none";    
                document.getElementsByClassName("accept_side_modal")[0].style.display = "flex"; 
                setTimeout(function(){
                    document.getElementsByClassName("accept_side_modal")[0].style.right = "2%"; 
                },400);
                setTimeout(function(){
                    document.getElementsByClassName("accept_side_modal")[0].style.right = "-100%"; 
                },5000);
                setTimeout(function(){
                    document.getElementsByClassName("accept_side_modal")[0].style.display = "none"; 
                },6000);
                var elem = document.getElementsByClassName(localStorage.getItem("acceptClass"))[0];
                elem.remove();

                if ($("#rowTable_forSearch_pending #facultyRow_desktopPending:visible").length === 0) {
                    document.getElementsByClassName("no_searchFound8")[0].style.display ="flex";
                  }
                  else if ($("#rowTable_forSearch_pending #facultyRow_desktopPending:visible").length != 0) {
                    document.getElementsByClassName("no_searchFound8")[0].style.display ="none";
                  }
            }    
        })//End of axios
}


    return(
    <div className={'header1 header1_pending facultyRow_desktopPending '+props.fClass} id="facultyRow_desktopPending">

        {/*Loading when getting data*/ }
        <div className="LoadingContainer">
            <div className="mid">
                <img src={loading}/>
                <span>This may take a while. Please wait...</span>
            </div>
        </div>


            <input type="hidden" value={props.fdate.slice(0, 10)} className="inputDateKey_hidden_facultyPending"/>
            <div className="div1a">
                <span style={{fontWeight:"normal",fontSize:"1rem",marginLeft:"30px",color:"#3D3D3D"}}>{props.fName}</span>
            </div>
            <div className="div2a"><span style={{fontWeight:"normal",fontSize:"1rem",marginLeft:"30px",color:"#3D3D3D"}}>
            {props.fLname}</span></div>
            <div className="div3a"><span style={{fontWeight:"normal",fontSize:"1rem",color:"#3D3D3D"}}><a href={"mailto:"+props.fEmail} target="_blank" style={{color:"#3D3D3D"}}>{props.fEmail}</a></span></div>
            <div className="div4a"><span style={{fontWeight:"normal",fontSize:"1rem",color:"#3D3D3D"}}>{props.fdate.slice(0, 10)}</span></div>
            <div className="div5a">
                <button onClick={() => { showAcceptModal(props.fEmail,props.fClass,props.fName+" "+props.fLname);}}>Accept</button>    
                <button  onClick={() => { showDeclineModal(props.fEmail,props.fClass,props.fName+" "+props.fLname);}} style={{marginLeft:"10px",backgroundColor:"#f7526d"}}>Decline</button>   
            </div>

            {/*Accept Modal*/}
            <div className="modal_container accept_faculty_modal_container">
                <div className="modal_validation_version2">             
                <p title="Close" className='close_modal' onClick={closeDeleteModal}>&#215;</p>
                <div className='top'>
                    <img src={continueYellow} style={{marginLeft:"25px"}}/>
                    Confirm action
                </div>
                <p className='title'>Are you sure you want to accept this faculty? </p>
        
                <form style={{width: "100%"}} onSubmit={submitForm}>
                <div className='bot'>
                    <input type="hidden" id="id_delete_key" value=""/>
                    <input type="hidden" id="id_name_key" value=""/>
                    <button type="button" onClick={closeDeleteModal}>Cancel</button>
                    <button type="submit" style={{backgroundColor:"#f4b24c"}}>Accept</button>
                </div>
                </form>
                </div>
            </div>

            {/*Decline Modal*/}
            <div className="modal_container decline_faculty_modal_container">
                <div className="modal_validation_version2">             
                <p title="Close" className='close_modal' onClick={closeDeleteModal1}>&#215;</p>
                <div className='top'>
                    <img src={DeleteIconModal} style={{marginLeft:"25px"}}/>
                    Confirm action
                </div>
                <p className='title'>Are you sure you want to decline this faculty? </p>
        
                <form style={{width: "100%"}} onSubmit={submitDeclineForm}>
                <div className='bot'>
                    <input type="hidden" id="id_delete_key1" value=""/>
                    <input type="hidden" id="id_name_key1" value=""/>
                    <button type="button" onClick={closeDeleteModal1}>Cancel</button>
                    <button type="submit" style={{backgroundColor:"#F16262"}}>Decline</button>
                </div>
                </form>
                </div>
            </div>
    </div>
    )
}

  //Close delete task modal
  function closeDeleteModal(){
        document.getElementsByClassName("accept_faculty_modal_container")[0].style.display = "none"
  }

 //Close delete task modal
 function closeDeleteModal1(){
    document.getElementsByClassName("decline_faculty_modal_container")[0].style.display = "none"
}

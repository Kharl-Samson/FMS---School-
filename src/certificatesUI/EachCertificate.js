import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import DeleteIconModal from '../images/icons/delete_icon_modal.svg';
import CertificateGrid from "./CertificateGrid";
import moment from 'moment';

export default function EachCertificate() {
  //getting the email of user
  let email_key = localStorage.getItem("email");

  //Hook for getting all certificates
  const [pdsStep5, setpdsStep5] = useState([]);
  const loadpdsStep5 = async () => {
    const result = await axios.get("http://localhost/fms/pdsStep5.php");
    setpdsStep5(result.data.phpresult);
  };
  useEffect(() => {
    loadpdsStep5();
  }, []);

  const input_keyForCertificates = pdsStep5.map((res) => {
    if (res.email_id === email_key) {
      return (
        <div>
          <input type="hidden" id="LD_img" value={res.LD_img} />
          <input type="hidden" id="LD_title" value={res.LD_title} />
          <input type="hidden" id="LD_dateFrom" value={res.LD_dateFrom} />
          <input type="hidden" id="LD_dateTo" value={res.LD_dateTo} />
          <input type="hidden" id="LD_hours" value={res.LD_hours} />
          <input type="hidden" id="LD_type" value={res.LD_type} />
          <input type="hidden" id="LD_sponsored" value={res.LD_sponsored} />
          <input type="hidden" id="LD_coverage" value={res.LD_coverage} />
          <input type="hidden" id="LD_category" value={res.LD_category} />
        </div>
      );
    }
  });

  setTimeout(function () {
    if (document.getElementById("LD_title").value.length === 0) {
      document.getElementById("certDesktop").style.display = "none"
      document.getElementsByClassName("no_searchFound")[0].style.display ="flex";
      }
    }, 10);

  //Hook for getting Each Certificates
 const [LDimage, setLDimage] = useState([]);
 const loadLDimage = async () => {
   var inputLDimage = document.getElementById("LD_img").value;
   var sliceinputLDimage = inputLDimage.slice(0, -5);
   const inputLDimage_Array = sliceinputLDimage.split(" |:| ");
   setLDimage(inputLDimage_Array);
 };
 const [LDtitle, setLDtitle] = useState([]);
 const loadLDtitle = async () => {
   var inputLDtitle = document.getElementById("LD_title").value;
   var sliceinputLDtitle = inputLDtitle.slice(0, -5);
   const inputLDtitle_Array = sliceinputLDtitle.split(" |:| ");
   const newArray = [];

   for(var i=0 ; i<inputLDtitle_Array.length ; i++){
        var len = inputLDtitle_Array[i].length-18;
        if(inputLDtitle_Array[i].length >= 18){
            newArray.push(inputLDtitle_Array[i].slice(0, -len)+"...");
        }
        else{
            newArray.push(inputLDtitle_Array[i]);
        }
   }
   setLDtitle(newArray);
 };

 const [LDtitleFull, setLDtitleFull] = useState([]);
 const loadLDtitleFull = async () => {
   var inputLDtitleFull = document.getElementById("LD_title").value;
   var sliceinputLDtitleFull = inputLDtitleFull.slice(0, -5);
   const inputLDtitleFull_Array = sliceinputLDtitleFull.split(" |:| ");
   setLDtitleFull(inputLDtitleFull_Array);
 };
 const [LDfrom, setLDfrom] = useState([]);
 const loadLDfrom = async () => {
   var inputLDfrom = document.getElementById("LD_dateFrom").value;
   var sliceinputLDfrom = inputLDfrom.slice(0, -5);
   const inputLDfrom_Array = sliceinputLDfrom.split(" |:| ");
   setLDfrom(inputLDfrom_Array );
 };
 const [LDto, setLDto] = useState([]);
 const loadLDto = async () => {
   var inputLDto = document.getElementById("LD_dateTo").value;
   var replaceTo = inputLDto.replace(/-/g, "-");
   var sliceinputLDto = replaceTo.slice(0, -5);
   const inputLDto_Array = sliceinputLDto.split(" |:| ");
   const newArray1 = [];
   for(var i=0 ; i<inputLDto_Array .length ; i++){
        newArray1.push(moment(inputLDto_Array [i]).format('LL'))
   }
   setLDto(newArray1);
 };

 const [LDto1, setLDto1] = useState([]);
 const loadLDto1 = async () => {
   var inputLDto1 = document.getElementById("LD_dateTo").value;
   var sliceinputLDto1 = inputLDto1.slice(0, -5);
   const inputLDto1_Array = sliceinputLDto1.split(" |:| ");
   setLDto1(inputLDto1_Array);
 };

 const [LDhours, setLDhours] = useState([]);
 const loadLDhours = async () => {
   var inputLDhours = document.getElementById("LD_hours").value;
   var sliceinputLDhours = inputLDhours.slice(0, -5);
   const inputLDhours_Array = sliceinputLDhours.split(" |:| ");
   setLDhours(inputLDhours_Array);
 };
 const [LDtype, setLDtype] = useState([]);
 const loadLDtype = async () => {
   var inputLDtype = document.getElementById("LD_type").value;
   var sliceinputLDtype = inputLDtype.slice(0, -5);
   const inputLDtype_Array = sliceinputLDtype.split(" |:| ");
   setLDtype(inputLDtype_Array);
 };
 const [LDsponsor, setLDsponsor] = useState([]);
 const loadLDsponsor = async () => {
   var inputLDsponsor = document.getElementById("LD_sponsored").value;
   var sliceinputLDsponsor = inputLDsponsor.slice(0, -5);
   const inputLDsponsor_Array = sliceinputLDsponsor.split(" |:| ");
   setLDsponsor(inputLDsponsor_Array);
 };
 const [LDcoverage, setLDcoverage] = useState([]);
 const loadLDcoverage = async () => {
   var inputLDcoverage = document.getElementById("LD_coverage").value;
   var sliceinputLDcoverage = inputLDcoverage.slice(0, -5);
   const inputLDcoverage_Array = sliceinputLDcoverage.split(" |:| ");
   setLDcoverage(inputLDcoverage_Array);
 };
 const [LDcategory, setLDcategory] = useState([]);
 const loadLDcategory = async () => {
   var inputLDcategory = document.getElementById("LD_category").value;
   var sliceinputLDcategory = inputLDcategory.slice(0, -5);
   const inputLDcategory_Array = sliceinputLDcategory.split(" |:| ");
   setLDcategory(inputLDcategory_Array);
 };

 useEffect(() => {
    setTimeout(function () {
        loadLDto1();
        loadLDtitleFull();
        loadLDimage();
        loadLDtitle();
        loadLDfrom(); 
        loadLDto();
        loadLDhours(); 
        loadLDtype();
        loadLDsponsor();
        loadLDcoverage();
        loadLDcategory();
    }, 1000);
  }, []);



//Certificate content
let ld_ctr = -1;
const ldContent = LDtitle.map(() => {
ld_ctr++;
return (
        <CertificateGrid
          LDkey = {ld_ctr}
          LDimage = {LDimage[ld_ctr]}
          LDtitleFull = {LDtitleFull[ld_ctr]}
          LDtitle = {LDtitle[ld_ctr]}
          LDfrom = {LDfrom[ld_ctr]}
          LDto = {LDto[ld_ctr]}
          LDto1= {LDto1[ld_ctr]}
          LDhours = {LDhours[ld_ctr]}
          LDtype = {LDtype[ld_ctr]}
          LDsponsor = {LDsponsor[ld_ctr]}
          LDcoverage = {LDcoverage[ld_ctr]}
          LDcategory = {LDcategory[ld_ctr]}
        />
      );
});

  //Getting the value of all input when submitting the form
  const submitForm=(e)=>{
    e.preventDefault();   
        const sendData = {
          email : localStorage.getItem("email"),
          img : document.getElementById("edit_imgInp").value,
          title : document.getElementById("edit_titleInp").value,
          from : document.getElementById("edit_fromInp").value,
          to : document.getElementById("edit_toInp").value,
          hours : document.getElementById("edit_hoursInp").value,
          type : document.getElementById("edit_typeInp").value,
          sponsor : document.getElementById("edit_sponsorInp").value,
          coverage : document.getElementById("edit_coverageInp").value,
          category : document.getElementById("edit_categoryInp").value,
       }    
       
       //Sending the data to my backend
       axios.post('http://localhost/fms/deleteCertificate.php',sendData)
      .then((result)=>{                   
      if(result.data.status === "Success"){
        window.location.reload(false)
      }
      else{
              alert("There was an error in your SQL Connection!");
      }
     })//End of axios      
}
    
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      id="gridTable_forSearch"
    >


      {ldContent}
      {input_keyForCertificates}


            {/*Delete Certificate Modal*/}
            <div className="modal_container delete_certificate_modal_container">
                <div className="modal_validation_version2">             
                <p title="Close" className='close_modal' onClick={closeDeleteModal}>&#215;</p>
                <div className='top'>
                    <img src={DeleteIconModal} style={{marginLeft:"25px"}}/>
                    Delete
                </div>
                <p className='title'>Are you sure you want to continue? </p>
                <p className='subtitle'>This action is permanent and cannot be undone!</p>

                <form style={{width: "100%"}} onSubmit={submitForm}>
                <div className='bot'>
                    <input type="hidden" id="edit_imgInp"/>
                    <input type="hidden" id="edit_titleInp"/>
                    <input type="hidden" id="edit_fromInp"/>
                    <input type="hidden" id="edit_toInp"/>
                    <input type="hidden" id="edit_hoursInp"/>
                    <input type="hidden" id="edit_typeInp"/>
                    <input type="hidden" id="edit_sponsorInp"/>
                    <input type="hidden" id="edit_coverageInp"/>
                    <input type="hidden" id="edit_categoryInp"/>
                    <button type="button" onClick={closeDeleteModal}>Cancel</button>
                    <button type="submit">Delete</button>
                </div>
                </form>
                </div>
            </div> 

            {/*View Certificate Modal*/}
            <div className="view_certificate_container" id="view_cert">
              <div className="view_certificate">
                  <div className="left">
                      <p>Certificate Detail</p>
                      <img src="" id="viewCert_img"/>
                  </div>

                  <div className="right">
                      <p title="Close" className='close_modal' onClick={closeViewModal}>&#215;</p>

                      <p className="label">Title of learning and development interventions/ training programs</p>
                      <p className="contentText" id="viewCert_title"></p>
                      <p className="label">inclusive dates of attendance (from-to)</p>
                      <p className="contentText" id="viewCert_fromTo"></p>
                      <div style={{display:"flex", marginTop:"7px"}}>
                          <div style={{width:"35%"}}>
                              <p className="label">Number of hours</p>
                              <p className="contentText" style={{marginTop:"0px"}} id="viewCert_hours"></p>
                          </div>
                          <div style={{width:"35%",marginLeft:"40px"}}>
                              <p className="label">type of ld</p>
                              <p className="contentText" style={{marginTop:"0px"}} id="viewCert_type"></p>
                          </div>
                      </div>
                      <p className="label">conducted / sponsored by</p>
                      <p className="contentText" id="viewCert_sponsor"></p>

                      <div style={{display:"flex", marginTop:"7px"}}>
                          <div style={{width:"35%"}}>
                              <p className="label">coverage</p>
                              <p className="contentText" style={{marginTop:"0px"}} id="viewCert_coverage"></p>
                          </div>
                          <div style={{width:"35%",marginLeft:"40px"}}>
                              <p className="label">category</p>
                              <p className="contentText" style={{marginTop:"0px"}} id="viewCert_category"></p>
                          </div>
                      </div>
  
                  </div>
              </div>
            </div>

    </Grid>
  );
}


//Close delete certificate modal
function closeDeleteModal(){
  document.getElementsByClassName("delete_certificate_modal_container")[0].style.display = "none"
}

//Close delete certificate modal
function closeViewModal(){
  document.getElementsByClassName("view_certificate_container")[0].style.display="none"
}

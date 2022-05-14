import React from "react"
import { useNavigate } from "react-router-dom";

export default function FacultyRowPending(props){ 

    return(
        <div className='header1 facultyRow_desktop' id="facultyRow_desktop">
            <div className="div1" style={{width:"15%"}}>
                <span style={{fontWeight:"normal",fontSize:"1rem",marginLeft:"30px",color:"#3D3D3D"}}>{props.fName}</span>
            </div>
            <div className="div2" style={{width:"15%"}}><span style={{fontWeight:"normal",fontSize:"1rem"}}>
            {props.fLname}</span></div>
            <div className="div3" style={{justifyContent:"center",width:"30%"}}><span style={{fontWeight:"normal",fontSize:"1rem",color:"#3D3D3D"}}><a href={"mailto:"+props.fEmail} target="_blank" style={{color:"#3D3D3D"}}>{props.fEmail}</a></span></div>
            <div className="div4" style={{justifyContent:"center", width:"15%"}}><span style={{fontWeight:"normal",fontSize:"1rem",color:"#3D3D3D"}}>{props.fdate.slice(0, 10)}</span></div>
            <div className="div5" style={{width:"25%"}}>
                <button>Accept</button>    
                <button style={{marginLeft:"10px",backgroundColor:"#f7526d"}}>Decline</button>   
            </div>
    </div>
    )
}
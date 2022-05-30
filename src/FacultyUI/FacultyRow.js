import React from "react"
import { useNavigate } from "react-router-dom";

export default function FacultyRow(props){ 
    let navigate = useNavigate();
    function viewFaculty_function(){
        window.localStorage.setItem('viewFacultyName', props.fName);
        window.localStorage.setItem('viewFacultyPhoto', props.fImage);
        window.localStorage.setItem('viewFacultyEmail', props.fEmail);
        window.localStorage.setItem('viewFacultyDep', props.fDep);
        navigate(`/ViewFaculty`);
    }

    return(
        <div className='header1 facultyRow_desktop' id="facultyRow_desktop">
            <div className="div1">
                <img 
                src={"http://localhost/fms/upload_profile/"+props.fImage}
                id="profile_photo"
                onError={(e)=>{e.target.onerror = null; e.target.src="http://localhost/fms/upload_profile/default_avatar.png"}}
                />
                <span style={{fontWeight:"normal",fontSize:".9rem",marginLeft:"10px",color:"#3D3D3D"}}>{props.fName}</span>
            </div>
            <div className="div2"><span style={{fontWeight:"normal",fontSize:".9rem",textDecoration:"underline"}}><a href={"mailto:"+props.fEmail} target="_blank" style={{color:"#3D3D3D"}}>{props.fEmail}</a></span></div>
            <div className="div3" style={{justifyContent:"center"}}><span style={{fontWeight:"normal",fontSize:".9rem",color:"#3D3D3D"}}>{props.fDep}</span></div>
            <div className="div4" style={{justifyContent:"center"}}><span style={{fontWeight:"normal",fontSize:".9rem",color:"#3D3D3D"}}>{props.fEmp+" EMPLOYEE"}</span></div>
            <div className="div5">
                <button onClick={viewFaculty_function}>View</button>    
            </div>
    </div>
    )
}
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function EachRowAdmin(props){

    let navigate = useNavigate();
    function viewFaculty_function(){
        window.localStorage.setItem('viewFacultyName', props.name);
        window.localStorage.setItem('viewFacultyPhoto', props.photo);
        window.localStorage.setItem('viewFacultyEmail', props.email);
        navigate(`/ViewFaculty`);
    }
    return(
        <div className='th th_hover' onClick={viewFaculty_function}>
        <div style={{display:"flex",alignItems:"center"}}>
            <img 
                src={"http://localhost/fms/upload_profile/"+props.photo}
                id="profile_photo"
                onError={(e)=>{e.target.onerror = null; e.target.src="http://localhost/fms/upload_profile/default_avatar.png"}}
            />
        <span style={{fontWeight:"normal",fontSize:".9rem",marginLeft:"10px",color:"#3D3D3D"}}>{props.name}</span>
        </div>
        <div><span style={{fontWeight:"normal",fontSize:".9rem",textDecoration:"underline"}}><a href={"mailto:"+props.email} target="_blank" style={{color:"#3D3D3D"}}>{props.email}</a></span></div>
        <div><span style={{fontWeight:"normal",fontSize:".9rem",color:"#3D3D3D"}}>{props.employment}</span></div>
        <div style={{justifyContent:"center"}}><span style={{fontWeight:"normal",fontSize:".9rem",color:"#3D3D3D"}}>{props.department}</span></div>
    </div>
    );
}

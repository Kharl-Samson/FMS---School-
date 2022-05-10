import React from "react"

export default function FacultyRow(props){ 
    return(
        <div className='header1'>
        <div style={{display:"flex",alignItems:"center"}}>
            <img 
                src={"http://localhost/fms/upload_profile/"+props.fImage}
                id="profile_photo"
                onError={(e)=>{e.target.onerror = null; e.target.src="http://localhost/fms/upload_profile/default_avatar.png"}}
            />
        <span style={{fontWeight:"normal",fontSize:"1rem",marginLeft:"10px",color:"#3D3D3D"}}>{props.fName}</span>
        </div>
        <div><span style={{fontWeight:"normal",fontSize:"1rem",textDecoration:"underline"}}><a href={"mailto:"+props.fEmail} target="_blank" style={{color:"#3D3D3D"}}>{props.fEmail}</a></span></div>
        <div style={{justifyContent:"center"}}><span style={{fontWeight:"normal",fontSize:"1rem",color:"#3D3D3D"}}>{props.fDep}</span></div>
        <div><span style={{fontWeight:"normal",fontSize:"1rem",color:"#3D3D3D"}}>button</span></div>
    </div>
    )
}
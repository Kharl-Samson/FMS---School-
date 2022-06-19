import React from "react"

export default function FacultyRowArchive(props){ 
    function restoreFaculty_function(){
        document.getElementById("restoreAcc_modal").style.display = "flex";
        document.getElementById("keyActivate").value = props.fEmail;
    }

    return(
        <div className='header1 facultyRow_archive' id="facultyRow_archive">

            <input type="hidden" value={props.fDate.slice(0, 10)} className="inputDateKey_hidden_facultyArchive"/>
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
                <button onClick={restoreFaculty_function}>Restore</button>    
            </div>
    </div>
    )
}
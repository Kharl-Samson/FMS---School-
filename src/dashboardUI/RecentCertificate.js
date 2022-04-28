import react from "react";

export default function RecentCertificate(){
    return(
        <div className='recentCertificate_container'>
            <p className='header'>Recent Certificates</p>
            <div className='certificate_container'>

            <div className='for_boxShadow'>
                <div className='certificate'
                    style={{ backgroundImage: `url("http://localhost/fms/upload_certificate/sample_cert.png")` }}
                >   
                    <p>Faculty Webinar 2.0</p>
                    <p>November 15, 2020 <span> &#62; </span></p>
                </div>
            </div>
            <div className='for_boxShadow'>
                <div className='certificate' id="certificate2"
                    style={{ backgroundImage: `url("http://localhost/fms/upload_certificate/sample_cert.png")` }}
                >   
                    <p>Faculty Webinar 2.0</p>
                    <p>November 15, 2020 <span> &#62; </span></p>
                </div>
            </div>
            <div className='for_boxShadow'>
                <div className='certificate'
                    style={{ backgroundImage: `url("http://localhost/fms/upload_certificate/sample_cert.png")` }}
                >   
                    <p>Faculty Webinar 2.0</p>
                    <p>November 15, 2020 <span> &#62; </span></p>
                </div>
            </div>
            <div className='for_boxShadow'>
                <div className='certificate'
                    style={{ backgroundImage: `url("http://localhost/fms/upload_certificate/sample_cert.png")` }}
                >   
                    <p>Faculty Webinar 2.0</p>
                    <p>November 15, 2020 <span> &#62; </span></p>
                </div>
            </div>
 
        </div>

        <div className='see_all_certificate'>See All &#62;</div> 
        <div style={{clear: "both"}}></div>
    </div>
    )
}
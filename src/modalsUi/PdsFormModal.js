import React from "react";
import error_info from '../images/icons/error_info.svg';
import form_img from '../images/form_img.png';

export default function PdsFormStepModal(){


    return (
        <div className="pds_validation">
                <div className="top">
                    <p>Please fix the issues we found so we can proceed to the next step.</p>
                </div>

                <div className="semitop">
                    <img src={error_info}/>
                    <p>You need to fix some things in order to create your Personal Data Sheet.</p>
                </div>
                
                <div className="content">
                    <p id="list_of_errors"></p>
                    <div className="right">
                            <img src={form_img}/>
                    </div>
                </div>
               
        </div>
    )
}
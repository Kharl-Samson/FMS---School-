import react from "react";
import TaskModalIcon from '../images/icons/task_modal.svg';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function ViewTaskModal(){
    function CloseTaskModal(){
        document.getElementsByClassName("view_task_modal_container")[0].style.display = "none";
    }
    return(
            <div className='task_modal'>
                <div className='top'>
                    <img src={TaskModalIcon}/>
                    <div className='header'>
                        <p>Task Scheduler</p>
                        <p>Information about your task</p>
                    </div>
                    <div className='close_btn' onClick={CloseTaskModal}><span title="Close" >&#215;</span></div>
                </div>

                    <div className='task_form'>
                        <div style={{display:"flex",alignItems:"flex-end", color: "#616263"}}>
                            <SubtitlesIcon style={{marginRight :"5px"}}/>
                            <label>Title</label>
                        </div>
                        <p style={{fontSize: "1rem", marginBottom: "10px"}} id="task_title"></p>

                        <div style={{display:"flex",alignItems:"flex-end", color: "#616263"}}>
                            <DescriptionIcon style={{marginRight :"5px"}}/>
                            <label>Description</label>
                        </div>
                        <p style={{fontSize: "1rem", marginBottom: "10px"}}  id="task_description"></p>

                        <div style={{display:"flex",alignItems:"flex-end", color: "#616263"}}>
                            <LinkIcon style={{marginRight :"5px"}}/>
                            <label>Link</label>
                        </div>
                        <a href="#" target="_blank" style={{color: "#5171E3", marginBottom: "10px"}} id="task_link"></a>

                        <div style={{display:"flex",alignItems:"flex-end", color: "#616263"}}>
                            <DateRangeIcon style={{marginRight :"5px"}}/>
                            <label>Date</label>
                        </div>
                        <p style={{fontSize: "1rem", marginBottom: "10px"}} id="task_date"></p>

                        <div style={{display:"flex",alignItems:"flex-end", color: "#616263"}}>
                            <AccessTimeIcon style={{marginRight :"5px"}}/>
                            <label>Time</label>
                        </div>
                        <p style={{fontSize: "1rem", marginBottom: "10px"}} id="task_time"></p>
                    </div>
            </div>
    )
}
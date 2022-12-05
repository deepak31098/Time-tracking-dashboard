import React from "react";

function Activity(props){
    const styles={
        backgroundImage:"url('./images/icon-"+ props.img +".svg')",
        backgroundColor:props.bg,
    }
    return(
        <div>
        <div style={styles} className="main-box">
                <div className="activity-box">
               
                    <div className="activity-name"><span>{props.activity}</span></div>
                    <div className="hours"><span>{props.hour}hrs</span></div>
                    <div className="last-week-hours"><span>Last Week - {props.lastweektime} hrs</span></div>
                </div>
            </div>
        </div>
    )
}
export default  Activity;
import React from "react";
//i tried importing images but it wasm't showing anything then there was a suggestion to put it public 
// directory i kept it there and started working what happen why it started working what happen when we
// put things in public directory
function Activity(props){
    var name=props.activity.toLowerCase()
    name=name==="self care" ? "self-care" :name;
    var backColor;
    // i was unable to guess how can i apply different styles to different element as it was map
    // function which is passing these how to style individual component attributes of which are passesd by 
    // map function as a bunch
    switch(props.activity){
        case "Work":
            backColor="hsl(15, 100%, 70%)";
            break;
        case "Play":
            backColor="hsl(195, 74%, 62%)";
            break;
        case "Study":
            backColor="hsl(348, 100%, 68%)";
           break;
        case "Exercise":
            backColor="hsl(145, 58%, 55%)";
            break;
        case "Social":
            backColor="hsl(264, 64%, 52%)";
            break;
        case "Self Care":
            backColor="hsl(43, 84%, 65%)";
            break;
    }
//i needed to keep this to in public folder other wise image was not displayed
// at times i tries ../path or ./path or path nothing worked what went wrong 
    const styles={
        backgroundImage:"url(../images/icon-"+name+".svg)",
        backgroundColor:backColor,
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
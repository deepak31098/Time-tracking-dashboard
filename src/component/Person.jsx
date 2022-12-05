import React, { useState } from "react";
import '../App.css';

function Person(prop){
    const[style, setStyle] = useState({
        "Weekly":true,
        "Daily":false,
        "Monthly":false
    });

    function handleClick(e){
        setStyle({
                "Weekly":false,
                "Daily":false,
                "Monthly":false,
                [e.currentTarget.innerText]:true
            });
            
        prop.trigger(e.currentTarget.innerText)
    }

    return(
            <div className="main-person-box">
                <div className="person-info">
                    <div className="person-image"><img className="jeremy"  src="images/image-jeremy.png"/></div>
                    <div className="reported-by-line"><span>Report for</span></div>
                    <div className="person-name"><span>Jeremy Robson</span></div>
                </div>
                <div  className="time-interval">
                    <div onClick={handleClick} style={{color : style.Daily ? "white" :"hsl(235, 45%, 61%)"}} className="daily"><span>Daily</span></div>
                    <div onClick={handleClick} style={{color : style.Weekly ? "white" :"hsl(235, 45%, 61%)"}} className="weekly"><span>Weekly</span></div>
                    <div onClick={handleClick} style={{color : style.Monthly ? "white" :"hsl(235, 45%, 61%)"}} className="monthly"><span>Monthly</span></div>
                </div>
            </div>
    )
}

export default  Person;
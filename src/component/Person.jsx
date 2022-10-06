import React from "react";
import '../App.css';
//const and var all are behaving in same manner why
var dailystyle,weeklystyle,monthlystyle;
function style(trigger){
     dailystyle= trigger==="Daily"? {color:"white"}:{color:"hsl(235, 45%, 61%)"};
     weeklystyle= trigger==="Weekly"? {color:"white"}:{color:"hsl(235, 45%, 61%)"};
     monthlystyle= trigger==="Monthly"? {color:"white"}:{color:"hsl(235, 45%, 61%)"};
}
function Person(prop){
    function handleClick(e){
        style(e.currentTarget.innerText)
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
                    <div onClick={handleClick} style={dailystyle} className="daily"><span>Daily</span></div>
                    <div onClick={handleClick} style={weeklystyle} className="weekly"><span>Weekly</span></div>
                    <div onClick={handleClick} style={monthlystyle} className="monthly"><span>Monthly</span></div>
                </div>
            </div>
    )
}

export default  Person;
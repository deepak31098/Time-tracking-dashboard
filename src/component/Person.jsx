import React from "react";
import '../App.css';
function Person(prop){
    function handleClick(e){
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
                    <div onClick={handleClick} className="daily"><span>Daily</span></div>
                    <div onClick={handleClick} className="weekly"><span>Weekly</span></div>
                    <div onClick={handleClick} className="monthly"><span>Monthly</span></div>
                </div>
            </div>
    )
}

export default  Person;
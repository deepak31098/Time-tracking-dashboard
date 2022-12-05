import React, { useEffect, useState } from "react";
import Activity from "./Activity";
import Person from "./Person";
import axios from "axios"

function App() {
  const [data, setData]=useState([])
  const [time,setTime]= useState("weekly");
  const style = ["hsl(15, 100%, 70%)","hsl(195, 74%, 62%)","hsl(348, 100%, 68%)","hsl(145, 58%, 55%)","hsl(264, 64%, 52%)","hsl(43, 84%, 65%)"]

  function states(t){
    setTime(t.toLowerCase());
  }

  useEffect(() => {
    axios.get('data.json')
    .then(res =>{
      setData(res.data);
    })
    .catch((error)=> console.log(error) )
  },[]);

  return (
    <div className="wrapper">
        <div className="app">
            <Person trigger={states}/>
              {data.map(function(act, index){
              return <Activity key={index} bg={style[index]} activity={act.title} hour={act.timeframes[time].current}  lastweektime={act.timeframes[time].previous}/>
            })} 
        </div>
    </div>);
}

export default App;

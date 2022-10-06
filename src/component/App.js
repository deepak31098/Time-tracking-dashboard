import React, { useState } from "react";
//not able to understand how component in devtool works
import Activity from "./Activity";
import Person from "./Person";
//  import activities from "data.json";//search on internet that how use axios to fetch data i tried it
// and found suggestion that axios should be in public directory i put it there it worked but now  
// this import is not working when the data.json was in source then axios was showing error in catch
import axios from "axios"

const title=["Work","Play","Study","Exercise","Social","Self Care"]
function App() {
  const [info, setInfo]=useState([
{current: 32, previous: 36},{current: 10, previous: 8},{current: 4, previous: 7},{current: 4, previous: 5},{current: 5, previous: 10},{current: 2, previous: 2}
  ]);

  //this is function created to know which button triggered which has been passed as props to person it 
  // return give button innertext as time here
  function states(time){
    state(time)
  }

  function state(value){
    // i was unable to save returning data into a variable or constant coming by get operation
    axios.get('data.json')
    .then(function (res){
      return res
    }).then(function(data){
  //i was trying to get data as array and put it in map function so i have have to approach like what like
  // what is way of implementing this without loops 
      if(value==='Daily'){
        var objarr=[];
        for(var i=0 ; i<data.data.length;i++){
          objarr.push(data.data[i].timeframes.daily)
        }
        setInfo(objarr);
        console.log(info)
      }else if(value==='Weekly'){
        var objarr=[];
        for(var i=0 ; i<data.data.length;i++){
          objarr.push(data.data[i].timeframes.weekly)
        }
        setInfo(objarr);
        console.log(info)
      }else{
        var objarr=[];
        for(var i=0 ; i<data.data.length;i++){
          objarr.push(data.data[i].timeframes.monthly)
        }
  //at time my useState function keep on updating the data and it filled my console log and hanged the 
  // system what went wrong i was unable to understand what actually happened. What is caution that 
  // we should keep while using useState 
        setInfo(objarr);
        console.log(info)
      }
      })
    .catch(err => console.log("Error"))
  }
  return (
  <div className="wrapper">
      <div className="app">
          <Person trigger={states}/>
 {/* I tried using json file directly here that didn't worked it wasn't dynamic so i made this info 
 here and i am updating it value using hooks and for loop */}

 {/* earlier i was trying to make these attribute as dynamic but it was not showing anything but the 
 blank page no components what actually happened */}
            {info.map(function(act, index){
            return <Activity key={index} activity={title[index]} hour={act.current}  lastweektime={act.previous}/>
          })} 
      </div>
  </div>);
}
export default App;

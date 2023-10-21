//import React from 'react';
//import logo from './logo.svg';
import { useState } from 'react';
import './index.css';

function CourseSubCard(props:any) {
  console.log(props);
  const[duration,setDuration]=useState(props.duration); //useState is Asynchronous
  const[showPrice,setShowPrice]=useState(true);
  const[faculty,setFaculty]=useState({name:"Soumya",techStack:"UI",fee:"",location:""});

  const getEvent=(event:any)=>{
    console.log(event);
    setDuration("4months");
    //alert('approach-3');
  }
// const getAlert=(a:number,b:number)=>{
//   alert(a+b+'approach-2');
// }
  const hidePriceFun=(event:any)=>{
    console.log(event.target.checked);
    setShowPrice(event.target.checked);
    console.log("welcome");
    console.log("showPrice");
  }
  const changeName=()=>{
    setFaculty({...faculty,name:"Om"});
  }
  return (
    <div>
       <img src={props.imgpath}/>
       <p>duration:{duration} <button onClick={getEvent}>change the duration</button></p>
       <p>price:{ showPrice ? props.price : '***' } 
       <input type='checkbox' checked={showPrice} onChange={hidePriceFun}/>show the price</p>
       <p>name: {faculty.name}</p>
       <p>Technology: {faculty.techStack}</p>
       <input type='text' onChange={(e)=>{
          setFaculty({...faculty,name:e.target.value})
       }}/>
       <button onClick={changeName}>change the name</button>

       {/* <p>duration:{e.duration} <button onClick={()=>getAlert(10,20)}>change the duration</button></p> */}
        {/* <p>duration:{e.duration} <button onClick={()=>{
        alert('approach-1')
       }}>change the duration</button></p> */}
    </div>
  );
}

export default CourseSubCard;

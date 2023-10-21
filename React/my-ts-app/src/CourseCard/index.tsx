//import React from 'react';
//import logo from './logo.svg';
import './index.css';
import CourseSubCard from '../CourseSubCard';

function CourseCard() {
  const obj=[
    {
      imgURL:'https://ashokitech.com/uploads/course/spring-boot-microservices-online-training.jpeg',
      duration:'3months',
      price:'8000'
    },
    {
      imgURL:'https://ashokitech.com/uploads/course/java-realtime-project-online-training.png',
      duration:'3months',
      price:'9000'
    }
  ]
  const getAlert=(a:number,b:number)=>{
    console.log(a+b);
    alert("approach-2");
  }  //function expression (to solve functional hoisting)
  return (
   <div>
     {obj.map((e)=>{
     return(
      <div className='card'>
        <CourseSubCard price={e.price} imgpath={e.imgURL} duration={e.duration}/>
      </div>
      )}
     )}
   </div>
  );
}

export default CourseCard;

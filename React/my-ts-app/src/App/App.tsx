import React, { useState } from 'react';
//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import CopyRight from "../Footer/CopyRight"
import TrainingCard from '../TrainingCard';
import CourseCard from '../CourseCard';
import trainigtypes from '../Constants';
import ImgComp from '../ImgComp';
import ImgCompFunc from '../ImgCompFunc';
import ErrorBoundary from '../ErrorBoundary';

function App() {
  let no:number=11110;
  const [hide, setHide] =useState(false);
  const [text,setText] = useState("welcome to react");
  const changeFun=(name:any)=>{
    console.log(name);
    setText(name);
  }

  return (
    <div className='App'>
     {/*<Header no={no}/>
     <h1>App Component</h1>
     <Footer/>
    <CopyRight/>*/}
      {/* <div className='container'>
        <div className='row'>
          {trainigtypes.map((e:any)=>
          <div className='col4'>
            <TrainingCard 
            imgpath={e.imgpath} 
            title={e.title} 
            color={e.color}/>
          </div>
          )}
        </div>
      </div> */}
      {/* <div className='container'>
    
     <CourseCard/>
     
     </div> */}
     {/* <button onClick={()=>setHide(!hide)}>Toggle Imgcomp</button>
     {hide ? <ImgComp text="welcome to react"/> : null} */}
     <ErrorBoundary>
    <button onClick={()=>setHide(!hide)}>Toggle Imgcomp</button>
     {hide ? <ImgCompFunc text="welcome to react" changeName={changeFun}/> : null}
     </ErrorBoundary>
    </div>
    //npm run build--->build--->cmd--->http-server
  );
}

export default App;

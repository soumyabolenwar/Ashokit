//import React from 'react';
//import logo from './logo.svg';
import { ReactElement } from 'react';
import './index.css';

function TrainingCard(props:any):ReactElement {
  return (
    <div>
      <div className='card' style={{'background':props.color || 'green'}}>
      <img src={props.imgpath}/>
      <p>{props.title || 'lorem ipsum'}</p>
      </div>
    </div>
  );
}

export default TrainingCard;

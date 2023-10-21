import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import CopyRight from "./Footer/";
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer/';
import TrainingCard from './TrainingCard';
import CourseCard from './CourseCard';

const root = ReactDOM.createRoot(
  document.getElementById('soumya') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

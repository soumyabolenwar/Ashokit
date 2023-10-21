import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import ContactUs from './ContactUs';
import Portfolio from './Portfolio';
import NoMatch from './NoMatch';
import Header from './Header';
import Footer from './Footer';
import Development from './Services/Development';
import Consulting from './Services/Consulting';
import Training from './Services/Training';
import PortfolioDetail from './PortfolioDetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="services" element={<Services />}>
          <Route index element={<Development/>}/>
          <Route path="consulting" element={<Consulting/>}/>
          <Route path="training" element={<Training/>}/>
        </Route>
        <Route path='contactus' element={<ContactUs />}/>
        <Route path='portfolio' element={<Portfolio />}/>
        <Route path='portfoliodetails/:name' element={<PortfolioDetail />}/>
        <Route path='*' element={<NoMatch />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

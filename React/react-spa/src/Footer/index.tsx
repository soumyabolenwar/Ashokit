import React from 'react';
import logo from './logo.svg';
import './index.css';

function Footer() {
  return (
    <div className="Footer">
        <p>&copy; copyrights are reserved - {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;

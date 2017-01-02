import React from 'react';
import { Link } from 'react-router';
import Navbar from '../Navbar/Navbar.jsx';
import './Header.css';

const Header = (props) => {
return (
  <div>
    <Link to='/' className="link">
    	<h1>Welcome to Commmunity</h1>
    </Link>
    <Navbar/>
  </div>
 );
};

export default Header;

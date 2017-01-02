import React from 'react';
import { Link } from 'react-router';
import './Navbar.css';

const Navbar = (props) => {
	return (
		<div className="navbar">
	      <Link to="communities" className="link"> My Community  </Link>
	      <Link to="/api/cultures" className="link"> Create Culture Post </Link>
	      <Link to="/api/communities" className="link"> Create Community Post </Link>
		</div>
	);
};

export default Navbar;

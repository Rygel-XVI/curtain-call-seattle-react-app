import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar">
    <NavLink className='navlink' to="/">Home</NavLink>
    <NavLink className='navlink' to="/theater">Theater</NavLink>
    <NavLink className='navlink' to="/date">Shows By Date</NavLink>
    </div>
  );
};

export default Nav;

import React from 'react';
import { NavLink } from 'react-router-dom';

// const React = require('react');
// const NavLink = require('react-router-dom').NavLink;
// var Link = require('react-router-dom').Link;


function Nav () {
  return (
    <ul className='nav'>
      <li>
        {/* only apply active class when route is EXACT */}
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'>
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular'>
          Popular
        </NavLink>
      </li>
    </ul>
  )
}


module.exports = Nav;
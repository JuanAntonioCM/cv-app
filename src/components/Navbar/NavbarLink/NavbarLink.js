import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = props => {
  const { to, text } = props;
  return (
    <NavLink
      exact
      activeStyle={{ color: '#E53E3E' }}
      to={to}
      className="navbar__link block p-3 text-gray-600 hover:text-red-600 hover:bg-gray-100"
    >
      {text}
    </NavLink>
  );
};

export default NavbarLink;

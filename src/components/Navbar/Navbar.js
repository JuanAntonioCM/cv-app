import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import SingedInLinks from './SingedInLinks';
import SingedOutLinks from './SingedOutLinks';

function Navbar() {
  return (
    <nav className="navbar bg-teal-500">
      <div className="navbar__content p-4 flex">
        <Link to="/" className="navbar__link text-white p-2">
          Inicio
        </Link>
        <SingedInLinks />
        {/* <SingedOutLinks /> */}
      </div>
    </nav>
  );
}

export default Navbar;

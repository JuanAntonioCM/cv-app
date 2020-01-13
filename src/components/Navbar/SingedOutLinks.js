import React from 'react';
import { NavLink } from 'react-router-dom';
function SingedOutLinks() {
  return (
    <ul>
      <li><NavLink to='/' className="navbar__link text-white p-2">Resumen profesional</NavLink></li>
      <li><NavLink to='/portfolio' className="navbar__link text-white p-2">Portafolio</NavLink></li>
      <li><NavLink to='/contact' className="navbar__link text-white p-2">Contacto</NavLink></li>
      <li><NavLink to='/singin' className="navbar__link text-white p-2">Ingresar</NavLink></li>
    </ul>
  );
}

export default SingedOutLinks;
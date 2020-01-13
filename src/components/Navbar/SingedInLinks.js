import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedInLinks() {
  return (
    <ul className="flex float-right">
      <li>
        <NavLink to="/dashboard" className="navbar__link text-white p-2">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/create-skill" className="navbar__link text-white p-2">
          Agregar habilidad
        </NavLink>
      </li>
      <li>
        <NavLink to="/logout" className="navbar__link text-white p-2">
          Cerrar sesión
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedInLinks;

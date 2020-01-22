import React from 'react';
import NavbarLink from './NavbarLink/NavbarLink';

function SingedOutLinks() {
  return (
    <ul className="flex flex-col md:ml-auto md:flex-row">
      <li>
        <NavbarLink to="/" text="Resumen profesional" />
      </li>
      {/* <li>
        <NavbarLink to="/portfolio" text="Portafolio" />
      </li> */}
      <li>
        <NavbarLink to="/contact" text="Contacto" />
      </li>
      <li>
        <NavbarLink to="/signin" text="Iniciar sesión" />
      </li>
    </ul>
  );
}

export default SingedOutLinks;

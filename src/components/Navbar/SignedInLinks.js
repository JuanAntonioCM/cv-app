import React from 'react';
import { connect } from 'react-redux';
import { signOutAction } from '../../store/actions/authActions';
import NavbarLink from './NavbarLink/NavbarLink';

function SignedInLinks({ signOut }) {
  return (
    <ul className="flex flex-col md:ml-auto md:flex-row">
      <li>
        <NavbarLink to="/" text="Resumen profesional" />
      </li>
      <li>
        <NavbarLink to="/admin" text="Admin" />
      </li>
      <li>
        <NavbarLink to="/admin/create-skill" text="Agregar habilidad" />
      </li>
      <li>
        <button
          type="button"
          className="block p-3 text-gray-600 hover:text-red-600 hover:bg-gray-100"
          onClick={signOut}
        >
          Cerrar sesión
        </button>
      </li>
    </ul>
  );
}

// export default SignedInLinks;
const mapDispatchtoProps = dispatch => {
  return {
    signOut: () => {
      return dispatch(signOutAction());
    }
  };
};

export default connect(null, mapDispatchtoProps)(SignedInLinks);

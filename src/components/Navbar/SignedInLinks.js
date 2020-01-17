import React from 'react';
// import { Button }
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutAction } from '../../store/actions/authActions';

function SignedInLinks(props) {
  return (
    <ul className="flex items-center justify-end ml-auto">
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
        <button
          type="button"
          className="navbar__Button text-white p-2"
          onClick={props.signOut}
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

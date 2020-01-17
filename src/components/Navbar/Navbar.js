import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Navbar(props) {
  console.log('autenticado?', props.signedIn);

  return (
    <nav className="navbar bg-teal-500">
      <div className="navbar__content p-2 flex">
        <Link to="/" className="navbar__link text-white p-2">
          Inicio
        </Link>
        {props.signedIn ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  );
}

const mapStateToProps = state => {
  console.log('state:', state);
  // Si la llave state.firebase.auth.isEmpty es true, entonces no esta autenticado
  return {
    signedIn: !state.firebase.auth.isEmpty
  };
};

export default connect(mapStateToProps)(Navbar);

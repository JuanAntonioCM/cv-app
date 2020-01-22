import React, { useState } from 'react';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Navbar(props) {
  const { auth } = props;
  const [isOpen, setIsOpen] = useState(false);

  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <nav className="navbar border-b border-gray-200">
      <div className="navbar__content max-w-5xl mx-auto">
        <div className="flex content-center bg-white relative z-10 md:hidden">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            type="button"
            className="block p-3 hover:text-red-600"
          >
            <svg
              className="w-5 h-5 fill-current text-gray-600 hover:text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`fixed bg-white h-full w-64 ${
            isOpen ? 'm-0' : '-m-64'
          } z-10 md:static md:w-auto md:flex md:m-auto`}
        >
          {links}
        </div>
        {isOpen ? (
          <div className="bg-black fixed w-full h-full left-0 top-0 z-5 opacity-75" />
        ) : null}
      </div>
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);

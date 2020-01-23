import React, { useState } from 'react';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInlinks/SignedInLinks';
import SignedOutLinks from './SignedOutLinks/SignedOutLinks';
import { MenuIcon, CloseIcon } from '../Icons/Icons';

function Navbar({ auth }) {
  const [openMenu, setOpenMenu] = useState(false);

  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  const icon = openMenu ? <CloseIcon /> : <MenuIcon />;
  const menuStyles = openMenu ? 'm-0' : '-m-64';
  const overlay = (
    <div className="navbar__overlay bg-black fixed w-full h-full left-0 top-0 z-5 opacity-75" />
  );

  return (
    <nav className="navbar border-b border-gray-200">
      <div className="navbar__content max-w-5xl mx-auto">
        <div className="flex content-center bg-white relative z-10 md:hidden">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            type="button"
            className="block p-3 hover:text-red-600"
          >
            {icon}
          </button>
        </div>
        <div
          className={`navbar__buttons fixed bg-white h-full w-64 z-10 ${menuStyles} md:static md:w-auto md:flex md:m-auto`}
        >
          {links}
        </div>
        {openMenu ? overlay : null}
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

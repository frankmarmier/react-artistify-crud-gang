import React from 'react';
import { NavLink } from 'react-router-dom';

function NavMobile({ navMobileClbk, navMobileStatus }) {
  return (
    <nav
      id="nav_mobile"
      onClick={navMobileClbk}
      className={`nav mobile ${navMobileStatus ? 'is-active' : ''}`}
    >
      <NavLink exact className="link" activeClassName="is-active" to="/">
        home
      </NavLink>
      <NavLink className="link" activeClassName="is-active" to="/artists">
        artists
      </NavLink>
      <NavLink className="link" activeClassName="is-active" to="/albums">
        albums
      </NavLink>
      <NavLink className="link" activeClassName="is-active" to="/contact-us">
        contact
      </NavLink>
      <NavLink className="link" activeClassName="is-active" to="/signin">
        signin
      </NavLink>
    </nav>
  );
}

export default NavMobile;

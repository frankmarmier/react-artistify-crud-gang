import React from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../Auth/UserContext';
import withUser from '../Auth/withUser';

function NavMain(props) {
  console.log(props, 'in nav main');
  return (
    <nav id="nav_main" className="nav">
      {props.context.user && (
        <NavLink exact className="link" activeClassName="is-active" to="/profile">
          {props.context.user.username}
        </NavLink>
      )}
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
    </nav>
  );
}
//  On a accès au user dans le context grâce au HOC withUser via des props.
export default withUser(NavMain);

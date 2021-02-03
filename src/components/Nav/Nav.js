import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };
// if user is a vet 'Home' will direct them to their profile page
  if (props.store.user.type_id === 1) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }
  // changes 'Home' to AdminLandingPage for the admin 
  else if (props.store.user.type_id === 2) {
    loginLinkData.path = '/adminlanding';
    loginLinkData.text = 'Home';
  }
  // need to change this one for organizations still 
  else if (props.store.user.type_id === 3) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">RUTD</h2>
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show Nav Links for veterans */}
        {props.store.user.type_id === 1 && (
          <>
            <Link className="nav-link" to="/vetmatches">
              Resources
            </Link>
            <LogOutButton className="nav-link" />
          </>
        )}
        {/* Show Nav Links for admin */}
        {props.store.user.type_id === 2 && (
          <>
            <Link className="nav-link" to="/resourcelist">
              Resources
            </Link>
            <Link className="nav-link" to="/vetlist">
              Veterans
            </Link>
            <LogOutButton className="nav-link" />
          </>
        )}
        {/* Show Nav Links for Organizations */}
        {props.store.user.type_id === 3 && (
          <>
            <Link className="nav-link" to="/info">
              Info Page
            </Link>
            <LogOutButton className="nav-link" />
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);

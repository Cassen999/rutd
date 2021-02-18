import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButtonNav from '../LogOutButtonNav/LogOutButtonNav';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import NewLogo from '../../Images/new-logo.png';

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
  // changes 'Home' to OrganizationLandingPage for an organization  
  else if (props.store.user.type_id === 3) {
    loginLinkData.path = '/organizationlanding';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <img className="nav-logo nav-title" src={NewLogo} alt="rutd logo"></img>
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
            {/* <Link  className="nav-link" to="/vetmatches">
              Resources
            </Link> */}
            <Link className="nav-link" to="/vetmatches">
              Chat
            </Link>
            <LogOutButtonNav className="nav-link" />
          </>
        )}
        {/* Show Nav Links for admin */}
        {props.store.user.type_id === 2 && (
          <>
            <Link className="nav-link" to="/resourcelist">
              Organizations
            </Link>
            <Link className="nav-link" to="/vetlist">
              Veterans
            </Link>
            <Link className="nav-link" to="/vetmatches">
              Chat
            </Link>
            <LogOutButtonNav className="nav-link" />
          </>
        )}

        {props.store.user.type_id === 3 && (
          <>
            <LogOutButtonNav className="nav-link" />
          </>
        )}    
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
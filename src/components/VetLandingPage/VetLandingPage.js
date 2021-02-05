import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_COMPLETE_MATCH',
      payload: this.props.store.user.id
    });
  }

  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);


// TODO //

// Nav Bar
// GET route to get their matches in progress
// GET route to get their completed matches
// Set up card view for in progress and completed matches
// View and Edit button routes
// Emergency numbers button
// View all Matches button - route and dispatch


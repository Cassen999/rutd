import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Demographic from '../Demographic/Demographic'
import ServiceHistory from '../ServiceHistory/ServiceHistory'
import Health from '../Health/Health'
import Compensation from '../Compensation/Compensation';


class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        REDUX STATE: {JSON.stringify(this.props.store)} 

        <LogOutButton className="log-in" />
        <Demographic/>
        <ServiceHistory/>
        <Health/>
        <Compensation/>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);

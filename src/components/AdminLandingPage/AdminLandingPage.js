import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminVetList from '../AdminVetList/AdminVetList';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AdminLandingPage extends Component {
  state = {
    heading: 'Admin Landing Page',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <AdminVetList />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminLandingPage);

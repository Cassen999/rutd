import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import HealthForm from './HealthForm'
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Health extends Component {
  state = {
    heading: 'Health',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <HealthForm/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Health);

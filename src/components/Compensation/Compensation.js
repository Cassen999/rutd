import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import CompensationForm from './CompensationForm'
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Compensation extends Component {
  state = {
    heading: 'Compensation',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <CompensationForm/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Compensation);

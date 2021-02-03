import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import DemographicsForm from '/DemographicsForm';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Demographics extends Component {
  state = {
    heading: 'Demographics',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <DemographicsForm/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Demographics);

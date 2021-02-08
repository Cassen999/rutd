import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ServiceForm from './ServiceForm'
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ServiceHistory extends Component {
  state = {
    heading: 'Service',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        REDUX STORE: {JSON.stringify(this.props.store)} 

        <ServiceForm/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ServiceHistory);

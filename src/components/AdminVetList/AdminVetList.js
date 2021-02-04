import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AdminVetList extends Component {
  state = {
    heading: 'Admin Vet List',
  };
  
  componentDidMount() {
    this.props.dispatch({type: 'SET_VET'})
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        {JSON.stringify(this.props.store.vetReducer)}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminVetList);

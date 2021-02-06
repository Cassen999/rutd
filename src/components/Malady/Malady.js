import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MaladyForm from './MaladyForm'
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Malady extends Component {
  state = {
    heading: 'Malady',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        MALADY REDUCER: {JSON.stringify(this.props.store.maladyReducer)} 
       <br/>

        PERCENTAGE REDUCER: {JSON.stringify(this.props.store.percentageReducer)} 
<center>
        <MaladyForm/>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Malady);

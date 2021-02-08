import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import VetLandingPage from '../VetLandingPage/VetLandingPage';
import AdminLandingPage from '../AdminLandingPage/AdminLandingPage';
import LoginPage from '../LoginPage/LoginPage';


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class GenericLanding extends Component {
  
  state = {
    heading: 'Generic Landing',
  };

  render() {

    if(this.props.store.user.type_id === 1){
      return(<VetLandingPage/>)
    } else if (this.props.store.user.type_id === 2){
      return (<AdminLandingPage/>)
    } else {
      alert('NOT A USER TYPE')
      return(<LoginPage/>) ;
    }

  }
}

export default connect(mapStoreToProps)(GenericLanding);

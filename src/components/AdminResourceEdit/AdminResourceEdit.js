import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AdminResourceEdit extends Component {
  state = {
    heading: 'Admin Resource Edit',
  };

  render() {
    // line below is equivalent to this.props.store.details
    const {resourceDetails} = this.props.store;
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <center>
          {JSON.stringify(this.props.store.resourceDetails)}
        </center>
          {resourceDetails.map((resource, i) => {
            return(
              <div key={i}>
                <p>Name: {resource.name}</p>
                <p>Number: {resource.number}</p>
                <p>Email: {resource.email}</p>
                <p>City:{resource.city}</p>
                <p>State: {resource.state_id}</p>
                <p>Website: {resource.website}</p>
                <p>Description: {resource.description}</p>
                <p>Categories: {resource.categories_id}</p>
                <br></br>
                <hr></hr>
                {/* 
                <p>Status: {resource.approved}</p>
                <p>PDF: {resource.pdf}</p>
                <p>Pictures: {resource.pictures}</p>
                */}
            </div>
          )})}

          
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminResourceEdit);

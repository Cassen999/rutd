import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


// TO DO :
// - Map out the reducer resourceDetails to edit 
// - 
// - 
// - 
// - 
// - 
 

class EditResource extends Component {
  state = {
    heading: 'Edit Resource View',
  };

  render() {
    const {resourceDetails} = this.props.store;
    return (
      <div>
        {JSON.stringify(resourceDetails)}
        <center>
        <h2>{this.state.heading}</h2>
        </center>
          {resourceDetails.map((resource, i) => {
            return(
              <div key={i}>
                <p>{resource.name}</p>
                <p>NEED TO ADD MATERIAL UI TEXT FIELDS</p>
                <p>NEED TO CREATE PUT ROUTE</p>



              </div>
            )
          })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EditResource);

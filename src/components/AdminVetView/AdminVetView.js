import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../AdminVetView/AdminVetView.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AdminVetView extends Component {
  state = {
    heading: 'Admin Vet View',
  };


  render() {
    // line below is equivalent to this.props.store.details
    const {details} = this.props.store;
    return (
      <div className="container">
        <center>
          {JSON.stringify(this.props.store.details)}
        <h2>{this.state.heading}</h2>
        </center>
          {details.map((vet, i) => {
            return(
              <div className="flex-grid" key={i}>
                  <div className="col">
                    <p>First Name: {vet.first_name}</p>
                    <p>Last Name: {vet.last_name}</p>
                    <p>Email: {vet.email}</p>
                    <p>Date of Birth:{vet.date_of_birth}</p>
                    <p>Number: {vet.number}</p>
                    <p>Gender: {vet.gender_id}</p>
                    <p>Marital Status: {vet.married_id}</p>
                    <p>Children: {vet.children}</p>
                    <p>Home Living Situation: {vet.homeless}</p>
                    <p>Current Address: {vet.current_address}</p>
                    <p>City: {vet.city}</p>
                    <p>State: {vet.state_id}</p>
                    <p>Zipcode: {vet.zipcode}</p>
                  </div>
                <div className="col">
                  <p>Country: {vet.country_id}</p>
                  <p>Mailing Address: {vet.mailing_address}</p>
                  <p>Branch: {vet.branch_id}</p>
                  <p>Rank: {vet.rank_id}</p>
                  <p>Start Date: {vet.start_date}</p>
                  <p>End Date: {vet.end_date}</p>
                  <p>Status: {vet.status_id}</p>
                  <p>Discharge: {vet.discharge_id}</p>
                  <p>Malady: {vet.injury_id}</p>
                  <p>Compensation: {vet.compensation}</p>
                  <p>Percentage: {vet.description}</p>
                  <p>Danger Areas: {vet.danger_areas}</p>
                  <p>Purple Heart: {vet.purple_heart}</p>
                </div>
            </div>
          )})}
          <hr></hr>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminVetView);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../AdminVetView/AdminVetView.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


// TO DO LIST:
// Style this page


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const conversion = (newBoolean) => {
    if(newBoolean === false){
      return 'No';
    } else if (newBoolean === true){
      return 'Yes';
    }
}


class AdminVetView extends Component {
  state = {
    boolean: []
  };


  goBackHome = () => {
    console.log('Going back to Admin Landing Page');
    this.props.history.push('/adminlanding');
  }

  render() {
    // line below is equivalent to this.props.store.details
    const {details} = this.props.store;
    return (
      <div className="container">
        <center>
          {JSON.stringify(this.props.store.details)}
        <h2>Admin Vet View</h2>
        </center>
          {details.map((vet, i) => {
            // CONDITIONAL RENDER BOOLEAN VALUES TO YES OR NO 
            return(
              <div className="flex-grid" key={i}>
                  <div className="col">
                    <p>Name: {vet.first_name} {vet.last_name}</p>
                    <p>Email: {vet.email}</p>
                    <p>Date of Birth:{vet.date_of_birth}</p>
                    <p>Number: {vet.number}</p>
                    <p>Gender: {vet.gender}</p>
                    <p>Marital Status: {vet.married}</p>
                    <p>Children: {vet.children}</p>
                    <p>Home Living Situation: {conversion(vet.homeless)}</p>
                    <p>Current Address: {vet.current_address}</p>
                    <p>City: {vet.city}</p>
                    <p>State: {vet.state}</p>
                    <p>Zipcode: {vet.zipcode}</p>
                    <p>Country: {vet.country}</p>
                  </div>
                <div className="col">
                  <p>City2: {vet.city2}</p>
                  <p>Zipcode2: {vet.zipcode2}</p>
                  <p>County2: {vet.country2}</p>
                  <p>Mailing Address: {vet.mailing_address}</p>
                  <p>Branch: {vet.branch}</p>
                  <p>Rank: {vet.rank}</p>
                  <p>Start Date: {vet.start_date}</p>
                  <p>End Date: {vet.end_date}</p>
                  <p>Discharge: {vet.discharge}</p>
                  <p>Malady: {vet.injury}</p>
                  <p>Compensation: {conversion(vet.compensation)}</p>
                  <p>Percentage: {vet.percentage}</p>
                  <p>Danger Areas: {conversion(vet.danger_areas)}</p>
                  <p>Purple Heart: {conversion(vet.purple_heart)}</p>
                </div>
            </div>
          )})}
          <hr></hr>
          <center>
            <Button  
              className="admin-landing-button" variant="contained" 
              onClick={this.goBackHome}>Admin Landing Page</Button>
          </center>
      </div>
    );
  }
}


export default connect(mapStoreToProps)(withStyles(styles)(AdminVetView));

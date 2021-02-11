import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../AdminVetView/AdminVetView.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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
    const {details} = this.props.store;
      const { classes } = this.props;
        return (
          <div className="container">
            <center>
              {JSON.stringify(this.props.store.details)}
            <h2>Admin Vet View</h2>
            </center>
              {details.map((vet, i) => {
                // CONDITIONAL RENDER BOOLEAN VALUES TO YES OR NO 
                return(
                  <div key={i}>
                    <Paper className={classes.root} elevation={1}>
                      <hr></hr>
                      <Typography component="p">Name: {vet.first_name} {vet.last_name}</Typography>
                      <Typography component="p">Email: {vet.email}</Typography>
                      <Typography component="p">Date of Birth:{vet.date_of_birth}</Typography>
                      <Typography component="p">Number: {vet.number}</Typography>
                      <Typography component="p">Gender: {vet.gender}</Typography>
                      <Typography component="p">Marital Status: {vet.married}</Typography>
                      <Typography component="p">Children: {vet.children}</Typography>
                      <Typography component="p">Home Living Situation: {conversion(vet.homeless)}</Typography>
                      <Typography component="p">Current Address: {vet.current_address}</Typography>
                      <Typography component="p">City: {vet.city}</Typography>
                      <Typography component="p">State: {vet.state}</Typography>
                      <Typography component="p">Zipcode: {vet.zipcode}</Typography>
                      <Typography component="p">Country: {vet.country}</Typography>
                      <Typography component="p">Mailing Address: {vet.mailing_address}</Typography>
                      <Typography component="p">City2: {vet.city2}</Typography>
                      <Typography component="p">State2: {vet.state_id2}</Typography>
                      <Typography component="p">Zipcode2: {vet.zipcode2}</Typography>
                      <Typography component="p">Country2: {vet.country2}</Typography>
                      <Typography component="p">Branch: {vet.branch}</Typography>
                      <Typography component="p">Rank: {vet.rank}</Typography>
                      <Typography component="p">Start Date: {vet.start_date}</Typography>
                      <Typography component="p">End Date: {vet.end_date}</Typography>
                      <Typography component="p">Discharge: {vet.discharge}</Typography>
                      <Typography component="p">Malady: {vet.injury}</Typography>
                      <Typography component="p">Compensation: {conversion(vet.compensation)}</Typography>
                      <Typography component="p">Percentage: {vet.percentage}</Typography>
                      <Typography component="p">Danger Areas: {conversion(vet.danger_areas)}</Typography>
                      <Typography component="p">Purple Heart: {conversion(vet.purple_heart)}</Typography>
                      <hr></hr>
                    </Paper>
                  <br></br>
                </div>
              )})}
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

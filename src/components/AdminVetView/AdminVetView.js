import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../AdminVetView/AdminVetView.css';
import Fab from '@material-ui/core/Fab';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
import HomeIcon from '@material-ui/icons/Home';
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
              {details.map((vet, i) => {
                return(
                  <div key={i}>
                    <Paper className={classes.root} elevation={1}>
                      <hr></hr>
                      <div className="flex-grid">
                        <div className="col">
                          <Typography variant="h5" className="font" component="h5">Demographics</Typography>
                            <Typography className="font" component="p">Name: {vet.first_name} {vet.last_name}</Typography>
                            <Typography className="font" component="p">Email: {vet.email}</Typography>
                            <Typography className="font" component="p">Date of Birth: {vet.to_char}</Typography>
                            <Typography className="font" component="p">Number: {vet.number}</Typography>
                            <Typography className="font" component="p">Gender: {vet.gender}</Typography>
                            <Typography className="font" component="p">Marital Status: {vet.married}</Typography>
                            <Typography className="font" component="p">Children: {vet.children}</Typography>
                            <Typography className="font" component="p">Experiencing Homelessness? {conversion(vet.homeless)}</Typography>
                            <br></br>
                          <Typography variant="h5" className="font" component="h5">Address</Typography>
                            <Typography className="font" component="p"> {vet.current_address}</Typography>
                            <Typography className="font" component="p"> {vet.city}, {vet.state}</Typography>
                            <Typography className="font" component="p"> {vet.zipcode}</Typography>
                            <Typography className="font" component="p"> {vet.country}</Typography>
                        </div>
                        <div className="col">
                          {/* COMMENTING THE BELOW OUT FOR NOW */}
                          {/* <Typography component="p">Mailing Address: {vet.mailing_address}</Typography>
                          <Typography component="p">City2: {vet.city2}</Typography>
                          <Typography component="p">State2: {vet.state_id2}</Typography>
                          <Typography component="p">Zipcode2: {vet.zipcode2}</Typography>
                        <Typography component="p">Country2: {vet.country2}</Typography> */}
                          <Typography variant="h5" component="h4">Military Demographic:</Typography>
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
                        </div>
                      </div>
                      <hr></hr>
                    </Paper>
                  <br></br>
                              <div>
              {/* <Fab  
                className="admin-landing-button" variant="contained" 
                  style={{
                    borderRadius: 35,
                    backgroundColor: '#AFFA3D',
                    fontFamily: 'orbitron',
                  }}
                onClick={this.goBackHome}>
                  <SaveTwoToneIcon />
              </Fab> */}
                <span className="space-between-buttons">&nbsp;&nbsp;</span>
              <Fab  
                className="admin-landing-button" variant="contained" 
                  style={{
                    borderRadius: 35,
                    backgroundColor: '#AFFA3D',
                    fontFamily: 'orbitron',
                  }}
                onClick={this.goBackHome}><HomeIcon />
              </Fab>
              </div>
                </div>
              )})}
            </div>
      );
  }
}


export default connect(mapStoreToProps)(withStyles(styles)(AdminVetView));

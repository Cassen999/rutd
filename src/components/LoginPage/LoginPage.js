import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
//import DemographicsForm from '../Demographics/DemographicsForm'
// import VetMatches from '../VetMatches/VetMatches'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import Demographic from '../Demographic/Demographic'
// import ServiceHistory from '../ServiceHistory/ServiceHistory';
// import Health from '../Health/Health'
// import Compensation from '../Compensation/Compensation'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
       
        <center>
        <LoginForm />
          <Button
            // className="btn btn_asLink"
            className={classes.button}
            variant="contained"
            style={{
              borderRadius: 35,
              backgroundColor: '#AFFA3D',
              fontFamily: 'orbitron',
            }}
            onClick={() => {
              this.props.history.push('/registration');
            }}
          >
            Register
          </Button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(LoginPage));

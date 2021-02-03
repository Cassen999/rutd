import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
//import DemographicsForm from '../Demographics/DemographicsForm'
// import VetMatches from '../VetMatches/VetMatches'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Demographics from '../Demographics/Demographics'
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
        <LoginForm />
        <Demographics/>
        <center>
          <Button
            // className="btn btn_asLink"
            className={classes.button}
            variant="contained"
            onClick={() => {
              this.props.history.push('/registration');
            }}
          >
            Register
          </Button>
          <br></br>
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => {
              console.log('PLACEHOLDER FOR ORG REGISTRATION')
              // this.props.history.push('/orgRegistration');
            }}
          >
            Register for Organizations
          </Button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(LoginPage));

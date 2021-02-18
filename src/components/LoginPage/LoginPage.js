import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

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

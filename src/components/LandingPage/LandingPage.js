import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './LandingPage.css';
import RegisterForm from '../AccountRegisterForm/AccountRegisterPage';

class LandingPage extends Component {

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container">
        <div className="grid">
          <div className="grid-col grid-col_4">
            <RegisterForm />

            <center>
              <h4>Already a Member?</h4>
              <Button 
                style={{
                  borderRadius: 35,
                  backgroundColor: '#AFFA3D',
                  fontFamily: 'orbitron',
                }}
                className="btn btn_sizeSm" onClick={this.onLogin}>
                Login
              </Button>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(withStyles(styles)(LandingPage));

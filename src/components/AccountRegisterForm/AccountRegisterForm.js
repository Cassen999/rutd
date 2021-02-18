import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import green from '@material-ui/core/colors/green';
import Image from '../../Images/black-logo.png';

const styles = theme =>  ({
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
    button: {
      margin: theme.spacing.unit,
    },
});

class AccountRegisterForm extends Component {
  state = {
    username: '',
    password: '',
    type: '0'
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.type === '1') {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          type: this.state.type
        },
      });
    }
    else {
      alert('This app is intended for Veteran use')
    }
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.registerUser}>
        <div className="formPanel">
          <img className="form-logo border-radius-img" src={Image} alt="Logo"/>
          <center>
            <h2>Register User</h2>
            {this.props.store.errors.registrationMessage && (
              <h3 className="alert" role="alert">
                {this.props.store.errors.registrationMessage}
              </h3>
            )}
            <div>
              <label htmlFor="username">
                Username:
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  required
                  onChange={this.handleInputChangeFor('username')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  required
                  onChange={this.handleInputChangeFor('password')}
                />
              </label>
            </div>
            <h4 className="margin-question">Are you a Veteran?</h4>
            <label>Yes</label>
              <Radio
                checked={this.state.type === '1'}
                onChange={this.handleInputChangeFor('type')}
                value='1'
                name="Yes"
                aria-label="Yes"
                classes={{
                  root: classes.root,
                  checked: classes.checked,
              }}
              />
              <label>No</label>
              <Radio
                checked={this.state.type === '0'}
                onChange={this.handleInputChangeFor('type')}
                value='0'
                name="No"
                aria-label="No"
                classes={{
                  root: classes.root,
                  checked: classes.checked,
              }}
              />
            <div>
              <Button className={classes.button} 
                style={{
                  borderRadius: 35,
                  backgroundColor: '#AFFA3D',
                  fontFamily: 'orbitron'
                }}
                variant="contained" 
                value="Register" 
                type="submit" 
                name="submit" 
                >Register</Button>
            </div>
        </center>
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AccountRegisterForm));


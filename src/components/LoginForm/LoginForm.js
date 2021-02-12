import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Image from '../../Images/black-logo.png';
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



class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    type: ''
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
          type: this.state.type
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.login}>
      <div className="formPanel">
        <img className="form-logo border-radius-img" src={Image} alt="Logo"/>
        <center>
          <p>Log in if you have been here before</p>
          
          {this.props.store.errors.loginMessage && (
            <h3 className="alert" role="alert">
              {this.props.store.errors.loginMessage}
            </h3>
          )}
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                required
                value={this.state.username}
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
                required
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <Button className={classes.button} 
              variant="contained" 
              type="submit" 
              name="submit" 
              color="primary">Log In</Button>
          </div>
        </center>
        </div>
      </form>

    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(LoginForm));

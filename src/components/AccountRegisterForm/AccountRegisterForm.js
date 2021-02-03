import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import green from '@material-ui/core/colors/green';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';


const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class AccountRegisterForm extends Component {
  state = {
    username: '',
    password: '',
    type: ''
  };

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_ACCT_TYPE'})
  }

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
        type: this.state.type
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const vetType = 1
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        {JSON.stringify(this.state)}
        <div className="container">
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
            <h4>Are you a Veteran?</h4>
            <label>Yes</label>
              <Radio
              checked={this.state.type === vetType}
              onChange={this.handleInputChangeFor('type')}
              value={vetType}
              name="Yes"
              aria-label="Yes"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
              />
              <label>No</label>
              <Radio
              checked={this.state.type === ''}
              onChange={this.handleInputChangeFor('type')}
              value=''
              name="No"
              aria-label="No"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
              />
            <div>
              <input className="btn" type="submit" name="submit" value="Register" />
            </div>
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AccountRegisterForm));


import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import green from '@material-ui/core/colors/green';
import swal from 'sweetalert';

const styles = theme => ({
  textField: {
    width: "50%",
    background: "white",
    borderRadius: "4px",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }, 
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class VetFindMatches extends Component {
  state = {
    textbox: '',
    safe: ''
  };

  handleMatchClick = (vetId) => {
    if (this.state.safe === '') {
      swal({
        title: "Your safety is our main concern",
        text: "Please let us know if you are safe by clicking yes or no under the text box",
        icon: "info"
      })
    } else if (this.state.safe === 'no') {
      swal({
        title: "Your safety is our main concern",
        icon: "warning",
        text: "Please call one of these numbers for emergency help: Veteran’s Crisis Line - 1-800-273-8255, National Suicide Prevention Lifeline - 800-273-8255, The STARRY Counseling Program Crisis Hotline - 800-440-9789",
      })
        .then(() => {
          this.props.dispatch({ type: "FETCH_ALL_MATCHES", payload: vetId });
          this.props.history.push("/vetmatches");
        })
    } else if (this.state.safe === 'yes') {
      this.props.dispatch({ type: "FETCH_ALL_MATCHES", payload: vetId });
      this.props.history.push("/vetmatches");
    }
  };

  handleTextboxChange = (event) => {
    this.setState({
      textbox: event.target.value
    })
  }

  handleRadioSelect = (event) => {
    this.setState({
      safe: event.target.value
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <center>
          <h2>Before we find your resources...</h2>
        </center>
        <form className={classes.container} noValidate autoComplete="off">
          {JSON.stringify(this.state)}
          <TextField
            id="outlined-multiline-flexible"
            label="Enter the specifics of what you would like help with. You may enter whatever you like."
            multiline
            value={this.state.textbox}
            onChange={this.handleTextboxChange}
            className={classes.textField}
            margin="normal"
            helperText="*Everything entered here will be sent to the resource(s) you choose to contact on the next page*"
            variant="outlined"
          />
        </form>
        <label>Yes</label>
        <Radio
          checked={this.state.safe === 'yes'}
          onChange={this.handleRadioSelect}
          value='yes'
          name="Yes"
          aria-label="Yes"
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
          />
        <label>No</label>
        <Radio
          checked={this.state.safe === 'no'}
          onChange={this.handleRadioSelect}
          value='no'
          name="No"
          aria-label="No"
          classes={{
            root: classes.root,
            checked: classes.checked,
        }}
        />
        <Button 
          onClick={(event) => this.handleMatchClick(1)}
          color="primary"
          variant="contained">
          See Matches
        </Button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(VetFindMatches));
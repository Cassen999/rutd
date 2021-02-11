import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textField: {
    width: "100%",
    height: "100%",
    background: "white",
    borderRadius: "4px"
  }, 
  button: {
    margin: theme.spacing.unit,
  },
});

class VetFindMatches extends Component {
  state = {
    textbox: '',
  };

  handleMatchClick = (vetId) => {
    this.props.dispatch({ type: "FETCH_ALL_MATCHES", payload: vetId });
    this.props.history.push("/vetmatches");
  };

  render() {
    return (
      <div>
        <button onClick={(event) => this.handleMatchClick(1)}>
          See Matches
        </button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(VetFindMatches);

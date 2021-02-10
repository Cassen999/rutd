import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class VetFindMatches extends Component {
  state = {
    heading: "Vet Find Matches",
  };

  handleMatchClick = (vetId) => {
    this.props.dispatch({ type: "FETCH_ALL_MATCHES", payload: vetId });
    this.props.history.push();
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleMatchClick(1)}>See Matches</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(VetFindMatches);

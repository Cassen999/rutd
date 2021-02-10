import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import ProgressBar from "../ProgressBar/ProgressBar";

class VetMatches extends Component {
  state = {
    heading: "Vet Matches",
  };

  contactOrg = (event) => {
    console.log("Contacting Org");
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_CATEGORY" });
    this.props.dispatch({ type: "FETCH_MATCH" });
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        REDUX STATE: {JSON.stringify(this.props.store)}
        <button onClick={(event) => this.props.history.push("/home")}>
          BACK TO HOME
        </button>
        <button onClick={(event) => this.contactOrg(event)}>CONTACT ORG</button>
        <ProgressBar value={30} />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(VetMatches);

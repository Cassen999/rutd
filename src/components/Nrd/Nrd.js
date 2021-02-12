import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class Nrd extends Component {
  state = {
    heading: "Class Component",
  };

  render() {
    return (
      <iframe
        title="How Can I overwrite the styles from the src content?"
        src="https://nrd.gov/getSearchWidget"
        width="450%"
        height="630px"
        scrolling="no"
      />
    );
  }
}

export default connect(mapStoreToProps)(Nrd);

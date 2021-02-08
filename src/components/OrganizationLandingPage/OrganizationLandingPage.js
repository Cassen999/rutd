import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../AdminVetView/AdminVetView.css";

// TO DO LIST ON THIS PAGE:
// - Make this page editable for admin with text fields
// -
// -
// -
// -

// const styles = (theme) => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//   },
//   dense: {
//     marginTop: 19,
//   },
//   menu: {
//     width: 200,
//   },
// });

class OrganizationLandingPage extends Component {
  state = {
    heading: "Org registration",
    name: "",
  };

  handleChange = () => {
    console.log("WOOT");
  };

  render() {
    // line below is equivalent to this.props.store.details
    const { resourceDetails } = this.props.store;
    return (
      <div className="container">
        <center>
          {JSON.stringify(this.props.store.resourceDetails)}
          <h2>{this.state.heading}</h2>
        </center>
        {resourceDetails.map((resource, i) => {
          return (
            <div className="flex-grid" key={i}>
              <div className="col">
                <h3>Name: {resource.name}</h3>
                <p>Number: {resource.number}</p>
                <p>Email: {resource.email}</p>
                <p>City:{resource.city}</p>
                <p>State: {resource.state_id}</p>
                <p>Website:{resource.website}</p>
                <p>Description: {resource.description}</p>
                <p>Categories: {resource.categories_id}</p>
                {/* <p>PDF:{resource.pdf}</p> */}
                {/* <p>Pictures: {resource.pictures}</p> */}
              </div>
              <div className="col">
                <h3>PLACEHOLDER: PLACEHOLDER VALUE </h3>
                <p>PLACEHOLDER: PLACEHOLDER VALUE </p>
                <p>PLACEHOLDER: PLACEHOLDER VALUE </p>
                <p>PLACEHOLDER: PLACEHOLDER VALUE</p>
                <p>PLACEHOLDER: PLACEHOLDER VALUE </p>
                <p>PLACEHOLDER: PLACEHOLDER VALUE </p>
                <p>PLACEHOLDER: PLACEHOLDER VALUE </p>
                <p>PLACEHOLDER: PLACEHOLDER VALUE </p>
              </div>
            </div>
          );
        })}
        <hr></hr>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(OrganizationLandingPage);

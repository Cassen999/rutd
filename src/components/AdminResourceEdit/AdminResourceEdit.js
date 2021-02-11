import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../AdminVetView/AdminVetView.css";
import Button from "@material-ui/core/Button";
// import { withStyles } from '@material-ui/core/styles';

// TO DO LIST ON THIS PAGE:
// - Make this page editable for admin with text fields

// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   input: {
//     display: 'none',
//   },
// });

class AdminResourceEdit extends Component {
  state = {
    heading: "Admin Resource Edit",
    name: "",
  };

  handleChange = () => {
    console.log("WOOT");
  };

  goBackHome = () => {
    console.log("Going back to Admin Landing Page");
    this.props.history.push("/adminlanding");
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
                <h3>Resource Name: {resource.name}</h3>
                <p>Number: {resource.number}</p>
                <p>Email: {resource.email}</p>
                <p>City: {resource.city}</p>
                <p>State: {resource.state}</p>
                <p>Website:{resource.website}</p>
                <p>Description: {resource.description}</p>
                <p>Categories: {resource.categories}</p>
                {/* <p>PDF:{resource.pdf}</p> */}
                {/* <p>Pictures: {resource.pictures}</p> */}
              </div>
            </div>
          );
        })}
        <hr></hr>
        <center>
          <Button
            className="admin-landing-button"
            variant="contained"
            onClick={this.goBackHome}
          >
            Admin Landing Page
          </Button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminResourceEdit);

import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../AdminVetView/AdminVetView.css";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


// TO DO LIST ON THIS PAGE:
// - Rename this component to AdminResourceView
// - Edit button to allow admins to edit organization profile
// - create saga with PUT route to update organization
// - create reducer to accept updated organization details
// - this.props.history.push('/adminResourceEdit')


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

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

  editOrganization = (id) => {
    console.log("Editing Organization with ID:", id);
    this.props.history.push("/adminOrgEdit", id)
  }

  render() {
    // line below is equivalent to this.props.store.details
    const { resourceDetails } = this.props.store;
        const { classes } = this.props;
          return (
            <div className="container">
              <center>
                {JSON.stringify(this.props.store.resourceDetails)}
                <h2>{this.state.heading}</h2>
              </center>
              {resourceDetails.map((resource, i) => {
                return (
                  <div key={i}>
                    <Paper className={classes.root} elevation={1}>
                      <Typography variant="h5" component="h3">
                        Organization Details
                      </Typography>
                      <Typography component="p">
                        Name: {resource.name}
                      </Typography>
                      <Typography component="p">
                        Number: {resource.number}
                      </Typography>
                      <Typography component="p">
                        Email: {resource.email}
                      </Typography>
                      <Typography component="p">
                        City: {resource.city}
                      </Typography>
                      <Typography component="p">
                        State: {resource.state}
                      </Typography>
                      <Typography component="p">
                        Website:{ resource.website}
                      </Typography>
                      <Typography component="p">
                        Description: {resource.description}
                      </Typography>
                      <Typography component="p">
                        Categories: {resource.categories}
                      </Typography>
                      <Typography component="p">
                        PLACEHOLDER FOR PDF
                      </Typography>
                      <Typography component="p">
                        PLACEHOLDER FOR PICTURES
                      </Typography>
                    </Paper>
                    <br></br>
                    <Button  
                      className="edit-org-btn" variant="contained" 
                      onClick={() => this.editOrganization(resource.org_id)}>Edit</Button>
                  </div>
                );
              })}
              <hr></hr>
                <center>
                  <Button  
                    className="admin-landing-button" variant="contained" 
                    onClick={this.goBackHome}>Admin Landing Page</Button>
                    <span>&nbsp;&nbsp;</span>
                </center>
            </div>
          );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AdminResourceEdit));

import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import { Button, Grid, Paper, withStyles, TextField } from "@material-ui/core";

const styles = {
    inputs: {
        width: "",
        paddingTop: "",
        verticalAlign: "",
        fontFamily: "",
    },
};

class Gender extends Component {
  state = {
    vet: {
      gender: "",
    },
  };

  handleInputChange = (event, inputProperty) => {
    console.log("Handling input-change...");
    console.log("Setting state...");

    this.setState(
      {
        vet: {
          ...this.state.vet,
          [inputProperty]: event.target.value,
          user_id: this.props.store.user.id,
        },
      },
      function () {
        console.log("state has been set:", this.state.vet);
      }
    );
  };

    saveGender = () => {
        let vetVar = this.state.vet

        if (vetVar.gender === '') {
            alert("Pleas indicate your gender.");
        } else {
            console.log(
                `Saving ${vetVar.gender} to Database...`
            );

      this.props.dispatch({
        type: "ADD_GENDER",
        payload: this.state.vet,
      });

      this.setState(
        {
          vet: {
            gender: "",
          },
        },
        function () {
          console.log("state has been reset");
        }
      );
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <h1>Gender Entry</h1>
        <Grid container spacing={2} direction="column">
          <Paper elevation={10}>
            <form>
              <br />

              <Grid item xs={12.0} sm={12}>
                <TextField
                  variant="outlined"
                  label="Gender"
                  name="gender"
                  value={this.state.vet.gender}
                  onChange={(event) => this.handleInputChange(event, "gender")}
                />
                <br />
                <Button
                  onClick={(event) => {
                    this.saveGender(event);
                  }}
                >
                  SAVE
                </Button>
                <br />
              </Grid>
            </form>
          </Paper>
        </Grid>
      </>
    ); //END return
  } //END render
} //END Name

export default connect(mapStoreToProps)(withStyles(styles)(Gender));

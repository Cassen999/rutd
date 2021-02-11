import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import { Button, Grid, Paper, withStyles, FormControl, InputLabel, Select, 
  MenuItem, FormHelperText } from "@material-ui/core";

const styles = {
    inputs: {
        width: "",
        paddingTop: "",
        verticalAlign: "",
        fontFamily: "",
    },
};

class Malady extends Component {
  componentDidMount() {
    console.log("Mounted");
    this.props.dispatch({ type: "FETCH_MALADY" });
  }
  state = {
    vet: {
      malady: "",
    },
  };

  handleClick = (event) => {
    console.log("Handling input-change...");
    console.log("Setting state...");

    this.setState(
      {
        vet: {
          ...this.state.vet,
          malady: event.target.value,
          user_id: this.props.store.user.id,
        },
      },
      function () {
        console.log("state has been set:", this.state.vet);
      }
    );
  };

    saveMalady = () => {
        let vetVar = this.state.vet

        if (vetVar.malady === '') {
            alert("Pleas indicate your malady.");
        } else {
            console.log(
                `Saving ${vetVar.malady} to Database...`
            );

      this.props.dispatch({
        type: "ADD_MALADY",
        payload: this.state.vet,
      });

      this.setState(
        {
          vet: {
            malady: "",
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
    const malady = this.props.store.maladyReducer;

    return (
      <>
              MALADY REDUCER: {JSON.stringify(this.props.store.maladyReducer)} 

        <h1>Malady Entry</h1>
        <Grid container spacing={2} direction="column">
          <Paper elevation={10}>
          <FormControl className={classes.formControl}>
              <InputLabel>
                SELECT
              </InputLabel>
              <Select
                // value={age}
                //onChange={(event)=>this.handleChange(event)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {malady.map((each) => (
                  <MenuItem 
                  key={each}
                  value={each.id}
                  onClick={(event)=>this.handleClick(event)}
                   >
                    {each.description}</MenuItem>
                ))}

                
              </Select>
              <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
                <br />
                <Button
                  onClick={(event) => {
                    this.saveMalady(event);
                  }}
                >
                  SAVE
                </Button>
                <br />
          </Paper>
        </Grid>
      </>
    ); //END return
  } //END render
} //END Name

export default connect(mapStoreToProps)(withStyles(styles)(Malady));

import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import {
  Button, Grid, Paper, withStyles, FormControl, InputLabel, Select,
  MenuItem, FormHelperText
} from "@material-ui/core";

const styles = {
  inputs: {
    width: "",
    paddingTop: "",
    verticalAlign: "",
    fontFamily: "",
  },
};

class Category extends Component {
  componentDidMount() {
    console.log("Mounted");
    this.props.dispatch({ type: "FETCH_CATEGORY" });
  }
  state = {
    vet: {
      category: "",
    },
  };

  handleClick = (event) => {
    console.log("Handling input-change...");
    console.log("Setting state...");

    this.setState(
      {
        vet: {
          ...this.state.vet,
          category: event.target.value,
          user_id: this.props.store.user.id,
        },
      },
      function () {
        console.log("state has been set:", this.state.vet);
      }
    );
  };

  saveCategory = () => {
    let vetVar = this.state.vet

    if (vetVar.category === '') {
      alert("Please select a category.");
    } else {
      console.log(
        `Saving ${vetVar.category} to Database...`
      );

      this.props.dispatch({
        type: "ADD_CATEGORY",
        payload: this.state.vet,
      });

      this.setState(
        {
          vet: {
            category: "",
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
    const categories = this.props.store.categoryReducer;

    return (
      <>
        CATEGORY REDUCER: {JSON.stringify(categories)}

        <h1>Category Entry</h1>
        <Grid container spacing={2} direction="column">
          <Paper elevation={10}>
            <FormControl>
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
                {categories.map((category) => (
                  <MenuItem
                    key={category}
                    value={category.id}
                    onClick={(event) => this.handleClick(event)}
                  >
                    {category.description}</MenuItem>
                ))}

              </Select>
              <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
            <br />
            <Button
              onClick={(event) => {
                this.saveCategory(event);
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

export default connect(mapStoreToProps)(withStyles(styles)(Category));

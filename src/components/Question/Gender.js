import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import { Button, Paper, withStyles, MenuItem, FormControl, 
  Select} from "@material-ui/core";
import swal from 'sweetalert';

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
    gender: "",
  };

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_GENDER'})
  }

  saveGender = () => {
    const vetVar = this.state.vet
    if(vetVar.gender === '') {
      swal("Pleas indicate your gender.")
    }
    else {
      console.log(`Saving ${vetVar.gender} to Database...`);
      this.props.dispatch({type: "UPDATE_GENDER", payload: this.state.vet});
    }
    this.setState({
        gender: ''
    })
  };

  handleChange = (event) => {
    event.preventDefault();
    console.log("Handling input-change...");
    console.log("Setting state...");
    this.setState({
      vet: event.target.value
    }, 
    function () {
      console.log("state has been set:", this.state.vet);
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
      <h1>Gender Entry</h1>
        <Paper elevation={10}>
          <form>
            <FormControl>
              <Select
                value={this.state.gender}
                onChange={this.handleChange}
                inputProps={{
                  name: 'gender',
                  id: 'gender-simple',
                }}>
                  {this.props.store.dropdownReducer.map((gender, i) => {
                    return(
                      <MenuItem key={i} value={gender.id}>{gender.description}</MenuItem>
                    )
                  })}
              </Select>
            </FormControl>
            <br />
            <Button
              onClick={() => this.saveGender()}
              variant="contained"
              color="primary"
              >
              SAVE
            </Button>
            <br />
          </form>
        </Paper>
      </>
    ); //END return
  } //END render
} //END Name

export default connect(mapStoreToProps)(withStyles(styles)(Gender));

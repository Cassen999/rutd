import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import {
  withStyles,
  Select,
  MenuItem,
  TextField,
  FormControl,
} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import SaveTwoToneIcon from "@material-ui/icons/SaveTwoTone";

const styles = (theme) => ({
  inputs: {
    width: "400",
    paddingTop: "",
    verticalAlign: "",
    fontFamily: "",
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

// This component displays the intake questionaire for the 'Personal Information' tab \\
class DemographicQuestion extends Component {
  // Get all of the Gender and Marraiage values for selection
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_GENDER" });
    this.props.dispatch({ type: "FETCH_MARRIAGE" });
  }

  state = {
    vet: {
      first_name: this.props.store.vetReducer.first_name,
      last_name: this.props.store.vetReducer.last_name,
      email: this.props.store.vetReducer.email,
      birth: this.props.store.vetReducer.date_of_birth,
      gender: this.props.store.vetReducer.gender_id,
      phone: this.props.store.vetReducer.number,
      marriage: this.props.store.vetReducer.married_id,
      children: this.props.store.vetReducer.children,
      homeless: this.props.store.vetReducer.homeless,
      homeAddress: this.props.store.vetReducer.current_address,
      homeCity: this.props.store.vetReducer.city,
      homeState: this.props.store.vetReducer.state_id,
      homeZip: this.props.store.vetReducer.zipcode,
      homeCountry: this.props.store.vetReducer.country_id,
      mailAddress: this.props.store.vetReducer.mailing_address,
      mailCity: this.props.store.vetReducer.city2,
      mailState: this.props.store.vetReducer.state_id2,
      mailZip: this.props.store.vetReducer.zipcode2,
      mailCountry: this.props.store.vetReducer.country_id2,
    },
  };

  handleChangeForGender = (event) => {
    event.preventDefault();
    this.setState({
      vet: {
        ...this.state.vet,
        gender: event.target.value,
      },
    });
  };

  handleChangeForMarriage = (event) => {
    event.preventDefault();
    this.setState(
      {
        vet: {
          ...this.state.vet,
          marriage: event.target.value,
        },
      });
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
      });
  };

  handleInputChangeAddress = (event, inputProperty) => {
    console.log("Handling input-change...");
    console.log("Setting state...");
    this.setState(
      {
        vet: {
          ...this.state.vet,
          [inputProperty]: event.target.value,
          user_id: this.props.store.user.id,
        },
      });
  };

  saveDemographic = () => {
    let vetVar = this.state.vet;
    if (vetVar.first_name === "" || vetVar.last_name === "") {
      alert("A first and last name is required for registration.");
    } else {
      this.props.dispatch({
        type: "ADD_DEMOGRAPHIC",
        payload: this.state.vet,
      });
      this.setState({
        vet: {
          first_name: "",
          last_name: "",
          email: "",
          birth: "",
          gender: "",
          phone: "",
          marriage: "",
          children: "",
          homeless: "",
          homeAddress: "",
          homeApartment: "",
          homeCity: "",
          homeState: "",
          homeZip: "",
          homeCountry: "",
          mailAddress: "",
          mailApartment: "",
          mailCity: "",
          mailState: "",
          mailZip: "",
          mailCountry: "",
        },
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <form>
        <div className="container">
          <h1 className="grey">Personal Information</h1>
          <hr className="float-left no-margin hr-width"></hr>
          <br></br>
          <div>
            <TextField
              variant="outlined"
              label="First Name"
              name="first_name"
              value={this.state.vet.first_name}
              onChange={(event) => this.handleInputChange(event, "first_name")}
            />
            <span>&nbsp;&nbsp;&nbsp;</span>
            <TextField
              variant="outlined"
              label="Last Name"
              name="last_name"
              value={this.state.vet.last_name}
              onChange={(event) => this.handleInputChange(event, "last_name")}
            />
            <span>&nbsp;&nbsp;&nbsp;</span>
            <TextField
              variant="outlined"
              label="Date of Birth"
              name="birth"
              value={this.state.vet.dOB}
              onChange={(event) => this.handleInputChange(event, "birth")}
            />
            <span>&nbsp;&nbsp;&nbsp;</span>
            <br></br>
            <TextField
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
              id="standard-textarea"
              variant="outlined"
              label="Phone Number"
              name="phone"
              value={this.state.vet.phone}
              onChange={(event) => this.handleInputChange(event, "phone")}
            />
            <span>&nbsp;&nbsp;&nbsp;</span>
            <TextField
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
              variant="outlined"
              label="Email"
              name="email"
              value={this.state.vet.email}
              onChange={(event) => this.handleInputChange(event, "email")}
            />
          </div>
          <div>
            <br></br>
            <br></br>
            GENDER
            <span>&nbsp;&nbsp;&nbsp;</span>
            <FormControl className={classes.formControl}>
              <Select
                onChange={(event) =>
                  this.handleChangeForGender(event, "gender")
                }
                value={this.state.vet.gender}
                inputProps={{
                  name: "gender",
                  id: "gender-simple",
                }}
              >
                {this.props.store.genderDropdownReducer.map((gender, i) => {
                  return (
                    <MenuItem key={i} value={gender.id}>
                      {gender.description}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <span>&nbsp;&nbsp;&nbsp;</span>
            MARRIAGE
            <span>&nbsp;&nbsp;&nbsp;</span>
            <FormControl className={classes.formControl}>
              <Select
                onChange={(event) =>
                  this.handleChangeForMarriage(event, "marriage")
                }
                value={this.state.vet.marriage}
                inputProps={{
                  name: "marriage",
                  id: "marriage-simple",
                }}
              >
                {this.props.store.marriageDropdownReducer.map((marriage, i) => {
                  return (
                    <MenuItem key={i} value={marriage.id}>
                      {marriage.description}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <br></br>
            <br></br>
            ARE YOU CURRENTLY HOMELESS?
            <span>&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <FormControl className={classes.formControl}>
              <Select
                onClick={(event) => this.handleInputChange(event, "homeless")}
                value={this.state.vet.homeless}
                inputProps={{
                  name: 'homeless',
                  id: 'homeless-simple',
                }}>
                <MenuItem 
                    value='false'
                >
                        NO
                </MenuItem>
                <MenuItem
                    value='true'
                >
                  YES
                </MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <br></br>
            HOME ADDRESS
            <br></br>
            <TextField
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                width: "30rem",
              }}
              id="standard-textarea"
              variant="outlined"
              label="Address"
              name="homeAddress"
              value={this.state.vet.homeAddress}
              onChange={(event) => this.handleInputChange(event, "homeAddress")}
            />
            <br></br>
            <TextField
              style={{ marginBottom: "1rem", marginRight: "1rem" }}
              id="standard-textarea"
              variant="outlined"
              label="City"
              name="homeCity"
              value={this.state.vet.homeCity}
              onChange={(event) => this.handleInputChange(event, "homeCity")}
            />
            <TextField
              style={{ marginBottom: "1rem" }}
              id="standard-textarea"
              variant="outlined"
              label="State"
              name="homeState"
              value={this.state.vet.homeState}
              onChange={(event) => this.handleInputChange(event, "homeState")}
            />
            <br></br>
            <TextField
              style={{ marginRight: "1rem" }}
              id="standard-textarea"
              variant="outlined"
              label="Zip Code"
              name="homeZip"
              value={this.state.vet.homeZip}
              onChange={(event) => this.handleInputChange(event, "homeZip")}
            />
            <TextField
              id="standard-textarea"
              variant="outlined"
              label="Country"
              name="homeCountry"
              value={this.state.vet.homeCountry}
              onChange={(event) => this.handleInputChange(event, "homeCountry")}
            />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div>
            MAIL ADDRESS
            <br></br>
            <TextField
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                width: "30rem",
              }}
              variant="outlined"
              label="Address"
              name="mailAddress"
              value={this.state.vet.mailAddress}
              onChange={(event) => this.handleInputChange(event, "mailAddress")}
            />
            <br></br>
            <TextField
              style={{ marginRight: "1rem" }}
              id="standard-textarea"
              variant="outlined"
              label="City"
              name="mailCity"
              value={this.state.vet.mailCity}
              onChange={(event) => this.handleInputChange(event, "mailCity")}
            />
            <TextField
              style={{ marginRight: "1rem" }}
              id="standard-textarea"
              variant="outlined"
              label="State"
              name="mailState"
              value={this.state.vet.mailState}
              onChange={(event) => this.handleInputChange(event, "mailState")}
            />
            <br></br>
            <TextField
              style={{ marginRight: "1rem", marginTop: "1rem" }}
              id="standard-textarea"
              variant="outlined"
              label="Zip Code"
              name="mailZip"
              value={this.state.vet.mailZip}
              onChange={(event) => this.handleInputChange(event, "mailZip")}
            />
            <TextField
              style={{ marginRight: "1rem", marginTop: "1rem" }}
              id="standard-textarea"
              variant="outlined"
              label="Country"
              name="mailCountry"
              value={this.state.vet.mailCountry}
              onChange={(event) => this.handleInputChange(event, "mailCountry")}
            />
            <br></br>
            <br></br>
            <br></br>
            <Fab
              className="float-right"
              style={{
                borderRadius: 35,
                backgroundColor: "#AFFA3D",
                fontFamily: "orbitron",
              }}
              onClick={(event) => {
                this.saveDemographic(event);
              }}
            >
              <SaveTwoToneIcon />
            </Fab>
          </div>
        </div>
      </form>
    );
  }
} 

export default connect(mapStoreToProps)(
  withStyles(styles)(DemographicQuestion)
);

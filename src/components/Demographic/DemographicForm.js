import React, { Component } from "react";
//import { useDispatch } from 'react-redux';
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import { Button, Grid, Paper, withStyles, TextField } from "@material-ui/core";
import Name from '../Question/Name'
import Email from '../Question/Email'
import Birth from '../Question/Birth'
import Phone from '../Question/Phone'
import Gender from '../Question/Gender'
import Marriage from '../Question/Marriage'
import Children from '../Question/Children'
import Homeless from '../Question/Homeless'
import HomeAddress from '../Question/HomeAddress'
import MailAddress from '../Question/MailAddress'

const styles = {
  inputs: {
    width: "",
    paddingTop: "0px",
    verticalAlign: "middle",
    fontFamily: "Arial",
  },
};

class DemographicForm extends Component {
  state = {
    newVet: {
      first_name: "",
      last_name: "",
      email: "",
      date_of_birth: "",
      number: "",
      gender_id: "",
      married_id: "",
      children: "",
      homeless: "",
      current_address: "",
      city: "",
      state_id: "",
      zipcode: "",
      country_id: "",
      mailing_address: "",
    },
  };

  handleInputChange = (event, inputProperty) => {
    console.log("Handling input-change...");
    console.log("Setting state...");

    this.setState(
      {
        newVet: {
          ...this.state.newVet,
          [inputProperty]: event.target.value,
          user_id: this.props.store.user.id,
        },
      },
      function () {
        console.log("state has been set:", this.state);
      }
    );
  };

  // saveDemographic = () => {
  //   if (this.state.newVet.first_name === "") {
  //     alert("A name is required for registration.");
  //   } else {
  //     console.log(
  //       `Saving ${this.state.newVet.first_name}'s demographics to Database...`
  //     );
  //     //Clear message... should say Hello!
  //     //console.log(`Sending ${this.state.newArt} to DB.`);

  //     this.props.dispatch({
  //       type: "ADD_DEMOGRAPHIC",
  //       payload: this.state.newVet,
  //     });
  //     this.setState(
  //       {
  //         newVet: {
  //           first_name: "",
  //           last_name: "",
  //           email: "",
  //           date_of_birth: "",
  //           number: "",
  //           gender_id: "",
  //           married_id: "",
  //           children: "",
  //           homeless: "",
  //           current_address: "",
  //           city: "",
  //           state_id: "",
  //           zipcode: "",
  //           country_id: "",
  //           mailing_address: "",
  //         },
  //       },
  //       function () {
  //         // {this.props.history.push('/servicehistory')}
  //         console.log("state has been reset");
  //       }
  //     );
  //   }
  // };

  render() {
    const { classes } = this.props;

    return (
      <>
        <center>
          <h1>DemographicForm</h1>
          <Grid
            container
            //   className={classes.paper}
            //alignItems="center"
            spacing={2}
            direction="column"
          >
            <Paper elevation={10}>
              <form>
                <br />

                <Name />
                <Email />
                <Birth />
                <Phone />
                <Gender />
                <Marriage />
                <Children />
                <Homeless />
                <HomeAddress />
                <MailAddress />
                <br />

              </form>
            </Paper>
          </Grid>
        </center>
      </>
    ); //END return
  } //END render
} //END DemographicsForm

export default connect(mapStoreToProps)(withStyles(styles)(DemographicForm));

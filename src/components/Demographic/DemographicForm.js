import React, { Component } from "react";
//import { useDispatch } from 'react-redux';//
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import {Grid, Paper, withStyles} from "@material-ui/core";
//REGISTRATION QUESTIONS
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
import Branch from '../Question/Branch'
import Rank from '../Question/Rank'
import StartDate from '../Question/StartDate'
import EndDate from '../Question/EndDate'
import Status from '../Question/Status'
import Discharge from '../Question/Discharge'
import Malady from '../Question/Malady'
import Compensation from '../Question/Compensation'
import Hazard from '../Question/Hazard'
import PurpleHeart from '../Question/PurpleHeart'

const styles = {
  inputs: {
    width: "",
    paddingTop: "0px",
    verticalAlign: "middle",
    fontFamily: "Arial",
  },
};

class DemographicForm extends Component {

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

  render() {
    // const { classes } = this.props;

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
                <Branch/>
                <Rank/>
                <StartDate/>
                <EndDate/>
                <Status/>
                <Discharge/>
                <Malady/>
                <Compensation/>
                <Hazard/>
                <PurpleHeart/>
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

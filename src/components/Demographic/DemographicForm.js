import React, { Component } from "react";
//import { useDispatch } from 'react-redux';//
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import {Grid, Paper, withStyles, Button} from "@material-ui/core";
import ProgressBar from "../ProgressBar/ProgressBar";
import { withRouter } from "react-router-dom";
import compose from 'recompose/compose';
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
//CATEGORIES
import Category from '../Category/Category'

const styles = (theme) => ({
  inputs: {
    width: "",
    paddingTop: "0px",
    verticalAlign: "middle",
    fontFamily: "Arial",
  },
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 500,
    height: 350,
    margin: "-175px 0 0 -250px",
    backgroundColor: "#de9595",
    border: "2px solid #ADFA3B",
    paddingBottom: "20px",
  },
  formContainer: {
    textAlign: "center",
  }
  // progress: {
  //   float: "right",
  // }
});

class DemographicForm extends Component {

  state = {
    formIndex: 0,
  }

  getProgress = (formIndex) => {
    let currentProgress = (formIndex / 20) * 100;
    return currentProgress;
  }

  handleNext = () => {
    this.setState({ formIndex: this.state.formIndex + 1 });
  }

  handleBack = () => {
    this.setState({ formIndex: this.state.formIndex - 1 });
  }

  render() {
    const formIndex = this.state.formIndex;
    const { classes } = this.props;
    const intakeForm = [
      <Name />,
      <Email />,
      <Birth />,
      <Phone />,
      <Gender />,
      <Marriage />,
      <Children />,
      <Homeless />,
      <HomeAddress />,
      <MailAddress />,
      <Branch/>,
      <Rank/>,
      <StartDate/>,
      <EndDate/>,
      <Status/>,
      <Discharge/>,
      <Malady/>,
      <Compensation/>,
      <Hazard/>,
      <PurpleHeart/>,
      <Category/>
    ];

    const formComplete = (
      <div className={classes.paper}>
        <h2>Thank you for submitting your information!</h2>
        <Button
          variant="contained"
          onClick={this.handleNext}
        >
          All Done!
        </Button> 
      </div>
    );

    return (
      <div className={classes.formContainer}>
          <h1>Demographic Form</h1>
          <Grid
            container
            spacing={2}
            direction="column"
          >
            <ProgressBar value={this.getProgress(formIndex)} />
            <Paper elevation={10}>
                {intakeForm.map((formItem, index) => {
                    let displayItem;
                    if (formIndex === index) {
                      displayItem = formItem;
                    } else if (formIndex === intakeForm.length) {
                      displayItem = formComplete;
                    }
                    return displayItem;                                         
                })}
              
              {0 < formIndex < intakeForm.length &&
                <Button
                  variant="contained"
                  onClick={this.handleBack}
                >
                  Back
                </Button>
              }
              {formIndex < intakeForm.length &&
              <Button
                variant="contained"
                onClick={this.handleNext}
              >
                Next
              </Button>
              }
            </Paper>
          </Grid>
      </div>
    ); //END return
  } //END render
} //END DemographicsForm

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStoreToProps)
)(withRouter(DemographicForm));

// export default connect(mapStoreToProps)(withStyles(styles)(DemographicForm));

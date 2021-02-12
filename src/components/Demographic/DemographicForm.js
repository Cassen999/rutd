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
import Phone from '../Question/phone'
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
    console.log('Current Form Index is:', formIndex);
    return (
      <>
        <center>
          <h1>Demographic Form</h1>
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

                {formIndex <= 0 &&
                  <Name />
                }

                {formIndex === 1 &&
                  <Email />
                }

                {formIndex === 2 &&
                  <Birth />
                }

                {formIndex === 3 &&
                  <Phone />
                }

                {formIndex === 4 &&
                  <Gender />
                }

                {formIndex === 5 &&
                  <Marriage />
                }

                {formIndex === 6 &&
                  <Children />
                }

                {formIndex === 7 &&
                  <Homeless />
                }

                {formIndex === 8 &&
                  <HomeAddress />
                }

                {formIndex === 9 &&
                  <MailAddress />
                }

                {formIndex === 10 &&
                  <Branch/>
                }

                {formIndex === 11 &&
                  <Rank/>
                }

                {formIndex === 12 &&
                  <StartDate/>
                }

                {formIndex === 13 &&
                  <EndDate/>
                }

                {formIndex === 14 &&
                  <Status/>
                }

                {formIndex === 15 &&
                  <Discharge/>
                }

                {formIndex === 16 &&
                  <Malady/>
                }

                {formIndex === 17 &&
                  <Compensation/>
                }

                {formIndex === 18 &&
                  <Hazard/>
                }

                {formIndex === 19 &&
                  <PurpleHeart/>
                }

                {formIndex >= 20 &&
                  <div className={classes.paper}>
                    <h2>Thank you for submitting your information!</h2>
                    <Button
                      variant="contained"
                      onClick={this.handleNext}
                    >
                      All Done!
                    </Button> 
                  </div>
                }                                

                <br />
              </form>
              <ProgressBar value={this.getProgress(formIndex)} />
              {formIndex > 0 &&
                <Button
                  variant="contained"
                  onClick={this.handleBack}
                >
                  Back
                </Button>
              }
              {formIndex < 20 &&
              <Button
                variant="contained"
                onClick={this.handleNext}
              >
                Next
              </Button>
              }
            </Paper>
          </Grid>
        </center>
      </>
    ); //END return
  } //END render
} //END DemographicsForm

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStoreToProps)
)(withRouter(DemographicForm));

// export default connect(mapStoreToProps)(withStyles(styles)(DemographicForm));

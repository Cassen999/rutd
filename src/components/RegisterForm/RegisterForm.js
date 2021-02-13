import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import {withStyles, Button} from "@material-ui/core";
import ProgressBar from "../ProgressBar/ProgressBar";
import { withRouter } from "react-router-dom";
import compose from 'recompose/compose';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
//REGISTRATION QUESTIONS

//CATEGORIES
import Category from '../Category/Category'

const styles = ({
  button: {
    marginTop: '1%',
  },
  complete: {
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
  },
  root: {
    backgroundColor: '#ADFA3B',
    width: 500,
  },
});

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

class RegisterForm extends Component {

  state = {
    btnValue: 0,
  }

  handleBack = () => {
    this.setState({ formIndex: this.state.formIndex - 1 });
  }

  demoBtn = () => {
    this.setState({
      btnValue: 1
    })
  }

  serviceBtn = () => {
    this.setState({
      btnValue: 2
    })
  }

  healthBtn = () => {
    this.setState({
      btnValue: 3
    })
  }

  miscBtn = () => {
    this.setState({
      btnValue: 4
    })
  }
    
  renderQuestions = () => {
    const demoForm = []
    if(this.state.btnValue === 1) {
      return ('')
    }
    else if(this.state.btnValue === 2) {
      return ('')
    }
    else if(this.state.btnValue === 3) {
      return ('')
    }
    else if(this.state.btnValue === 4) {
      return ('')
    }
  }

  render() {
    const formIndex = this.state.formIndex;
    const { classes } = this.props;
    const theme = useTheme;
    return (
      <div>
        {JSON.stringify(this.state.btnValue)}
         <Button 
          onClick={(event) => this.demoBtn(event)}
          variant="contained"
          color="primary">
            Demographics
          </Button>
          <Button 
          onClick={(event) => this.serviceBtn(event)}
          variant="contained"
          color="primary">
            Service History
          </Button>
          <Button 
          onClick={(event) => this.healthBtn(event)}
          variant="contained"
          color="primary">
            Health
          </Button>
          <Button 
          onClick={(event) => this.miscBtn(event)}
          variant="contained"
          color="primary">
            Misc Questions
          </Button>
          {this.renderQuestions()}
          <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          <TabContainer dir={theme.direction}>Item One</TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
        </SwipeableViews>
      </div>
    ); //END return
  } //END render
} //END DemographicsForm

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStoreToProps)
)(withRouter(RegisterForm));
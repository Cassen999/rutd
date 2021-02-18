import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import DemographicQuestion from "../DemographicQuestions/DemographicQuestion";
import MiscQuestions from "../MiscQuestions/MiscQuestions";
import ServiceHistoryQuestions from "../ServiceHistoryQuestions/ServiceHistoryQuestions";
import MaladyQuestions from "../MaladyQuestions/MaladyQuestions";

const styles = {
  button: {
    marginTop: "1%",
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
    backgroundColor: "#ADFA3B",
    width: 500,
  },
};

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
  };

  handleBack = () => {
    this.setState({ formIndex: this.state.formIndex - 1 });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const theme = useTheme;
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Personal Info" />
            <Tab label="Service History" />
            <Tab label="Health" />
            <Tab label="Miscellaneous" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <DemographicQuestion />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <ServiceHistoryQuestions />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <MaladyQuestions />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <MiscQuestions />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(
  withStyles(styles)(withRouter(RegisterForm))
);

import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import clsx from 'clsx';
import {  withStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Radio,
  Grid  } from "@material-ui/core";

const styles = (theme) => ({
  inputs: {
    width: "",
    paddingTop: "0px",
    verticalAlign: "middle",
    fontFamily: "Arial",
  },
  menu: {
    width: 200,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 20,
    height: 20,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#5b6357',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 20,
      height: 20,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#727372',
    },
  },
  gridContainer: {
    marginLeft: theme.spacing(2),
  } 
});
class Hazard extends Component {

  state = {
    imminentDanger: false,
    dangerDescription: ''
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_PERCENTAGE" });
  }

  handleSelect = (event, answer) => {
    this.setState({ imminentDanger: answer });
  }

  // handleChange = (event) => {
  //   this.setState({ value: event.target.value });
  // };
  // handleInputChange = (event, inputProperty) => {
  //   console.log("Handling input-change...");
  //   console.log("Setting state...");
  //   this.setState(
  //     {
  //       newVet: {
  //         ...this.state.newVet,
  //         [inputProperty]: event.target.value,
  //         user_id: this.props.store.user.id,
  //       },
  //     },
  //     function () {
  //       console.log("state has been set:", this.state);
  //     }
  //   );
  // };
  
  // handleClick = (event, percentId) => {
  //   console.log(percentId);
  //   this.setState(
  //     {
  //       percentage: percentId,
  //     },
  //     function () {
  //       console.log(`percentage ID: ${this.state.percentage}`);
  //     }
  //   );
  // };
  // handleTextChange = (name) => (event) => {
  //   this.setState(
  //     {
  //       ...this.state,
  //       [name]: event.target.value,
  //     },
  //     function () {
  //       console.log(`State has been set: ${this.state.multiline}`);
  //     }
  //   );
  // };

  // handleInputChangeFor = (propertyName) => (event) => {
  //   this.setState(
  //     {
  //       [propertyName]: event.target.value,
  //     },
  //     function () {
  //       console.log(`State has been set`);
  //     }
  //   );
  // };

  // saveCompensation = () => {
  //   if (this.state.newVet.first_name === "") {
  //     alert("A name is required for registration.");
  //   } else {
  //     console.log(
  //       `Saving ${this.state.newVet.first_name}'s demographics to Database...`
  //     );
  //     this.props.dispatch({
  //       type: "UPDATE_COMPENSATION",
  //       payload: this.state.newVet,
  //     });
  //     this.setState({
  //       newVet: {
  //         compensation: "",
  //         percentage: "",
  //         danger_areas: "",
  //         purple_heart: "",
  //       },
  //     });
  //   }
  
  render() {
    const { classes } = this.props;
    //const percentages = this.props.store.percentageReducer;
    const imminentDanger = this.state.imminentDanger;
    return (
      <>
        <h1>Hazard Form</h1>
            <p>Have you been deployed to imminent danger areas</p>
            {/* <label>Yes</label>
            <Radio
              checked={this.state.typeTwo === "3"}
              onChange={this.handleInputChangeFor("typeTwo")}
              value="3"
              name="Yes"
              aria-label="Yes"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            /> */}
                {/* <label>No</label>
                  <Radio
                    checked={this.state.typeTwo === "2"}
                    onChange={this.handleInputChangeFor("typeTwo")}
                    value="2"
                    name="No"
                    aria-label="No"
                    classes={{
                      root: classes.root,
                      checked: classes.checkedTwo,
                    }}
                  /> */}
          <Grid
            container
            spacing={1}
            direction="row"
            className={classes.gridContainer}
          >
            <Grid
              container
              item
              xs={6}
              sm={3}
              spacing={2}
              justify="flex-start"
              alignItems="center"     
            >
              <Grid item xs={3}>
            <label className={classes.label}>Yes</label>
            <Radio
              className={classes.root}
              disableRipple
              color="default"
              checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
              icon={<span className={classes.icon} />}      
              checked={imminentDanger === true}
              value={true}
              onClick={(event) => this.handleSelect(event, true)}
            />
             </Grid>
              <Grid item xs={3}>
  

                <label className={classes.label}>No</label>         
                <Radio
                  className={classes.root}
                  disableRipple
                  color="default"
                  checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                  icon={<span className={classes.icon} />}
                  checked={imminentDanger === false} 
                  value={false}
                  onClick={(event) => this.handleSelect(event, false)}
                />
              </Grid>
              <Grid item xs={3} justify="flex-start">
            {this.state.typeTwo === "3" && ( // if this part is false, the next part won't show
              <form>
                <TextField
                  id="standard-multiline-flexible"
                  label="Describe danger areas"
                  multiline
                  rows="5"
                  variant="outlined"
                  rowsMax="10"
                  value={this.state.multiline}
                  onChange={this.handleTextChange("multiline")}
                  className={classes.textField}
                  margin="normal"
                />
              </form>
            )}
               </Grid>
            </Grid>
          </Grid>
      </>
    ); //END return
  } //END render
} //END DemographicsForm
export default connect(mapStoreToProps)(withStyles(styles)(Hazard));

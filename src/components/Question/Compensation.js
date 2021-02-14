import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
// import {
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
// } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

// const styles = (theme) => ({
//   inputs: {
//     width: "",
//     paddingTop: "0px",
//     verticalAlign: "middle",
//     fontFamily: "Arial",
//   },
//   menu: {
//     width: 200,
//   },
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//   },
//   dense: {
//     marginTop: 19,
//   },
// });
class Compensation extends Component {

  state = {
    percentageId: "0",
    type: "0",
    typeTwo: "2",
    value: "0",
    open: false,
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_PERCENTAGE" });
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ compensation: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  // handleChange = (event) => {
  //   this.setState({ value: event.target.value });
  // };
  
  // handleClick = (event, compensationId) => {
  //   event.preventDefault();
  //   this.props.dispatch({
  //     type: "SET_COMPENSATION",
  //     payload: compensationId
  //   })
  // }

  // handleInputChangeFor = (propertyName) => (event) => {
  //   this.setState({
  //       [propertyName]: event.target.value,
  //   });
  // }

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
  // };

  render() {
    const { classes } = this.props;
    const percentages = this.props.store.percentageReducer;
    const open = this.state.open;
    console.log(this.props.store.vetReducer);
    return (   
      <>
        <Button className={classes.button} onClick={this.handleOpen}>
          Open the select
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="open-comp-label">Compensation Percentage</InputLabel>
          <Select
            labelId="open-comp-label"
            id="open-comp"
            open={open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.percentageId}
            onChange={this.handleChange}
          >
            {percentages.map((percent) => (
              <MenuItem
                key={percent.description}
                value={percent.id}
              >
                {percent.description}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </>

      //   <>
      //     <h1>Compensation Form</h1>
      //     <p>Are you currently registered with the VA?</p>
      //     <label>Yes</label>
      //     <Radio
      //       checked={this.state.type === "1"}
      //       onChange={this.handleInputChangeFor("type")}
      //       value="1"
      //       name="Yes"
      //       aria-label="Yes"
      //       classes={{
      //         root: classes.root,
      //         checked: classes.checked,
      //       }}
      //     />
      //     <label>No</label>
      //     <Radio
      //       checked={this.state.type === "0"}
      //       onChange={this.handleInputChangeFor("type")}
      //       value="0"
      //       name="No"
      //       aria-label="No"
      //       classes={{
      //         root: classes.root,
      //         checked: classes.checked,
      //       }}
      //     />
      //     <div>
      //       {" "}
      //       &nbsp;
      //       {this.state.type === "1" && ( // if this part is false, the next part won't show
      //         <FormControl component="fieldset" className={classes.formControl}>
      //           <FormLabel component="legend">Compensation Rate</FormLabel>
      //           <RadioGroup
      //             aria-label="Compensation Rate"
      //             name="gender1"
      //             className={classes.group}
      //             value={this.state.value}
      //             onChange={this.handleChange}
      //           >
      //             {percentages.map((percent) => (

      //               <FormControlLabel
      //                 key={percent.description}
      //                 value={percent.id}
      //                 checked={this.state.value === percent.id}                    
      //                 control={
      //                   <Radio
      //                      onClick={(event) => this.props.updateCompState(event, 'compensationId')}
      //                   />
      //                 }
      //                 label={percent.description}
      //               />
      //             ))}
      //           </RadioGroup>
      //         </FormControl>
      //       )}
      //     </div>
      // </>
    ); //END return
  } //END render
} //END DemographicsForm
export default connect(mapStoreToProps)(withStyles()(Compensation));

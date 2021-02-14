import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import compose from 'recompose/compose';
import clsx from 'clsx';
import {  withStyles,
          InputLabel,
          MenuItem,
          FormControl,
          Select,
          Radio,
          Grid  } from "@material-ui/core";  
                
const styles = (theme) => ({
  formControl: {
    minWidth: 185,
  },
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#b2b5ae',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#727372',
    },
  },
  text: {
    fontSize: '20px',
    fontFamily: 'Roboto',
  },
  label: {
    fontSize: '18px',
    fontFamily: 'Roboto',
  },
  heading: {
    fontFamily: 'Roboto',
  },
  gridContainer: {
    marginLeft: theme.spacing(2),
  }  
});
class Compensation extends Component {

  state = {
    compPercentId: 0,
    open: false,
    registered: false,
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_PERCENTAGE" });
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ compPercentId: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleRegistered = () => {
    this.setState({ registered: true });
  }

  noCompensation = () => {
    this.setState({
      compPercentId: 0,
      registered: false
    });
  }

  handleSelect = (event, answer) => {
    this.setState({ registered: answer });
    if (answer === false) {
      this.setState({ compPercentId: 0 });
    }
  }



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
    const registered = this.state.registered;
    return (   
      <>
        <h1 className={classes.heading}>Compensation Form</h1>
        <p className={classes.text}>Are you currently registered with the VA?</p>
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
            >
              <Grid
                container
                item
                xs={12} 
                spacing={1}
              >
                <Grid item xs={3}>
                  <label className={classes.label}>Yes</label>
                  <Radio
                    className={classes.root}
                    disableRipple
                    color="default"
                    checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                    icon={<span className={classes.icon} />}      
                    checked={registered === true}
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
                    checked={registered === false} 
                    value={false}
                    onClick={(event) => this.handleSelect(event, false)}
                  />
                </Grid>
              </Grid>
              <Grid item xs={3} justify="flex-start">
                {registered === true && (
                  <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel id="open-comp-label">Compensation Rate</InputLabel>
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
                )}
              </Grid>
            </Grid>
          </Grid>
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
export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStoreToProps)
)(Compensation);

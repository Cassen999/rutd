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
class Compensation extends Component {

  state = {
    //compPercentId: 0,
    open: false,
    //registered: false,
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

  handleSelect = (event, answer) => {
    this.setState({ registered: answer });
    if (answer === false) {
      this.setState({ compPercentId: 0 });
    }
  }

  render() {
    const { classes } = this.props;
    const percentages = this.props.store.percentageReducer;
    const open = this.state.open;
    const registered = this.props.registered;
    const compensationId = this.props.compensationId;
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
                  checked={registered === true}
                  value={true}
                  //onClick={(event) => this.handleSelect(event, true)}
                  onClick={(event) => this.props.updateState(event, 'registered')}
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
                  //onClick={(event) => this.handleSelect(event, false)}
                  onClick={(event) => this.props.updateState(event, 'registered')}
                />
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
                      value={compensationId}
                      onChange={(event) => this.props.updateState(event, 'compensationId')}
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
    ); 
  }
} 
export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStoreToProps)
)(Compensation);

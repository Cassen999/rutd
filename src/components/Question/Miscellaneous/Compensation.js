import React, { Component } from "react";
import mapStoreToProps from "../../../redux/mapStoreToProps";
import { connect } from "react-redux";
import clsx from 'clsx';
import {  
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Radio,
  Grid  
} from "@material-ui/core";                
class Compensation extends Component {

  state = {
    open: false,
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_PERCENTAGE" });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const classes = this.props.classes;
    const percentages = this.props.store.percentageReducer;
    const open = this.state.open;
    const registered = this.props.registered;
    const compensationId = this.props.compensationId;
    return (   
      <>
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
                  onClick={(event) => this.props.updateState(event, 'registered')}
                />
              </Grid>
              <Grid item xs={3}>
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
export default connect(mapStoreToProps)(Compensation);
  


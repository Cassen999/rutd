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
  Grid,
  Typography 
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
      <div 
        //className="container"
        display="inline-flex"
      >
        <Typography className={classes.textControl}>Are you currently registered with the VA?</Typography>
              <div 
                className={classes.selectContainer}
                display="flex"  
              >
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
          </div>
      </div>
    ); 
  }
} 
export default connect(mapStoreToProps)(Compensation);
  


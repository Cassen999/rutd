import React, { Component } from 'react';
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import {withStyles, Select, MenuItem, FormControl, TextField} from "@material-ui/core";
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import Fab from '@material-ui/core/Fab';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';

const styles = theme => ({
    inputs: {
        width: "400",
        paddingTop: "",
        verticalAlign: "",
        fontFamily: "",
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    root: {
        color: green[600],
        '&$checked': {
        color: green[500],
    },
  },
  checked: {},
});

// This component displays the intake questionaire for the 'Service History' tab \\
class ServiceHistoryQuestions extends Component {
    state = { 
        status: this.props.store.vetReducer.status_id,
        discharge: this.props.store.vetReducer.discharge_id,
        branch: this.props.store.vetReducer.branch_id,
        rank: this.props.store.vetReducer.rank_id,
        selectedValue: 'yes',
        startDate: this.props.store.vetReducer.start_date,
        endDate: this.props.store.vetReducer.end_date
     };

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_BRANCH'});
    this.props.dispatch({type: 'FETCH_STATUS'});
    this.props.dispatch({type: 'FETCH_DISCHARGE'});
    this.props.dispatch({type: 'FETCH_RANK'});
  }
    
     saveServiceHistory = () => {
        console.log('Saving serviceHistory');
        this.props.dispatch({type: 'UPDATE_SERVICE_HISTORY', payload: this.state})
        this.props.dispatch({type: 'FETCH_VET_INFO', payload: this.props.store.user.id})
    };


    handleInputChange = (propertyName, event) =>{
        console.log('drop down status', this.state)
        this.setState({
            [propertyName]: event.target.value
        })
    }

    handleRadioButtons = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render(props) { 
        const {classes} = this.props;
        return ( 
            <div className="container">
                <h1 className="grey">Service History</h1>
                <hr className="float-left no-margin hr-width"></hr>
                <br></br>
                <p>Branch of Service</p>
                <FormControl className={classes.formControl}> 
                    <Select
                        onClick={(event) => this.handleInputChange('branch', event)}
                        value={this.state.branch}
                        inputProps={{
                        name: 'branch',
                        id: 'branch-simple',
                        }}>
                        {this.props.store.branchReducer.map((branch, i) => {
                            return(
                                <MenuItem key={i}
                                    value={branch.id}>
                                    {branch.description}
                                </MenuItem>
                            )
                        })}
                    </Select> 
                </FormControl>
                {/* -------------------------------------------------- */}
                <p>Service Status</p>
                <FormControl className={classes.formControl}> 
                    <Select
                        onClick={(event) => this.handleInputChange('status', event)}
                        value={this.state.status}
                        inputProps={{
                        name: 'status',
                        id: 'status-simple',
                        }}>
                        {this.props.store.statusReducer.map((status, i) => {
                            return(
                                <MenuItem key={i}
                                    value={status.id}>
                                    {status.description}
                                </MenuItem>
                            )
                        })}
                    
                    </Select> 
                </FormControl>
                {/* -------------------------------------------------- */}
                <br></br>
                <p>Type of Discharge</p>
                 <FormControl className={classes.formControl}> 
                    <Select
                        onClick={(event) => this.handleInputChange('discharge', event)}
                        value={this.state.discharge}
                        inputProps={{
                        name: 'discharge',
                        id: 'discharge-simple',
                        }}>
                        {this.props.store.dischargeReducer.map((discharge, i) => {
                            return(
                                <MenuItem key={i}
                                    value={discharge.id}>
                                    {discharge.description}
                                </MenuItem>
                            )
                        })}
                    </Select> 
                </FormControl>
                {/* -------------------------------------------------- */}
                <br></br>
                <p>Highest Attained Rank</p>
                <FormControl className={classes.formControl}> 
                    <Select
                        onClick={(event) => this.handleInputChange('rank', event)}
                        value={this.state.rank}
                        inputProps={{
                        name: 'rank',
                        id: 'rank-simple',
                        }}>
                        {this.props.store.rankReducer.map((rank, i) => {
                            return(
                                <MenuItem key={i}
                                    value={rank.id}>
                                    {rank.description}
                                </MenuItem>
                            )
                        })}
                    </Select> 
                </FormControl>
                {/* -------------------------------------------------- */}
                <br></br>
                <p>Service Start Date</p>
                 <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        label="Service Start Date"
                        type="date"
                        onChange={(event) => this.handleInputChange('startDate', event)}
                        defaultValue="2021-01-01"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                {/* -------------------------------------------------- */}
                <p>Service End Date</p>
                    <TextField
                        id="date"
                        label="Service End Date"
                        type="date"
                        defaultValue="2021-01-01"
                        onChange={(event) => this.handleInputChange('endDate', event)}
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>
                {/* -------------------------------------------------- */}
                <br></br>
                <p>Are you currently serving or have served in the military on or after September 11, 2001?</p>
                <Radio
                    checked={this.state.selectedValue === 'yes'}
                    onChange={this.handleRadioButtons}
                    value="yes"
                    name="radio-button-demo"
                    aria-label="Yes"
                />Yes
                <Radio
                    checked={this.state.selectedValue === 'no'}
                    onChange={this.handleRadioButtons}
                    value="no"
                    name="radio-button-demo"
                    aria-label="No"
                />No
                {/* -------------------------------------------------- */}
                {JSON.stringify(this.state)}
                <Fab
                    className="float-right"
                    style={{
                        borderRadius: 35,
                        backgroundColor: '#AFFA3D',
                        fontFamily: 'orbitron',
                    }}
                        onClick={(event) => { this.saveServiceHistory(event) }}><SaveTwoToneIcon />
                </Fab>
            </div>
         );
    }
}
 
export default connect(mapStoreToProps)(withStyles(styles)(ServiceHistoryQuestions));
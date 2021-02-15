import React, { Component } from 'react';
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import {withStyles, Select, MenuItem, FormControl } from "@material-ui/core";
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';


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


class ServiceHistoryQuestions extends Component {
    state = { 
        status: '',
        discharge: '',
        branch: '',
        rank: '',
        selectedValue: 'yes',
     }



     handleInputChange = () =>{
         console.log('Handling input for drop down status')
         
     }

    handleRadioButtons = event => {
        this.setState({ selectedValue: event.target.value });
  };

    render() { 
        const {classes} = this.props;
        return ( 
            <div className="container">
                <h1 className="grey">Service History</h1>
                <hr className="float-left no-margin hr-width"></hr>
                <br></br>
                <br></br>
                <FormControl className={classes.formControl}> 
                <p>Service Status</p>
                    <Select
                        onClick={(event) => this.handleInputChange(event, 'status')}
                        value={this.state.status}
                        inputProps={{
                        name: 'status',
                        id: 'status-simple',
                        }}>
                    <MenuItem 
                        value='false'>
                        Active/Return to Active
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Discharged
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        National Guard
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Pending Med Board
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Permanent Disability Retired List
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Reserved
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Retired
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Temporary Disability Retired List
                    </MenuItem>
                    </Select> 
                </FormControl>
                {/* -------------------------------------------------- */}
                <br></br>
                <p>Type of Discharge</p>
                 <FormControl className={classes.formControl}> 
                    <Select
                        onClick={(event) => this.handleInputChange(event, 'discharge')}
                        value={this.state.discharge}
                        inputProps={{
                        name: 'discharge',
                        id: 'discharge-simple',
                        }}>
                    <MenuItem 
                        value='false'>
                        Active
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Administrative
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Bad Conduct Discharge
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        General Under Honorable Conditions
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        General Under Other than Honorable Conditions
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Honorable
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Unknown
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Uncharacterized
                    </MenuItem>
                    </Select> 
                </FormControl>
                {/* -------------------------------------------------- */}
                <br></br>
                <p>Branch of Service</p>
                <FormControl className={classes.formControl}> 
                    <Select
                        onClick={(event) => this.handleInputChange(event, 'branch')}
                        value={this.state.branch}
                        inputProps={{
                        name: 'branch',
                        id: 'branch-simple',
                        }}>
                    <MenuItem 
                        value='false'>
                        Army
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Marine Corps
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Navy
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Air Force
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Space Force
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        Coast Guard
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        National Guard
                    </MenuItem>
                    </Select> 
                </FormControl>
                {/* -------------------------------------------------- */}
                <br></br>
                <p>Highest Attained Rank</p>
                                <FormControl className={classes.formControl}> 
                    <Select
                        onClick={(event) => this.handleInputChange(event, 'rank')}
                        value={this.state.rank}
                        inputProps={{
                        name: 'rank',
                        id: 'rank-simple',
                        }}>
                    <MenuItem 
                        value='false'>
                        E1
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        E2
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        E3
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        E4
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        E5
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        E6
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        E7
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        E8
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        E9
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        O1
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        O2
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        O3
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        O4
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        O5
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        O6
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        O7
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        O8
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        O0
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        10
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        W1
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        W2
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        W3
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        W4
                    </MenuItem>
                    <MenuItem
                        value='true'>
                        W5
                    </MenuItem>
                    </Select> 
                </FormControl>
                {/* -------------------------------------------------- */}
                <br></br>
                <p>Service End Date</p>
                
                {/* -------------------------------------------------- */}
                <br></br>
                <p>Are you currently serving or served in the military on or after September 11, 2001?</p>
                <br></br>
                <p>RADIO BUTTONS HERE</p>
                <Radio
                    checked={this.state.selectedValue === 'yes'}
                    onChange={this.handleChange}
                    value="a"
                    name="radio-button-demo"
                    aria-label="A"
                />
                <Radio
                    checked={this.state.selectedValue === 'no'}
                    onChange={this.handleChange}
                    value="b"
                    name="radio-button-demo"
                    aria-label="B"
                />
                {/* -------------------------------------------------- */}

            </div>
         );
    }
}
 
export default connect(mapStoreToProps)(withStyles(styles)(ServiceHistoryQuestions));
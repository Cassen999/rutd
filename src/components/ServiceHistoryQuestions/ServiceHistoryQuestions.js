import React, { Component } from 'react';
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import {withStyles, Select, MenuItem, FormControl } from "@material-ui/core";


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
});


class ServiceHistoryQuestions extends Component {
    state = { 
        status: '',
        discharge: '',
        branch: ''
     }



     handleInputChange = () =>{
         console.log('Handling input for drop down status')
     }

    render() { 
        const {classes} = this.props;
        return ( 
            <div className="container">
                <h1 className="grey">Service History</h1>
                <hr className="float-left no-margin"></hr>
                <br></br>
                <br></br>
                <FormControl className={classes.formControl}> 
                <p>Service Status:</p>
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
                <p>TYPE OF DISCHARGE DROPDOWN HERE:</p>
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
                <p>BRANCH OF SERVICE DROPDOWN HERE: Army/Marines, etc.</p>
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
                <p>HIGHEST ATTAINED RANK DROPDOWN HERE: Enlisted/Officer, etc</p>
                {/* -------------------------------------------------- */}
                <br></br>
                <p>SERVICE END DATE: ADD A CALENDAR HERE?</p>
                {/* -------------------------------------------------- */}
                <br></br>
                <p>Are you currently serving or served in the military on or after September 11, 2001?</p>
                <p>RADIO BUTTONS HERE</p>
                {/* -------------------------------------------------- */}

            </div>
         );
    }
}
 
export default connect(mapStoreToProps)(withStyles(styles)(ServiceHistoryQuestions));
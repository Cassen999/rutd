import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import { Button, withStyles, Select, MenuItem, TextField } from "@material-ui/core";

const styles = {
    inputs: {
        width: "",
        paddingTop: "",
        verticalAlign: "",
        fontFamily: "",
    },
};

class DemographicQuestion extends Component {

    state = {
        vet: {
                first_name: "",
                last_name: "",
                email: "",
                birth: "",
                gender: "",
                phone: "",
                marriage: "",
                children: "",
                homeless: "",
                homeAddress: {
                                address: '',
                                city: '',
                                state: '',
                                zip: '', 
                                country: '',
                             },                  
                mailAddress: {
                                address: '',
                                city: '',
                                state: '',
                                zip: '', 
                                country: ''
                            }
        }
    }


    handleInputChange = (event, inputProperty) => {
        console.log("Handling input-change...");
        console.log("Setting state...");
        this.setState(
            {
                vet: {
                    ...this.state.vet,
                    [inputProperty]: event.target.value,
                    user_id: this.props.store.user.id,
                },
            });
    };

    saveDemographic = () => {
        let vetVar = this.state.vet
        if (vetVar.first_name === '' || vetVar.last_name === '') {
            alert("A first and last name is required for registration.");
        } else {
            this.props.dispatch({
                type: "ADD_DEMOGRAPHIC",
                payload: this.state.vet,
            });
            this.setState({
                vet: {
                    first_name: "",
                    last_name: "",
                    email: "",
                    birth: "",
                    gender: "",
                    phone: "",
                    marriage: "",
                    children: "",
                    homeless: "",
                    homeAddress: {
                                    address: '',
                                    city: '',
                                    state: '',
                                    zip: '', 
                                    country: '',
                                 },                  
                    mailAddress: {
                                    address: '',
                                    city: '',
                                    state: '',
                                    zip: '', 
                                    country: ''
                                }
            }
            });
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <form>
                <TextField
                    variant="outlined"
                    label="First Name"
                    name="first_name"
                    value={this.state.vet.first_name}
                    onChange={(event) => this.handleInputChange(event, "first_name")}
                />
                <TextField
                    variant="outlined"
                    label="Last Name"
                    name="last_name"
                    value={this.state.vet.last_name}
                    onChange={(event) =>
                        this.handleInputChange(event, "last_name")}
                />
               
                <TextField
                    variant="outlined"
                    label="Email"
                    name="email"
                    value={this.state.vet.email}
                    onChange={(event) => this.handleInputChange(event, "email")}
                />
                
                <TextField
                    variant="outlined"
                    label="Date of Birth"
                    name="birth"
                    value={this.state.vet.dOB}
                    onChange={(event) => this.handleInputChange(event, "birth")}
                />
               
                <Select
                value={this.state.vet.gender}
                onChange={this.handleChange}
                inputProps={{
                  name: 'gender',
                  id: 'gender-simple',
                }}>
                  {this.props.store.dropdownReducer.map((gender, i) => {
                    return(
                      <MenuItem key={i} value={gender.id}>{gender.description}</MenuItem>
                    )
                  })}
                </Select> 

                <TextField
                    id="standard-textarea"
                    variant="outlined"
                    label="Phone Number"
                    name="phone"
                    value={this.state.vet.phone}
                    onChange={(event) => this.handleInputChange(event, "phone")}
                />

                <TextField
                    variant="outlined"
                    label="Marriage"
                    name="marriage"
                    value={this.state.vet.marriage}
                    onChange={(event) => this.handleInputChange(event, "marriage")}
                />

                <TextField
                    variant="outlined"
                    label="Children"
                    name="children"
                    value={this.state.vet.children}
                    onChange={(event) => this.handleInputChange(event, "children")}
                />  

                <TextField
                    variant="outlined"
                    label="homeless"
                    name="homeless"
                    value={this.state.vet.homeless}
                    onChange={(event) => this.handleInputChange(event, "homeless")}
                />
                HOME ADDRESS
                <TextField
                    variant="outlined"
                    label="Address"
                    name="address"
                    value={this.state.vet.homeAddress}
                    onChange={(event) => this.handleInputChange(event, "address")}
                />

                <TextField
                    id="standard-textarea"
                    variant="outlined"
                    label="Apt/PO Box/Bldg"
                    name="apartment"
                    value={this.state.vet.homeAddress.apt}
                    onChange={(event) => this.handleInputChange(event, "apartment")}
                />

                <TextField
                    id="standard-textarea"
                    variant="outlined"
                    label="City"
                    name="city"
                    value={this.state.vet.homeAddress.city}
                    onChange={(event) => this.handleInputChange(event, "city")}
                />

                <TextField
                    id="standard-textarea"
                    variant="outlined"
                    label="State"
                    name="state"
                    value={this.state.vet.homeAddress.state}
                    onChange={(event) => this.handleInputChange(event, "state")}
                />
               
               <TextField
                    id="standard-textarea"
                    variant="outlined"
                    label="Zip Code"
                    name="zip"
                    value={this.state.vet.homeAddress.zip}
                    onChange={(event) => this.handleInputChange(event, "zip")}
                />

                <TextField
                    id="standard-textarea"
                    variant="outlined"
                    label="Country"
                    name="country"
                    value={this.state.vet.homeAddress.country}
                    onChange={(event) => this.handleInputChange(event, "country")}
                />

                MAIL ADDRESS

                <TextField
                    variant="outlined"
                    label="Address"
                    name="address"
                    value={this.state.vet.mailAddress}
                    onChange={(event) => this.handleInputChange(event, "address")}
                />

                <TextField
                    id="standard-textarea"
                    variant="outlined"
                    label="Apt/PO Box/Bldg"
                    name="apartment"
                    value={this.state.vet.mailAddress.apt}
                    onChange={(event) => this.handleInputChange(event, "apartment")}
                />

                <TextField
                    id="standard-textarea"
                    variant="outlined"
                    label="City"
                    name="city"
                    value={this.state.vet.mailAddress.city}
                    onChange={(event) => this.handleInputChange(event, "city")}
                />

                <TextField
                    id="standard-textarea"
                    variant="outlined"
                    label="State"
                    name="state"
                    value={this.state.vet.mailAddress.state}
                    onChange={(event) => this.handleInputChange(event, "state")}
                />
               
               <TextField
                    id="standard-textarea"
                    variant="outlined"
                    label="Zip Code"
                    name="zip"
                    value={this.state.vet.mailAddress.zip}
                    onChange={(event) => this.handleInputChange(event, "zip")}
                />

                <TextField
                    id="standard-textarea"
                    variant="outlined"
                    label="Country"
                    name="country"
                    value={this.state.vet.mailAddress.country}
                    onChange={(event) => this.handleInputChange(event, "country")}
                />

               
                <Button onClick={(event) => { this.saveName(event) }}>SAVE</Button>
                
                
                
                <Button onClick={(event) => { this.saveDOB(event) }}>SAVE</Button>
            </form>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(DemographicQuestion));
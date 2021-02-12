import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import { Button, Grid, Paper, withStyles, TextField } from "@material-ui/core";

const styles = {
    inputs: {
        width: "",
        paddingTop: "",
        verticalAlign: "",
        fontFamily: "",
    },
    paper: {
        paddingBottom: "10px",
        paddingTop: "20px",
        width: "100%",
    },
    gridForm: {
        padding: "3px",
    }
};

class HomeAddress extends Component {
    state = {
        vet: {
            address: "",
            apt: "",
            city: "",
            state: "",
            zip: "",
            country: "",
        },
    };

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
            },
            function () {
                console.log("state has been set:", this.state.vet);
            }
        );
    };

    saveHomeAddress = () => {
        let vetVar = this.state.vet

        if (vetVar.address === '') {
            alert("An home address is required for registration.");
        } else {
            console.log(
                `Saving ${vetVar.homeAddress} to Database...`
            );

            this.props.dispatch({
                type: "UPDATE_HOME_ADDRESS",
                payload: this.state.vet
            });

            this.setState(
                {
                    vet: {
                        address: '',
                        apt: '',
                        city: '',
                        state: '',
                        zip: '',
                        country: ''
                    },
                },
                function () {
                    console.log("state has been reset");
                }
            );
        }

    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <h1>Home Address Entry</h1>
                <Grid 
                    container 
                    spacing={1} 
                    direction="row" 
                    display="inline-flex" 
                    justify="center"
                >
                    <Paper elevation={10} className={classes.paper} >
                        <form className={classes.gridForm}>
                            <Grid 
                                container 
                                item 
                                xs={12}
                                sm={6} 
                                spacing={1} 
                                display="flex"
                            >
                                <Grid item xs={4}>
                                    <TextField
                                        id="standard-textarea"
                                        variant="outlined"
                                        label="Address"
                                        name="address"
                                        value={this.state.vet.address}
                                        onChange={(event) => this.handleInputChange(event, "address")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        id="standard-textarea"
                                        variant="outlined"
                                        label="Apt/PO Box/Bldg"
                                        name="APT"
                                        value={this.state.vet.apt}
                                        onChange={(event) => this.handleInputChange(event, "apt")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        id="standard-textarea"
                                        variant="outlined"
                                        label="City"
                                        name="city"
                                        value={this.state.vet.city}
                                        onChange={(event) => this.handleInputChange(event, "city")}
                                    />
                                </Grid>
                            </Grid>
                            <Grid 
                                container 
                                item 
                                xs={12}
                                sm={6} 
                                spacing={1} 
                                display="flex" 
                            >
                                <Grid item xs={4}>
                                    <TextField
                                        id="standard-textarea"
                                        variant="outlined"
                                        label="State"
                                        name="state"
                                        value={this.state.vet.state}
                                        onChange={(event) => this.handleInputChange(event, "state")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        id="standard-textarea"
                                        variant="outlined"
                                        label="Zip Code"
                                        name="zip"
                                        value={this.state.vet.zip}
                                        onChange={(event) => this.handleInputChange(event, "zip")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        id="standard-textarea"
                                        variant="outlined"
                                        label="Country"
                                        name="country"
                                        value={this.state.vet.country}
                                        onChange={(event) => this.handleInputChange(event, "country")}
                                    />
                                </Grid>                             
                            </Grid>
                            <Grid 
                                container 
                                item 
                                xs={12}
                                sm={6} 
                                spacing={1} 
                                display="flex"
                                justify="center" 
                            >
                                <Grid item xs={4}>
                                    <Button onClick={(event) => { this.saveHomeAddress(event) }}>SAVE</Button>
                                </Grid>
                            </Grid>    
                        </form>
                    </Paper>
                </Grid>
            </>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(HomeAddress));

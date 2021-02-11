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
};

class MailAddress extends Component {
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

    saveMailAddress = () => {
        let vetVar = this.state.vet

        if (vetVar.address === '') {
            alert("An mail address is required for registration.");
        } else {
            console.log(
                `Saving ${vetVar.mailAddress} to Database...`
            );

            this.props.dispatch({
                type: "UPDATE_MAIL_ADDRESS",
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
                    // {this.props.history.push('/servicehistory')}
                    console.log("state has been reset");
                }
            );
        }

    }


    render() {
        const { classes } = this.props;

        return (
            <>
                <h1>Mail Address Entry</h1>
                <Grid container spacing={2} direction="column">
                    <Paper elevation={10}>
                        <form>
                            <br />

                            <Grid item xs={12.0} sm={12}>

                                <TextField
                                    id="standard-textarea"
                                    variant="outlined"
                                    label="Address"
                                    name="address"
                                    value={this.state.vet.address}
                                    onChange={(event) => this.handleInputChange(event, "address")}
                                />
                                <br />

                                <TextField
                                    id="standard-textarea"
                                    variant="outlined"
                                    label="Apt/PO Box/Bldg"
                                    name="APT"
                                    value={this.state.vet.apt}
                                    onChange={(event) => this.handleInputChange(event, "apt")}
                                />
                                <br />

                                <TextField
                                    id="standard-textarea"
                                    variant="outlined"
                                    label="City"
                                    name="city"
                                    value={this.state.vet.city}
                                    onChange={(event) => this.handleInputChange(event, "city")}
                                />
                                <br />

                                <TextField
                                    id="standard-textarea"
                                    variant="outlined"
                                    label="State"
                                    name="state"
                                    value={this.state.vet.state}
                                    onChange={(event) => this.handleInputChange(event, "state")}
                                />
                                <br />

                                <TextField
                                    id="standard-textarea"
                                    variant="outlined"
                                    label="Zip Code"
                                    name="zip"
                                    value={this.state.vet.zip}
                                    onChange={(event) => this.handleInputChange(event, "zip")}
                                />
                                <br />

                                <TextField
                                    id="standard-textarea"
                                    variant="outlined"
                                    label="Country"
                                    name="country"
                                    value={this.state.vet.country}
                                    onChange={(event) => this.handleInputChange(event, "country")}
                                />
                                <br />

                                <Button onClick={(event) => { this.saveMailAddress(event) }}>SAVE</Button>
                                <br />
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(MailAddress));
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

class Phone extends Component {
    state = {
        vet: {
            phone: "",
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

    savePhone = () => {
        let vetVar = this.state.vet

        if (vetVar.phone === '') {
            alert("An phone number is required for registration.");
        } else {
            console.log(
                `Saving ${vetVar.phone} to Database...`
            );

            this.props.dispatch({
                type: "UPDATE_PHONE",
                payload: this.state.vet
            });

            this.setState(
                {
                    vet: {
                        phone: "",
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
                <h1>Phone Entry</h1>
                {/* <Grid container spacing={2} direction="column"> */}
                    <Paper elevation={10}>
                        <form>
                            <br />

                            {/* <Grid item xs={12.0} sm={12}> */}
                                <TextField
                                    id="standard-textarea"
                                    variant="outlined"
                                    label="Phone Number"
                                    name="phone"
                                    value={this.state.vet.phone}
                                />
                                <br />
                                <Button
                                    onClick={(event) => {
                                        this.savePhone(event);
                                    }}
                                >
                                    SAVE
                </Button>
                                <br />
                            {/* </Grid> */}
                        </form>
                    </Paper>
                {/* </Grid> */}
            </>
        ); //END return
    } //END render
} //END Name

export default connect(mapStoreToProps)(withStyles(styles)(Phone));

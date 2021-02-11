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

class Homeless extends Component {
    state = {
        vet: {
            homeless: "",
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

    saveHomeless = () => {
        let vetVar = this.state.vet

        if (vetVar.homeless === '') {
            alert("Please indicate whether or not you are homeless.");
        } else {
            console.log(
                `Saving ${vetVar.homeless} to Database...`
            );

            this.props.dispatch({
                type: "ADD_HOMELESS",
                payload: this.state.vet
            });

            this.setState(
                {
                    vet: {
                        homeless: "",
                    },
                },
                function () {
                    // {this.props.history.push('/servicehistory')}
                    console.log("state has been reset");
                }
            );
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <>
                <h1>Homeless Entry</h1>
                <Grid container spacing={2} direction="column">
                    <Paper elevation={10}>
                        <form>
                            <br />

                            <Grid item xs={12.0} sm={12}>
                                <TextField
                                    variant="outlined"
                                    label="homeless"
                                    name="homeless"
                                    value={this.state.vet.homeless}
                                    onChange={(event) => this.handleInputChange(event, "homeless")}
                                />
                                <br />
                                <Button onClick={(event) => { this.saveHomeless(event) }}>SAVE</Button>
                                <br />
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(Homeless));

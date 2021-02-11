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

class Discharge extends Component {

    state = {
        vet: {
            discharge: ""
        },
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
            },
            function () {
                console.log("state has been set:", this.state.vet);
            }
        );
    };

    saveDischarge = () => {
        let vetVar = this.state.vet

        if (vetVar.discharge === '') {
            alert("An discharge type is required for registration.");
        } else {
            console.log(
                `Saving ${vetVar.discharge} to Database...`
            );

            this.props.dispatch({
                type: "ADD_DISCHARGE",
                payload: this.state.vet
            });

            this.setState(
                {
                    vet: {
                        discharge: "",
                    },
                },
                function () {
                    console.log("state has been reset");
                }
            );
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <>
                <h1>Discharge Type Entry</h1>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                >

                    <Paper elevation={10}>

                        <form>
                            <br />

                            <Grid item xs={12.0} sm={12}>

                                <TextField
                                    variant="outlined"
                                    label="Discharge Type"
                                    name="discharge"
                                    value={this.state.vet.discharge}
                                    onChange={(event) => this.handleInputChange(event, "discharge")}
                                />
                                <br />
                                <Button onClick={(event) => { this.saveDischarge(event) }}>SAVE</Button>
                                <br />
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(Discharge));

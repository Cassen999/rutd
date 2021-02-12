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

class Status extends Component {

    state = {
        vet: {
            status: ""
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

    saveStatus = () => {
        let vetVar = this.state.vet

        if (vetVar.status === '') {
            alert("Please indicate your current service status.");
        } else {
            console.log(
                `Saving ${vetVar.status} to Database...`
            );

            this.props.dispatch({
                type: "UPDATE_STATUS",
                payload: this.state.vet.status
            });

            this.setState(
                {
                    vet: {
                        status: "",
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
                <h1>Service Status Entry</h1>
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
                                    label="Service Status"
                                    name="status"
                                    value={this.state.vet.status}
                                    onChange={(event) => this.handleInputChange(event, "status")}
                                />
                                <br />
                                <Button onClick={(event) => { this.saveStatus(event) }}>SAVE</Button>
                                <br />
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(Status));

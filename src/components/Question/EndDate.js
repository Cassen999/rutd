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

class EndDate extends Component {

    state = {
        vet: {
            endDate: ""
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

    saveEndDate = () => {
        let vetVar = this.state.vet

        if (vetVar.endDate === '') {
            alert("Please indicate the end date of your military service (EAOS).");
        } else {
            console.log(
                `Saving ${vetVar.endDate} to Database...`
            );

            this.props.dispatch({
                type: "UPDATE_END_DATE",
                payload: this.state.vet.endDate
            });

            this.setState(
                {
                    vet: {
                        endDate: "",
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
                <h1>End Date Entry</h1>
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
                                    label="End Date"
                                    name="endDate"
                                    value={this.state.vet.endDate}
                                    onChange={(event) => this.handleInputChange(event, "endDate")}
                                />
                                <br />
                                <Button onClick={(event) => { this.saveEndDate(event) }}>SAVE</Button>
                                <br />
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(EndDate));

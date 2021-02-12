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

class Birth extends Component {
    state = {
        vet: {
            birth: "",
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

    savebirth = () => {
        let vetVar = this.state.vet

        if (vetVar.birth === '') {
            alert("Your date of birth is required for registration.");
        } else {
            console.log(
                `Saving ${vetVar.birth} to Database...`
            );

            this.props.dispatch({
                type: "UPDATE_BIRTH",
                payload: this.state.vet.birth
            });

            this.setState(
                {
                    vet: {
                        birth: "",
                    },
                },
                function () {
                    console.log("state has been reset");
                }
            );
        }

    }

    render() {
        // const { classes } = this.props;

        return (
            <>
                <h1>Date of Birth Entry</h1>
                <Grid container spacing={2} direction="column">
                    <Paper elevation={10}>
                        <form>
                            <br />

                            <Grid item xs={12.0} sm={12}>

                                <TextField
                                    variant="outlined"
                                    label="Date of Birth"
                                    name="date_of_birth"
                                    value={this.state.vet.birth}
                                    onChange={(event) =>
                                        this.handleInputChange(event, "birth")
                                    }
                                />
                                <br />
                                <Button onClick={(event) => { this.savebirth(event) }}>SAVE</Button>
                                <br />
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(Birth));

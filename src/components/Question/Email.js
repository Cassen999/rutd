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

class Email extends Component {
    state = {
        vet: {
            email: "",
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

    saveEmail = () => {
        let vetVar = this.state.vet;

        if (vetVar.email === "") {
            alert("An email address is required for registration.");
        } else {
            console.log(`Saving ${vetVar.email} to Database...`);

            this.props.dispatch({
                type: "UPDATE_EMAIL",
                payload: this.state.vet.email
            });

            this.setState(
                {
                    vet: {
                        email: "",
                    },
                },
                function () {
                    console.log("state has been reset");
                }
            );
        }
    };

    render() {
        // const { classes } = this.props;

        return (
            <>
                <h1>Email Entry</h1>
                <Grid container spacing={2} direction="column">
                    <Paper elevation={10}>
                        <form>
                            <br />

                            <Grid item xs={12.0} sm={12}>
                                <TextField
                                    variant="outlined"
                                    label="Email"
                                    name="email"
                                    value={this.state.vet.email}
                                    onChange={(event) => this.handleInputChange(event, "email")}
                                />
                                <br />
                                <Button
                                    onClick={(event) => {
                                        this.saveEmail(event);
                                    }}
                                >
                                    SAVE
                </Button>
                                <br />
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </>
        ); //END return
    } //END render
} //END Name

export default connect(mapStoreToProps)(withStyles(styles)(Email));

import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import { Button, Grid, Paper, withStyles, TextField } from "@material-ui/core";

const styles = {
    inputs: {
        width: "",
        paddingTop: "",
        verticalAlign: "middle",
        fontFamily: "Arial",
    },
};

class Name extends Component {
    
    state = {
        vet: {
            first_name: "",
            last_name: "",

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

    saveName = () => {
        let vetVar = this.state.vet

        if (vetVar.first_name === '' || vetVar.last_name === '') {
            alert("A first and last name is required for registration.");
        } else {
            console.log(
                `Saving ${vetVar.first_name}'s name to Database...`
            );

            this.props.dispatch({
                type: "ADD_NAME",
                payload: this.state.vet,
            });
           
            this.setState(
                {
                    vet: {
                        first_name: "",
                        last_name: "",
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
                <h1>Name Entry</h1>
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
                                    label="First Name"
                                    name="first_name"
                                    value={this.state.vet.first_name}
                                    onChange={(event) =>
                                        this.handleInputChange(event, "first_name")
                                    }
                                />
                                <br />

                                <TextField
                                    variant="outlined"
                                    label="Last Name"
                                    name="last_name"
                                    value={this.state.vet.last_name}
                                    onChange={(event) =>
                                        this.handleInputChange(event, "last_name")
                                    }
                                />
                                <br />

                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(Name));

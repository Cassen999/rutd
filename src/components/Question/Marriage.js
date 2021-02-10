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

class Marriage extends Component {

    state = {
        vet: {
            marriage: ""
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

    savemarriage = () => {
        let vetVar = this.state.vet

        if (vetVar.marriage === '') {
            alert("An marriage address is required for registration.");
        } else {
            console.log(
                `Saving ${vetVar.marriage} to Database...`
            );

            this.props.dispatch({
                type: "ADD_MARRIAGE",
                payload: this.state.vet
            });

            this.setState(
                {
                    vet: {
                        marriage: "",
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
                <h1>marriage Entry</h1>
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
                                    label="marriage"
                                    name="marriage"
                                    value={this.state.vet.marriage}
                                    onChange={(event) => this.handleInputChange(event, "marriage")}
                                />
                                <br />
                                <Button onClick={(event)=>{this.savemarriage(event)}}>SAVE</Button>
                                <br/>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(Marriage));

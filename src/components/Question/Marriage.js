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

class Marriage extends Component {
    state = {
        vet: {
            marriage: "",
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

    saveMarriage = () => {
        let vetVar = this.state.vet

        if (vetVar.marriage === '') {
            alert("Please indicate your marital status.");
        } else {
            console.log(
                `Saving ${vetVar.marriage} to Database...`
            );

            this.props.dispatch({
                type: "UPDATE_MARRIAGE",
                payload: this.state.vet.marriage,
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
                <h1>Marriage Entry</h1>
                <Grid container spacing={2} direction="column">
                    <Paper elevation={10}>
                        <form>
                            <br />

                            <Grid item xs={12.0} sm={12}>
                                <TextField
                                    variant="outlined"
                                    label="Marriage"
                                    name="marriage"
                                    value={this.state.vet.marriage}
                                    onChange={(event) => this.handleInputChange(event, "marriage")}
                                />
                                <br />
                                <Button onClick={(event) => { this.saveMarriage(event) }}>SAVE</Button>
                                <br />
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(Marriage));

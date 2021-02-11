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

class Rank extends Component {

    state = {
        vet: {
            rank: ""
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

    saveRank = () => {
        let vetVar = this.state.vet

        if (vetVar.rank === '') {
            alert("Please indicate your highest attained rank.");
        } else {
            console.log(
                `Saving ${vetVar.rank} to Database...`
            );

            this.props.dispatch({
                type: "ADD_RANK",
                payload: this.state.vet
            });

            this.setState(
                {
                    vet: {
                        rank: "",
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
                <h1>Rank Entry</h1>
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
                                    label="Rank"
                                    name="rank"
                                    value={this.state.vet.rank}
                                    onChange={(event) => this.handleInputChange(event, "rank")}
                                />
                                <br />
                                <Button onClick={(event) => { this.saveRank(event) }}>SAVE</Button>
                                <br />
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(Rank));

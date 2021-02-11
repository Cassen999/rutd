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

class Children extends Component {
    state = {
        vet: {
            children: "",
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

    saveChildren = () => {
        let vetVar = this.state.vet

        if (vetVar.children === '') {
            alert("Please disclose your number of children.");
        } else {
            console.log(
                `Saving ${vetVar.children} to Database...`
            );

            this.props.dispatch({
                type: "UPDATE_CHILDREN",
                payload: this.state.vet
            });

            this.setState(
                {
                    vet: {
                        children: "",
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
                <h1>Children Entry</h1>
                <Grid container spacing={2} direction="column">
                    <Paper elevation={10}>
                        <form>
                            <br />

                            <Grid item xs={12.0} sm={12}>
                                <TextField
                                    variant="outlined"
                                    label="Children"
                                    name="children"
                                    value={this.state.vet.children}
                                    onChange={(event) => this.handleInputChange(event, "children")}
                                />
                                <br />
                                <Button onClick={(event) => { this.saveChildren(event) }}>SAVE</Button>
                                <br />
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(Children));

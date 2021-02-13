import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import { Button, withStyles, TextField } from "@material-ui/core";

const styles = {
    inputs: {
        width: "",
        paddingTop: "",
        verticalAlign: "",
        fontFamily: "",
    },
};

class Name extends Component {

    state = {
        first_name: "",
        last_name: "",
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
            });
    };

    saveName = () => {
        let vetVar = this.state.vet
        if (vetVar.first_name === '' || vetVar.last_name === '') {
            alert("A first and last name is required for registration.");
        } else {
            this.props.dispatch({
                type: "ADD_NAME",
                payload: this.state.vet,
            });
            this.setState({
                first_name: "",
                last_name: "",
            });
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <form>
                <TextField
                    variant="outlined"
                    label="First Name"
                    name="first_name"
                    value={this.state.vet.first_name}
                    onChange={(event) =>
                        this.handleInputChange(event, "first_name")
                    }
                />
                <TextField
                    variant="outlined"
                    label="Last Name"
                    name="last_name"
                    value={this.state.vet.last_name}
                    onChange={(event) =>
                        this.handleInputChange(event, "last_name")
                    }
                />
                <Button onClick={(event) => { this.saveName(event) }}>SAVE</Button>
                <TextField
                    variant="outlined"
                    label="Date of Birth"
                    name="date_of_birth"
                    value={this.state.vet.dOB}
                    onChange={(event) =>
                        this.handleInputChange(event, "dOB")
                    }
                />
                <Button onClick={(event) => { this.saveDOB(event) }}>SAVE</Button>
            </form>
        )//END return
    };//END render
};//END Name

export default connect(mapStoreToProps)(withStyles(styles)(Name));
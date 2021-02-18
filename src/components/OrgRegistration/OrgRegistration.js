import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { Button, Paper, withStyles, TextField } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: "100%",
  },
  form: {},
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
});

class OrgRegistration extends Component {
  state = {
    name: "",
    number: "",
    email: "",
    city: "",
    state_id: "",
    pdf: "",
    website: "",
    pictures: "",
    description: "",
    categories_id: "",
    approved: "",
  };

  componentDidMount() {
    this.props.dispatch({ type: "SET_RESOURCE" });
    this.props.dispatch({ type: "SET_CATEGORY" });

    //TODO state reducer
    // this.props.dispatch({ type: "FETCH STATE" });
  }

  handleCancel = () => {
    this.setState({ isModalVisible: false, editVehicle: null });
  };

  handleChange = (event, propertyName) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <Paper className={classes.paper}>
          <form
            autoComplete="on"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={this.handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="dense"
              style={{ margin: "5px" }}
              label="Name"
              value={this.state.name}
              onChange={(event) => this.handleChange(event, "name")}
            />

            <TextField
              margin="dense"
              style={{ margin: "5px" }}
              variant="outlined"
              label="Number"
              value={this.state.number}
              onChange={(event) => this.handleChange(event, "number")}
            />

            <TextField
              margin="dense"
              style={{ margin: "5px" }}
              name="email"
              variant="outlined"
              label="Email"
              value={this.state.email}
              onChange={(event) => this.handleChange(event, "email")}
            />
            <br></br>
            <TextField
              margin="dense"
              style={{ margin: "5px" }}
              name="city"
              variant="outlined"
              label="City"
              value={this.state.city}
              onChange={(event) => this.handleChange(event, "city")}
            />
            {/* TODO map states
           <FormControl className={classes.formControl}>
              <InputLabel>State</InputLabel>
              <Select
                fullWidth
                className={classes.textField}
                value={this.state.state_id}
                onChange={(event) => this.handleChange(event, "state_id")}
              >
                {this.props.store.state.map((state, i) => (
                  <MenuItem key={i} value={state.id}>
                    {state_id.description}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}

            <FormGroup
              style={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Button
                className={classes.button}
                variant="contained"
                style={{
                  borderRadius: 35,
                  backgroundColor: '#AFFA3D',
                  fontFamily: 'orbitron',
                }}
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </FormGroup>
          </form>
        </Paper>
      </>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(OrgRegistration));

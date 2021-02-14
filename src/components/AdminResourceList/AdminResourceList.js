import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";

const styles = (theme) => ({
  textField: {
    width: "100%",
    height: "100%",
    background: "white",
    borderRadius: "4px",
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class AdminResourceList extends Component {
  state = {
    searchText: "",
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_RESOURCE" });
    this.props.dispatch({ type: "FETCH_CATEGORY" });
  }

  handleMailTo = (resourceEmail) => {
    return window.open(`mailto:${resourceEmail}`);
  };

  handleResource = (resourceID) => {
    console.log("RESOURCE YOU SELECTED:", resourceID);
    this.props.dispatch({ type: "GET_ONE_RESOURCE", payload: resourceID });
    this.props.history.push("/adminOrgEdit");
  };

  handleInputChangeForSearch = (event) => {
    event.preventDefault();
    this.setState(
      {
        searchText: event.target.value,
      },
      function () {
        this.props.dispatch({
          type: `FETCH_SEARCH_RESOURCE`,
          payload: this.state.searchText,
        });
      }
    );
  };

  handleDelete = (resource_id) => {
    this.props.dispatch({ type: "DELETE_RESOURCE", payload: resource_id });
    console.log("handle delete event, resource_id", resource_id);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <center>
          <h2>All Resources</h2>
        </center>
        <div className={classes.searchContainer}>
          <center>
            <TextField
              id="outlined-search"
              onChange={this.handleInputChangeForSearch}
              placeholder="Search for Resource by name"
              type="search"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              background-color="black"
            />
          </center>
        </div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead className="table-head-color">
              <TableRow>
                <TableCell>Resource Name</TableCell>
                <TableCell align="left">Contact</TableCell>
                <TableCell align="left">Edit</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            {this.state.searchText === "" ? (
              <TableBody>
                {this.props.store.resourceReducer.map((resource, i) => (
                  <TableRow key={i}>
                    <TableCell>{resource.name}</TableCell>
                    <TableCell>
                      <Fab
                        variant="contained"
                        style={{
                          borderRadius: 35,
                          backgroundColor: "#AFFA3D",
                          fontFamily: "orbitron",
                        }}
                        onClick={() => this.handleMailTo(resource.email)}
                      >
                        <EmailRoundedIcon />
                      </Fab>
                    </TableCell>
                    <TableCell>
                      <Fab
                        variant="contained"
                        style={{
                          borderRadius: 35,
                          backgroundColor: "#AFFA3D",
                          fontFamily: "orbitron",
                        }}
                        onClick={() => this.handleResource(resource.id)}
                      >
                        <EditRoundedIcon />
                      </Fab>
                    </TableCell>
                    <TableCell>
                      <Fab
                        variant="contained"
                        style={{
                          borderRadius: 35,
                          backgroundColor: "#AFFA3D",
                          fontFamily: "orbitron",
                        }}
                        onClick={() => this.handleDelete(resource.id)}
                      >
                        <DeleteForeverRoundedIcon />
                      </Fab>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody>
                {this.props.store.resourceSearch.map((resource, i) => (
                  <TableRow key={i}>
                    <TableCell onClick={() => this.handleResource(resource.id)}>
                      {resource.name}
                    </TableCell>
                    <TableCell>
                      <Fab
                        variant="contained"
                        style={{
                          borderRadius: 35,
                          backgroundColor: "#AFFA3D",
                          fontFamily: "orbitron",
                        }}
                        onClick={() => this.handleMailTo(resource.email)}
                      >
                        <EmailRoundedIcon />
                      </Fab>
                    </TableCell>
                    <TableCell>
                      <Fab
                        variant="contained"
                        style={{
                          borderRadius: 35,
                          backgroundColor: "#AFFA3D",
                          fontFamily: "orbitron",
                        }}
                        onClick={() => this.handleResource(resource.id)}
                      >
                        <EditRoundedIcon />
                      </Fab>
                    </TableCell>
                    <TableCell>
                      <Fab
                        variant="contained"
                        style={{
                          borderRadius: 35,
                          backgroundColor: "#AFFA3D",
                          fontFamily: "orbitron",
                        }}
                        onClick={() => this.handleDelete(resource.id)}
                      >
                        <DeleteForeverRoundedIcon />
                      </Fab>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </Paper>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AdminResourceList));

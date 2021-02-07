import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import "../AdminLandingPage/AdminLandingPage.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Typography from "@material-ui/core/Typography";

/*
----------------------------- TO DO LIST ON THIS PAGE: -----------------------------
- Dispatch to saga to get detail of one specific vet by ID in URL
- Receive details into a reducer
- dispatch to call reducer to adminVetView and adminResourceEdit to 
  see specific veteran and or resource profile information

-------------------------------------------------------------------------------------
*/

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

class AdminLandingPage extends Component {
  state = {
    heading: "Admin Landing Page",
  };

  componentDidMount() {
    console.log("Fetching veteran list from DB");
    this.props.dispatch({ type: "FETCH_VET" });
  }

  handleVeteran = (veteranID) => {
    console.log("VETERAN YOU SELECTED:", veteranID);
      this.props.dispatch({type:'GET_ONE_VET', payload: veteranID});
    this.props.history.push("/adminVetView");
  };

  //TODO Dispatch RESOURCE YOU SELECTED
  handleResource = (resourceID) => {
    console.log("RESOURCE YOU SELECTED:", resourceID);
    this.props.dispatch({type: 'GET_ONE_RESOURCE', payload: resourceID})
    this.props.history.push("/adminResourceEdit");
  };


  render(){
    const {classes} = this.props;
    const {vetReducer} = this.props.store;
      return (
        <div className="container">
        <center>
        {JSON.stringify(this.props.store.vetReducer)}
        <h2>Admin Landing Page</h2>
        </center>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead className="table-head-color">
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Resource</TableCell>
                    <TableCell align="right">Time Stamp</TableCell>
                    {/* <TableCell align="right">Protein (g)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {vetReducer.map((vet, i) => (
                    <TableRow key={i}>
                      <TableCell component="th" scope="vet" onClick={()=> this.handleVeteran(vet.id)}>
                        {vet.first_name} {vet.last_name}
                      </TableCell>
                      <TableCell align="right" onClick={()=> this.handleResource(vet.org_id)}>{vet.name}</TableCell>
                      <TableCell align="right">{vet.received}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
        </div>
      )
  }
}

export default withRouter(withStyles(styles)(connect(mapStoreToProps)(AdminLandingPage)));

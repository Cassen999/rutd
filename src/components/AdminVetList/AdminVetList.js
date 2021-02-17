import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  textField: {
    width: "100%",
    height: "100%",
    background: "white",
    borderRadius: "4px"
  }, 
});


class AdminVetList extends Component {

  state = {
    searchText: ''
  }
  
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_VET'})
  }
  
// "VETERAN YOU SELECTED:"

  handleVeteran = (veteranID) =>{
      this.props.dispatch({type:'GET_ONE_VET', payload: veteranID});
    this.props.history.push("/adminVetView");
  }

//"RESOURCE YOU SELECTED:"
  handleResource = (resourceID) =>{
    this.props.dispatch({type: 'GET_ONE_RESOURCE', payload: resourceID})
    this.props.history.push("/adminOrgEdit");
  }

  handleInputChangeForSearch = (event) => {
    event.preventDefault()
    this.setState({
      searchText: event.target.value
    },
    function() {
      this.props.dispatch({type: `FETCH_SEARCH_VET`, payload: this.state.searchText})
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="container">
            <center><h1 className="grey">Veterans</h1></center>
          <div className={classes.searchContainer}>
            <center>
              <TextField
                id="outlined-search"
                onChange={this.handleInputChangeForSearch}
                placeholder="Search for Vet by name"
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
                    <TableCell>Veterans</TableCell>
                    <TableCell align='left'>Organizations</TableCell>
                    <TableCell align='left'>Time Stamp</TableCell>
                  </TableRow>
                </TableHead>
                {this.state.searchText === '' ? 
                <TableBody>
                  {this.props.store.vetReducer.map((vet, i) => 
                    <TableRow key={i}>
                      <TableCell onClick={() =>  this.handleVeteran(vet.id)}>
                        {vet.first_name} {vet.last_name}
                      </TableCell>
                      <TableCell onClick={() => this.handleResource(vet.org_id)}>{vet.name}</TableCell>
                      <TableCell>{vet.received}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              :
              <TableBody>
                {this.props.store.vetSearchReducer.map((result, i) => 
                  <TableRow key={i}>
                    <TableCell component="th" scope="vet" onClick={() => this.handleVeteran(result.id)}>
                      {result.first_name} {result.last_name}
                    </TableCell>
                    <TableCell align="right" onClick={() => this.handleResource(result.org_id)}>{result.name}</TableCell>
                    <TableCell align="right">{result.received}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            }
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AdminVetList));

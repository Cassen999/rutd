import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../AdminLandingPage/AdminLandingPage.css';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


/*
Map through the MATCHES & make a list with 3 columns
  - Veterans
  - Resource
  - Time the Veteran initiated contact

onClick feature for Resource names: opens admin resource view/edit

onClick for Veteran names: opens admin veteran view
*/


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
});

let id = 0;

function createData(veteran, resource, time) {
  id += 1;
  return {
    id,
    veteran,
    resource,
    time
  };
}


// Just an example array to fill table for now, WILL BE mapping through our veteran and 
// resources reducers when they come back from DB
const rows = [
  createData('John Doe', 'Hives for Heroes', '02-01-2021'),
  createData('Jane Doe', 'Wounded Warrior', '01-24-2021'),
  createData('Lee Vang', 'Mighty Oaks', '03-20-2020'),
  createData('Maria Huerta', 'The Birdwell Foundation', '11-05-2020')
];


class AdminLandingPage extends Component {
  state = {
    heading: 'Admin Landing Page',
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <center>
        <h2>{this.state.heading}</h2>
        </center>
        <div className="container">
        <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>

                    {/* ------------------------------------------------------------------------------ */}
              {/* THIS IS WHERE WE NEED TO MAP THE VETERAN REDUCER WHICH WILL GET ALL VETERANS TO RENDER */}
                    {/* ------------------------------------------------------------------------------ */}

                    <TableCell>Veteran</TableCell>
                    <TableCell align="right">Resource</TableCell>
                    <TableCell align="right">Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.veteran}
                      </TableCell>
                      <TableCell align="right">{row.resource}</TableCell>
                      <TableCell align="right">{row.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AdminLandingPage));

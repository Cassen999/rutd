import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

// TO DO :
// - Map out the reducer resourceDetails to edit 
// - Material UI text fields so admin can edit details
// - save button
// - cancel edit button
 
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


class AdminOrgEdit extends Component {
  state = {
    name: '',
    numer: '',
    email: '',
    city: '',
    pdf: '',
    pictures: '',
    website: '',
    description: '',
    state: '',
    categories: ''
  };

  componentDidMount(){
    console.log('Admin Organization Edit')
  }

  // this will handle the change of the textfields
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const {resourceDetails} = this.props.store;
        const { classes } = this.props;
    return (
      <div>
        {JSON.stringify(resourceDetails)}
          <center>
            <h2>Admin Organization Edit</h2>
          </center>
          {resourceDetails.map((resource, i) => {
            return(
              <div key={i}>
                {/* INSERT TEXT FIELDS HERE */}
                  <form className={classes.container} noValidate autoComplete="off">
                      <Paper>
                        <TextField
                          id="standard-name"
                          label="Name"
                          className={classes.textField}
                          value={resource.name}
                          onChange={this.handleChange('name')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="Name"
                          className={classes.textField}
                          value={resource.number}
                          onChange={this.handleChange('name')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="Name"
                          className={classes.textField}
                          value={resource.email}
                          onChange={this.handleChange('name')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="Name"
                          className={classes.textField}
                          value={resource.city}
                          onChange={this.handleChange('name')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="Name"
                          className={classes.textField}
                          value={resource.website}
                          onChange={this.handleChange('name')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="Name"
                          className={classes.textField}
                          value={resource.description}
                          onChange={this.handleChange('name')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="Name"
                          className={classes.textField}
                          value={resource.state}
                          onChange={this.handleChange('name')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="Name"
                          className={classes.textField}
                          value={resource.categories}
                          onChange={this.handleChange('name')}
                          margin="normal"
                          />
                      </Paper>
                  </form>
              </div>
            )
          })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AdminOrgEdit));

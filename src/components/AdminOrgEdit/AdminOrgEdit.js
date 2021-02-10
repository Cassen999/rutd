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
    number: '',
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
    this.setState({
      name: this.props.store.resourceDetails.name,
      number: this.props.store.resourceDetails.number,
      email: this.props.store.resourceDetails.email,
      city: this.props.store.resourceDetails.city,
      pdf: this.props.store.resourceDetails.pdf,
      pictures: this.props.store.resourceDetails.pictures,
      website: this.props.store.resourceDetails.website,
      description: this.props.store.resourceDetails.description,
      state: this.props.store.resourceDetails.state,
      categories: this.props.store.resourceDetails.categories
    })
  }

  // this will handle the change of the textfields
handleChange = (event, input) => {
  console.log('Details of org details:', this.state);
  this.setState({
    ...this.state,
    [input]: event.target.value,
  })
}

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
                          onChange={(event)=>this.handleChange(event, 'name')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="Number"
                          className={classes.textField}
                          value={resource.number}
                          onChange={(event)=>this.handleChange(event, 'number')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="Email"
                          className={classes.textField}
                          value={resource.email}
                          onChange={(event)=>this.handleChange(event, 'email')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="City"
                          className={classes.textField}
                          value={resource.city}
                          onChange={(event)=>this.handleChange(event, 'city')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="Website"
                          className={classes.textField}
                          value={resource.website}
                          onChange={(event)=>this.handleChange(event, 'website')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="Description"
                          className={classes.textField}
                          value={resource.description}
                          onChange={(event)=>this.handleChange(event, 'description')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="State"
                          className={classes.textField}
                          value={resource.state}
                          onChange={(event)=>this.handleChange(event, 'state')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          label="Categories"
                          className={classes.textField}
                          value={resource.categories}
                          onChange={(event)=>this.handleChange(event, 'categories')}
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

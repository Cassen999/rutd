import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../AdminOrgEdit/AdminOrgEdit.css';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import swal from 'sweetalert';

// TO DO :
// - Map out the reducer resourceDetails to edit 
// - Material UI text fields so admin can edit details
// - save button
// - cancel edit button
// - no more category router 
 
const styles = theme => ({
  button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
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
                // the below are not rendering currently
                // no officially items from DB
                // pdf: '',
                // pictures: '',
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
      // pdf: this.props.store.resourceDetails.pdf,
      // pictures: this.props.store.resourceDetails.pictures,
      website: this.props.store.resourceDetails.website,
      description: this.props.store.resourceDetails.description,
      state: this.props.store.resourceDetails.state,
      categories: this.props.store.resourceDetails.categories
    })
  }


cancelSubmit = () =>{
  swal({
      title: "Are you sure?",
      text: "Once cancelled, your edit will not be made!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Your edit has not been saved!", {
          icon: "success",
        });
      } else {
        swal("You can keep working on the edits");
      }
    });
}




updateOrg = (orgID) =>{
  console.log('Updating organization with ID:', orgID);
  // this dispatch below will send the id of the dream to update, with the payload of the state
  // this.props.dispatch({type: 'UPDATE_DREAM', payload: {id: orgID, resourceDetails: this.state}});
  // this.setState({
  //   title: '',
  //   date: '',
  //   image: '',
  //   details: '',
  //   name: '',
  //   genre_id: ''
  // })
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
      <div className="container">
        {JSON.stringify(resourceDetails)}
          <center>
            <h2>Admin Organization Edit</h2>
          </center>
          {resourceDetails.map((resource, i) => {
            return(
                  <form key={i}>
                    <div className="white-background">
                        <TextField
                          id="standard-name"
                          placeholder="Name"
                          className={classes.textField}
                          value={this.state.name}
                          onChange={(event)=>this.handleChange(event, 'name')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          placeholder="Number"
                          className={classes.textField}
                          value={this.state.number}
                          onChange={(event)=>this.handleChange(event, 'number')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          placeholder="Email"
                          className={classes.textField}
                          value={this.state.email}
                          onChange={(event)=>this.handleChange(event, 'email')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          placeholder="City"
                          className={classes.textField}
                          value={this.state.city}
                          onChange={(event)=>this.handleChange(event, 'city')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          placeholder="Website"
                          className={classes.textField}
                          value={this.state.website}
                          onChange={(event)=>this.handleChange(event, 'website')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          placeholder="Description"
                          className={classes.textField}
                          value={this.state.description}
                          onChange={(event)=>this.handleChange(event, 'description')}
                          margin="normal"
                          />
                        <TextField
                          id="standard-name"
                          placeholder="State"
                          className={classes.textField}
                          value={this.state.state}
                          onChange={(event)=>this.handleChange(event, 'state')}
                          margin="normal"
                          />
                    {/* THIS NEEDS A DROP DOWN MENU SELECT --- COMMENTING OUT RIGHT NOW */}
                        {/* <TextField
                          id="standard-name"
                          placeholder="Categories"
                          className={classes.textField}
                          value={resource.categories}
                          onChange={(event)=>this.handleChange(event, 'categories')}
                          margin="normal"
                          /> */}
                        {/* <InputLabel>
                            Categories
                        </InputLabel>
                            <Select 
                                className="dropdown"
                                value={this.state.categories} 
                                onChange={(event) => this.handleChange(event, 'categories')}>                                  
                                {this.props.store.genre.map((genre, i) =>
                                  <MenuItem key={i} value={genre.id}>
                                      {genre.name}
                                  </MenuItem>)}
                            </Select> */}
                          <span className="margin-above-button"></span>
                          <Button 
                            style={{marginTop:"1rem"}}
                            className="float-right" 
                            variant="contained" 
                            onClick={()=> this.updateOrg(resource.org_id)}>Update organization
                          </Button>
                          <Button 
                            style={{marginTop:"1rem"}}
                            className="float-right" 
                            variant="contained" 
                            onClick={this.cancelSubmit}>Cancel
                          </Button>
                    </div>
                  </form>
            )
          })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AdminOrgEdit));

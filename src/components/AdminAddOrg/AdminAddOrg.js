import Fab from "@material-ui/core/Fab";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SaveTwoToneIcon from "@material-ui/icons/SaveTwoTone";
import React, { Component } from "react";
import swal from "sweetalert";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../AdminOrgEdit/AdminOrgEdit.css";
import compose from 'recompose/compose';
import {    
    withStyles,
    FormControl,
    Select,
    MenuItem,
    Input,
    Chip,
    Checkbox,
    ListItemText      
} from "@material-ui/core";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 12;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: '30%',
    },
  },
};


function getStyles(malady, selectedMalady, theme) {
    return {
      fontWeight:
        selectedMalady.indexOf(malady) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

class AdminAddOrg extends Component {
  state = {
    name: "",
    number: "",
    email: "",
    city: "",
    website: "",
    description: "",
    state: "",
    selectedCategories: [],
    open: false,
    categories: false
  };

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_CATEGORY'})
    this.setState({
      name: this.props.store.resourceDetails.name,
      number: this.props.store.resourceDetails.number,
      email: this.props.store.resourceDetails.email,
      city: this.props.store.resourceDetails.city,
      website: this.props.store.resourceDetails.website,
      description: this.props.store.resourceDetails.description,
      state: this.props.store.resourceDetails.state,
      categories: this.props.store.resourceDetails.categories,
    });
  }

  cancelSubmit = (orgID) => {
    swal({
      title: "Are you sure?",
      text: "Once cancelled, the organization will not be added",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your edit has not been saved!", {
          icon: "success",
        });
        this.props.history.push("/adminAddOrg", );
      } else {
        swal("You can keep working on the edits");
      }
    });
  };

  addOrg = () => {
    this.props.dispatch({
      type: "ADD_RESOURCE",
      payload: this.state
    });
    this.setState({
      name: "",
      number: "",
      email: "",
      city: "",
      website: "",
      description: "",
      state: "",
      categories: event.target.value,
    });
    swal({
      title: "Add Organization?",
      text: "Once cancelled, your add will not be saved!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("You've added the organization!", {
          icon: "success",
        });
        this.props.history.push("/adminOrgView", orgID);
      } else {
        swal("You can keep working on the details");
      }
    });
  };

  // this will handle the change of the textfields
  handleChange = (event, input) => {
    console.log("Add of orgs:", this.state);
    this.setState({
      ...this.state,
      [input]: event.target.value,
    });
  };

  render() {
    const { resourceDetails } = this.props.store;
    const { classes, theme } = this.props;
    const categorieList = this.props.store.categoryReducer;
    const { selectedCategories, categories, open } = this.state;
    return (
      <div className="container">
        <form className="white-background">
          <TextField
            id="standard-name"
            placeholder="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={(event) => this.handleChange(event, "name")}
            margin="normal"
          />
          <TextField
            id="standard-name"
            placeholder="Number"
            className={classes.textField}
            value={this.state.number}
            onChange={(event) => this.handleChange(event, "number")}
            margin="normal"
          />
          <TextField
            id="standard-name"
            placeholder="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={(event) => this.handleChange(event, "email")}
            margin="normal"
          />
          <TextField
            id="standard-name"
            placeholder="City"
            className={classes.textField}
            value={this.state.city}
            onChange={(event) => this.handleChange(event, "city")}
            margin="normal"
          />
          <TextField
            id="standard-name"
            placeholder="Website"
            className={classes.textField}
            value={this.state.website}
            onChange={(event) => this.handleChange(event, "website")}
            margin="normal"
          />
          <TextField
            id="standard-name"
            placeholder="Description"
            className={classes.textField}
            value={this.state.description}
            onChange={(event) => this.handleChange(event, "description")}
            margin="normal"
          />
          <TextField
            id="standard-name"
            placeholder="State"
            className={classes.textField}
            value={this.state.state}
            onChange={(event) => this.handleChange(event, "state")}
            margin="normal"
          />
          <FormControl className={classes.formControl}>
                <Select
                    id="malady-multiple-select"
                    label="Health Concerns"
                    multiple
                    value={selectedCategories}
                    onChange={this.handleChange}
                    input={<Input />}
                    renderValue={(selected) => (
                        <div className={classes.chips}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} className={classes.chip} />
                          ))}
                        </div>
                      )}
                    MenuProps={MenuProps} 
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {categorieList.map((category) => (
                        <MenuItem key={category.id} value={category.id} style={getStyles(categories, selectedCategories, theme)} >
                            <Checkbox checked={selectedCategories.indexOf(categories.id) > -1} />
                            <ListItemText primary={categories.description} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

          <Select
            id="standard-categories"
            multiple
            value={this.state.categories ? this.state.categories : []}
            onChange={(event) => this.handleChange(event, "categories")}
          >
            {categorieList.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.description}
              </MenuItem>
            ))}
          </Select><br></br>

          <Fab
            style={{
              borderRadius: 35,
              backgroundColor: "#AFFA3D",
              fontFamily: "orbitron",
              marginTop: "1rem",
            }}
            className="float-right"
            variant="contained"
            onClick={() => this.cancelSubmit(resourceDetails.org_id)}
          >
            <HomeRoundedIcon />
          </Fab>

          <Fab
            style={{
              borderRadius: 35,
              backgroundColor: "#AFFA3D",
              fontFamily: "orbitron",
              marginTop: "1rem",
              marginLeft: "2rem",
            }}
            className="float-right"
            variant="contained"
            onClick={() => this.addOrg(resourceDetails.org_id)}
          >
            <SaveTwoToneIcon />
          </Fab>

        </form>
      </div>
    );
  }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStoreToProps)
)(AdminAddOrg);
import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import compose from 'recompose/compose';
import {    withStyles,
            FormControl,
            InputLabel,
            Select,
            MenuItem, 
            Typography,
            Button      } from "@material-ui/core";
                        
             
                        
const styles = (theme) => ({
    formControl: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        minWidth: 185, 
    },
})

class MaladyQuestions extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_MALADY" });
  }

  state = {
    selectedMalady: [],
    malady: false,
    open: false
  };

  handleOpen= () => {
    this.setState({ open: true });
  }

  handleClose= () => {
    this.setState({ open: false });
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
        selectedMalady: [...this.state.selectedMalady, event.target.value]
    })
  }

  saveMalady = () => {
    console.log('save malady');
    this.props.dispatch({
        type: "UPDATE_MALADY",
        payload: this.state.selectedMalady
    })
  }

  render() {
    const { classes } = this.props;
    const maladyList = this.props.store.maladyReducer;
    const { selectedMalady, malady, open } = this.state;
    console.log('selected maladies are:', selectedMalady); 
    return (
        <> 
            <FormControl variant="filled" className={classes.formControl}>
                <Typography variant="h4" component="h2">
                    Please Select Any Health Concerns Which May Apply.
                </Typography>
                <InputLabel id="open-malady-label">Health Concerns</InputLabel>
                <Select
                    labelId="open-malady-label"
                    id="open-malady"
                    open={open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    value={selectedMalady}
                    onChange={this.handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {maladyList.map((injury) => (
                    <MenuItem
                        key={injury.description}
                        value={injury.id}
                    >
                        {injury.description}
                    </MenuItem>
                    ))}
                </Select>
            <Button
              onClick={this.saveMalady}
            >
              SAVE
            </Button> 
        </FormControl>          
      </>
    ); //END return
  } //END render
} //END Name

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStoreToProps)
)(MaladyQuestions);
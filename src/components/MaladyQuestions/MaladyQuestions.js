import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import {
    Button,
    Grid,
    Paper,
    withStyles,
    FormControl,
    InputLabel,
    Select,
    MenuItem, 
    FormHelperText
} from "@material-ui/core";
import compose from 'recompose/compose';

const styles = (theme) => ({
    formControl: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
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
      console.log('selected:', event.target.value);
  }

  render() {
    const { classes } = this.props;
    const maladyList = this.props.store.maladyReducer;
    const { selectedMalady, malady, open } = this.state;
    console.log('list of maladies from db', maladyList); 
    return (
        <> 
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="open-malady-label">Compensation Rate</InputLabel>
                <Select
                    labelId="open-malady-label"
                    id="open-malady"
                    open={open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    value={selectedMalady}
                    onChange={this.handleChange}
                >
                    {maladyList.map((injury) => (
                    <MenuItem
                        key={injury.description}
                        value={injury.id}
                    >
                        {injury.description}
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>          
            
            
            {/* <FormControl>
              <InputLabel>
                SELECT
              </InputLabel>
              <Select
               value={age}
              //onChange={(event)=>this.handleChange(event)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {malady.map((each) => (
                  <MenuItem
                    key={each}
                    value={each.id}
                  >
                    {each.description}</MenuItem>
                ))}

              </Select>
              <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
  
            <Button
              onClick={(event) => {
                this.saveMalady(event);
              }}
            >
              SAVE
            </Button> */}
      </>
    ); //END return
  } //END render
} //END Name

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStoreToProps)
)(MaladyQuestions);
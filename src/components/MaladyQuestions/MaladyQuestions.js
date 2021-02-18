import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import compose from 'recompose/compose';
import {    
    withStyles,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Input,
    Typography,
    Chip,
    Checkbox,
    ListItemText      
} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
                                               
const styles = (theme) => ({
    formControl: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        minWidth: 185, 
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
    margin: 2,
    },
    title: {
        marginBottom: theme.spacing(3)
    },
})

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
class MaladyQuestions extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_MALADY" });
  }

  state = {
    userId: this.props.store.user.id,
    selectedMalady: [],
    open: false,
    malady: false
  };

  handleOpen= () => {
    this.setState({ open: true });
  }

  handleClose= () => {
    this.setState({ open: false });
  }

  saveMalady = () => {
    console.log('save malady');
    this.props.dispatch({
        type: "UPDATE_MALADY",
        payload: this.state
    })
  }

handleChange = (event) => {
    event.preventDefault();
    this.setState({
        selectedMalady: event.target.value
    })
}

  render() {
    const { classes, theme } = this.props;
    const maladyList = this.props.store.maladyReducer;
    const { selectedMalady, malady, open } = this.state;
    console.log('selected maladies are:', selectedMalady); 
    return (
        <div className="container">
            <h1 className="grey">Health</h1>
            <hr className="float-left no-margin hr-width"></hr>
            <br></br>
            <Typography variant="h5" component="h2" className={classes.title}>
                    Please Select Any Health Concerns Which May Apply.
            </Typography>
            <FormControl className={classes.formControl}>
                <Select
                    id="malady-multiple-select"
                    label="Health Concerns"
                    multiple
                    value={selectedMalady}
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
                    {maladyList.map((malady) => (
                        <MenuItem key={malady.id} value={malady.id} style={getStyles(malady, selectedMalady, theme)} >
                            <Checkbox checked={selectedMalady.indexOf(malady.id) > -1} />
                            <ListItemText primary={malady.description} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Fab
                className="float-right"
                style={{
                    borderRadius: 35,
                    backgroundColor: '#AFFA3D',
                    fontFamily: 'orbitron',
                }}
                onClick={(event) => { this.saveMalady(event) }}><SaveTwoToneIcon />
            </Fab>
      </div>
    ); //END return
  } //END render
} //END Name

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStoreToProps)
)(MaladyQuestions);
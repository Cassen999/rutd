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
    Checkbox,
    ListItemText, 
    Typography,
    Button      
} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
                        
             
                        
const styles = (theme) => ({
    formControl: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        minWidth: 185, 
    },
})

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 12;
const ITEM_PADDING_LEFT = 16;
const ITEM_MARGIN_LEFT = 10;
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
        payload: this.state.selectedMalady
    })
  }

handleChange = (event) => {
    event.preventDefault();
    this.setState({
        selectedMalady: [event.target.value]
    })
}

handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
        selectedMalady: [...this.state.selectedMalady, event.target.value]
    });
  };

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
            <Typography variant="h5" component="h2">
                    Please Select Any Health Concerns Which May Apply.
            </Typography>
            <FormControl className={classes.formControl}>
                {/* <Typography variant="h5" component="h2">
                    Please Select Any Health Concerns Which May Apply.
                </Typography> */}
                {/* <InputLabel id="malady-multiple-select-label">Health Concerns</InputLabel> */}
                <Select
                    // labelId="malady-multiple-select-label"
                    id="malady-multiple-select-label"
                    label="Health Concerns"
                    multiple
                    value={selectedMalady}
                    onChange={this.handleChange}
                    input={<Input />}
                    MenuProps={MenuProps} 
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {maladyList.map((malady) => (
                        <MenuItem key={malady.description} value={malady.id} style={getStyles(malady, selectedMalady, theme)} >
                            {malady.description}
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
                // marginBottom: '10%',
                // marginRight: '10px',
                marginTop: '20px'
            }}
            onClick={(event) => { this.saveDemographic(event) }}><SaveTwoToneIcon /></Fab>

            {/* <FormControl variant="filled" className={classes.formControl}>
                <Typography variant="h4" component="h2">
                    Please Select Any Health Concerns Which May Apply.
                </Typography>
                <InputLabel id="open-malady-label">Health Concerns</InputLabel>
                <Select
                    labelId="open-malady-label"
                    id="open-malady"
                    multiple
                    open={open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    value={selectedMalady}
                    onChange={this.handleChange}
                >
s           
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
        </FormControl>           */}
      </div>
    ); //END return
  } //END render
} //END Name

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStoreToProps)
)(MaladyQuestions);
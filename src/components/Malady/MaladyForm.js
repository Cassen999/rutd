import React, { Component } from "react";
//import { useDispatch } from 'react-redux';
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import {
  Button,
  InputLabel,
  FormHelperText,
  Select,
  MenuItem,
  Grid,
  FormControl,
  Paper,
  withStyles,
  TextField,
} from "@material-ui/core";
// AppBar, Checkbox, ListItemText, Toolbar, CardMedia, Badge, IconButton, makeStyles, InputBase, Card, CardActionArea
// import '../../../App/App.css';

const styles = {
  inputs: {
    width: "",
    paddingTop: "0px",
    // marginTop: '20px',
    verticalAlign: "middle",
    fontFamily: "Arial",
    // height: '100%'
  },
  //     paperContainer: {
  //       backgroundImage: `url(${canvas})`
  //   },
  //   typography : {
  //     fontFamily : 'Arial'
};

class MaladyForm extends Component {
  componentDidMount() {
    console.log("Mounted");
    this.props.dispatch({ type: "FETCH_MALADY" });
    this.props.dispatch({ type: "FETCH_PERCENTAGE" });
  }
  state = {
    newVet: {
      injury_id: "",

      //   compensation: '',
      //   percentage: '',
      //   danger_areas: '',
      //   purple_heart: '',
    },
  };

  handleInputChange = (event, inputProperty) => {
    console.log("Handling input-change...");
    console.log("Setting state...");

    this.setState(
      {
        newVet: {
          ...this.state.newVet,
          [inputProperty]: event.target.value,
          user_id: this.props.store.user.id,
        },
      },
      function () {
        console.log("state has been set:", this.state);
      }
    );
  };

  saveHealth = () => {
    if (this.state.newVet.first_name === "") {
      alert("A name is required for registration.");
    } else {
      console.log(`Saving Health to Database...`);
      //Clear message... should say Hello!
      //console.log(`Sending ${this.state.newArt} to DB.`);

      this.props.dispatch({
        type: "UPDATE_HEALTH",
        payload: this.state.newVet,
      });
      this.setState({
        newVet: {
          injury_id: "",
        },
      });
    }
  };

  render() {
    const { classes } = this.props;
    const malady = this.props.store.maladyReducer;
    return (
      <>
        <h1>MaladyForm</h1>

        <Grid
          container
          //   className={classes.paper}
          //alignItems="center"
          spacing={2}
          direction="column"
        >
          <Paper
            // className={classes.paddingTop}
            // style={styles.paperContainer}
            elevation={10}
            // className={classes.paper}
            // backgroundImage={canvas}
          >
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                SELECT
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={age}
                onChange={this.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {malady.map((each) => (
                  <MenuItem value={each.id}>{each.description}</MenuItem>
                ))}

                {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
              <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>

            <form
            //   style={{ verticalAlign: 'middle' }}
            >
              <br />

              <Grid item xs={12.0} sm={12}>
                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="Injury ID"
                  //  rows={4}
                  //   rowsMax={20}
                  name="injury_id"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                  value={this.state.newVet.injury_id}
                  onChange={(event) =>
                    this.handleInputChange(event, "injury_id")
                  }
                />

                {/* </Grid>  */}

                <br />

                {/* <Grid item xs={12.0} sm={12}>  */}
              </Grid>

              <br />

              <Grid item xs={12.0} sm={12}>
                <Button
                  onClick={this.saveHealth}
                  // addArtProp={this.addArt}
                  //   elevation={20}
                  //  className={classes.typography}
                  //  textAlign='center'
                  //  justify='center'
                  //   style={{justifyContent: 'center'}}
                  //  <Button elevation={10}
                  //  Box display="flex" flexDirection="column"
                  //  textAlign='center'
                  //  display='flex'
                  //  justifyContent='center'
                  //  justify="center"
                  //  onClick={this.addArt}
                  //  variant="raised"
                  //  color="purple"
                  //  className={classes.alignAndJustify}
                >
                  SAVE
                </Button>
              </Grid>
              <br />
            </form>
            {/* </Card> */}
            {/* </Grid> */}
          </Paper>
        </Grid>
      </>
    ); //END return
  } //END render
} //END DemographicsForm

export default connect(mapStoreToProps)(withStyles(styles)(MaladyForm));

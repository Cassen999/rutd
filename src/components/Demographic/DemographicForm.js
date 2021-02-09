import React, { Component } from "react";
//import { useDispatch } from 'react-redux';
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import { Button, Grid, Paper, withStyles, TextField } from "@material-ui/core";
// AppBar, AppBar, Badge, CardMedia, IconButton, makeStyles, InputBase, Card, CardActionArea
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

class DemographicForm extends Component {
  state = {
    newVet: {
      first_name: "",
      last_name: "",
      email: "",
      date_of_birth: "",
      number: "",
      gender_id: "",
      married_id: "",
      children: "",
      homeless: "",
      current_address: "",
      city: "",
      state_id: "",
      zipcode: "",
      country_id: "",
      mailing_address: "",
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

  saveDemographic = () => {
    if (this.state.newVet.first_name === "") {
      alert("A name is required for registration.");
    } else {
      console.log(
        `Saving ${this.state.newVet.first_name}'s demographics to Database...`
      );
      //Clear message... should say Hello!
      //console.log(`Sending ${this.state.newArt} to DB.`);

      this.props.dispatch({
        type: "ADD_DEMOGRAPHIC",
        payload: this.state.newVet,
      });
      this.setState(
        {
          newVet: {
            first_name: "",
            last_name: "",
            email: "",
            date_of_birth: "",
            number: "",
            gender_id: "",
            married_id: "",
            children: "",
            homeless: "",
            current_address: "",
            city: "",
            state_id: "",
            zipcode: "",
            country_id: "",
            mailing_address: "",
          },
        },
        function () {
          // {this.props.history.push('/servicehistory')}
          console.log("state has been reset");
        }
      );
    }
  };

  render() {
    //  const { classes } = this.props;

    return (
      <>
        <h1>DemographicForm</h1>
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
            <form
            //   style={{ verticalAlign: 'middle' }}
            >
              <br />

              <Grid item xs={12.0} sm={12}>
                <TextField
                  variant="outlined"
                  label="First Name"
                  name="first_name"
                  // className={classes.inputs}
                  value={this.state.newVet.first_name}
                  onChange={(event) =>
                    this.handleInputChange(event, "first_name")
                  }
                />
                {/* </Grid>  */}
                <br />
                {/* <Grid item xs={12.0} sm={12}> */}
                {/* // align="center">  */}
                <TextField
                  variant="outlined"
                  label="Last Name"
                  name="last_name"
                  //  className={classes.inputs}
                  value={this.state.newVet.last_name}
                  onChange={(event) =>
                    this.handleInputChange(event, "last_name")
                  }
                />
                {/* </Grid> */}
                <br />

                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  variant="outlined"
                  label="Email"
                  name="email"
                  //  className={classes.inputs}

                  value={this.state.newVet.email}
                  onChange={(event) => this.handleInputChange(event, "email")}
                />

                {/* </Grid>   */}
                <br />

                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  variant="outlined"
                  label="Date of Birth"
                  name="date_of_birth"
                  value={this.state.newVet.date_of_birth}
                  onChange={(event) =>
                    this.handleInputChange(event, "date_of_birth")
                  }
                />

                {/* </Grid>  */}
                <br />

                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="Number"
                  //  rows={4}
                  //   rowsMax={20}
                  name="number"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                  value={this.state.newVet.number}
                  onChange={(event) => this.handleInputChange(event, "number")}
                />

                {/* </Grid>  */}
                <br />

                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="Gender ID"
                  //  rows={4}
                  //   rowsMax={20}
                  name="gender_id"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                  value={this.state.newVet.gender_id}
                  onChange={(event) =>
                    this.handleInputChange(event, "gender_id")
                  }
                />
                {/* </Grid>  */}
                <br />

                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="Married ID"
                  //  rows={4}
                  //   rowsMax={20}
                  name="married_id"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                  value={this.state.newVet.married_id}
                  onChange={(event) =>
                    this.handleInputChange(event, "married_id")
                  }
                />
                {/* </Grid>  */}
                <br />
                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="Children"
                  //  rows={4}
                  //   rowsMax={20}
                  name="children"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                  value={this.state.newVet.children}
                  onChange={(event) =>
                    this.handleInputChange(event, "children")
                  }
                />

                {/* </Grid>  */}

                <br />

                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="Homeless"
                  //  rows={4}
                  //   rowsMax={20}
                  name="homeless"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                  value={this.state.newVet.homeless}
                  onChange={(event) =>
                    this.handleInputChange(event, "homeless")
                  }
                />
                {/* </Grid>  */}

                <br />

                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="Current Address"
                  //  rows={4}
                  //   rowsMax={20}
                  name="current_address"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                  value={this.state.newVet.current_address}
                  onChange={(event) =>
                    this.handleInputChange(event, "current_address")
                  }
                />

                {/* </Grid>  */}

                <br />

                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="City"
                  //  rows={4}
                  //   rowsMax={20}
                  name="city"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                  value={this.state.newVet.city}
                  onChange={(event) => this.handleInputChange(event, "city")}
                />

                {/* </Grid>  */}

                <br />

                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="State ID"
                  //  rows={4}
                  //   rowsMax={20}
                  name="state_id"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                  value={this.state.newVet.state_id}
                  onChange={(event) =>
                    this.handleInputChange(event, "state_id")
                  }
                />

                {/* </Grid>  */}

                <br />

                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="Zipcode"
                  //  rows={4}
                  //   rowsMax={20}
                  name="zipcode"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                  value={this.state.newVet.zipcode}
                  onChange={(event) => this.handleInputChange(event, "zipcode")}
                />

                {/* </Grid>  */}

                <br />

                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="Country ID"
                  //  rows={4}
                  //   rowsMax={20}
                  name="country_id"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                  value={this.state.newVet.country_id}
                  onChange={(event) =>
                    this.handleInputChange(event, "country_id")
                  }
                />

                {/* </Grid>  */}

                <br />

                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="Mailing Address"
                  //  rows={4}
                  //   rowsMax={20}
                  name="mailing_address"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                  value={this.state.newVet.mailing_address}
                  onChange={(event) =>
                    this.handleInputChange(event, "mailing_address")
                  }
                />

                {/* </Grid>  */}

                <br />
              </Grid>

              <br />

              <Grid item xs={12.0} sm={12}>
                {/* <button onClick={(event)=>this.props.history.push('/home')}>BACK TO HOME</button> */}

                <Button
                  onClick={(event) => this.saveDemographic(event)}
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

export default connect(mapStoreToProps)(withStyles(styles)(DemographicForm));

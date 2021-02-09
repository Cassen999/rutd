import React, { Component } from "react";
//import { useDispatch } from 'react-redux';
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import {
  
  Grid,
  
  Paper,
  withStyles,
} from "@material-ui/core";
// AppBar, Checkbox, ListItemText, Toolbar, CardMedia, Badge, IconButton, makeStyles, InputBase, Card, CardActionArea
// import '../../../App/App.css';

const styles = {
  inputs: {
    width: "",
    paddingTop: "0px",
    verticalAlign: "middle",
    fontFamily: "Arial",
  }
};

class MaladyForm extends Component {
  componentDidMount() {
    console.log("Mounted");
    this.props.dispatch({ type: "FETCH_MALADY" });
    this.props.dispatch({ type: "FETCH_PERCENTAGE" });
  }

  


    state = {
        newVet: {
         

          malady: '',
          injury_id: '',
         
         //   compensation: '',
         //   percentage: '',
         //   danger_areas: '',
         //   purple_heart: '',
        }
    }
    
  

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

    handleMalady = (event, maladyId) => {
      console.log('Handling input-change...');
      console.log('Setting state...');
      
                  this.setState({
                    newVet : {
                      ...this.state.newVet,
                      malady : maladyId,
                      user_id: this.props.store.user.id
                    }
                  }, function () {
                      console.log('state has been set:', this.state);
                  })
                }






    handleInputChange = (event, inputProperty) => {
        console.log('Handling input-change...');
        console.log('Setting state...');
        
                    this.setState({
                      newVet : {
                        ...this.state.newVet,
                        [inputProperty]: event.target.value,
                        user_id: this.props.store.user.id
                      }
                    }, function () {
                        console.log('state has been set:', this.state);
                    })
                  }

                  saveHealth = () => {
                    if(this.state.newVet.first_name === '') {
                        alert('A name is required for registration.')
                    } else {
                    
                        console.log(`Saving Health to Database...`);
                    //Clear message... should say Hello!
                    //console.log(`Sending ${this.state.newArt} to DB.`);
        
                         this.props.dispatch({ type: 'UPDATE_MALADY', payload: this.state.newVet.malady })
                         this.setState({
                          newVet: {
          
          
          injury_id: '',
          malady: ''
           
                          },
                         })
                    }
                    
                  }
        
  
render(){
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
          <Paper>

          <FormControl>
            <Select>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        {malady.map((each) => (
                    <MenuItem value={each.id} onClick={(event)=> this.handleMalady(event, each.id)}>{each.description}

                    
                    </MenuItem>


        ))}

          
              </Select>
              <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>

            <form>
              <br/>

              <Grid item xs={12.0} sm={12}>
                {/* <Grid item xs={12.0} sm={12}>  */}
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="Injury ID"
                  //  rows={4}
                  //   rowsMax={20}
                  name="injury_id"
                  value={this.state.newVet.injury_id}
                  onChange={(event) =>
                    this.handleInputChange(event, "injury_id")
                  }
                />

                <br/>

              </Grid>

              <br/>

              <Grid item xs={12.0} sm={12}>
                <Button
                  onClick={this.saveHealth}
                  
                >
                  SAVE
                </Button>
              </Grid>
              <br />
            </form>

          </Paper>
        </Grid>
      </>
    ); //END return
  } //END render
}//END DemographicsForm

export default connect(mapStoreToProps)(withStyles(styles)(MaladyForm));

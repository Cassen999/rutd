import React, { Component } from 'react'
//import { useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { AppBar, Button, Toolbar, Grid, Badge, CardMedia, IconButton, makeStyles, Paper, InputBase, Card, withStyles, CardActionArea } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
// import '../../../App/App.css';

const styles = {
   inputs: {
      width: '',
      paddingTop: '0px',
      // marginTop: '20px',
      verticalAlign: 'middle',
      fontFamily: 'Arial'
      // height: '100%'
   }
   //     paperContainer: {
   //       backgroundImage: `url(${canvas})`
   //   },
   //   typography : {
   //     fontFamily : 'Arial'
}

class FinalQuestionForm extends Component {

   state = {
      newVet: {




         compensation: '',
         percentage: '',
         danger_areas: '',
         purple_heart: '',
      },
   }

   handleInputChange = (event, inputProperty) => {
      console.log('Handling input-change...');
      console.log('Setting state...');

      this.setState({
         newVet: {
            ...this.state.newVet,
            [inputProperty]: event.target.value,
            user_id: this.props.store.user.id
         }
      }, function () {
         console.log('state has been set:', this.state);
      })
   }

   saveDemographics = () => {
      if (this.state.newVet.first_name === '') {
         alert('A name is required for registration.')
      } else {

         console.log(`Saving ${this.state.newVet.first_name}'s demographics to Database...`);
         //Clear message... should say Hello!
         //console.log(`Sending ${this.state.newArt} to DB.`);

         this.props.dispatch({ type: 'ADD_DEMOGRAPHIC', payload: this.state.newVet })
         this.setState({
            newVet: {

               compensation: '',
               percentage: '',
               danger_areas: '',
               purple_heart: '',
            },
         })
      }

   }


   render() {
      const { classes } = this.props;

      return (
         <>
            <h1>DemographicsForm</h1>
            <Grid container
               className={classes.paper}
               //alignItems="center"
               spacing={2}
               direction="column">

               <Paper
                  className={classes.paddingTop}
                  style={styles.paperContainer}
                  elevation={10}
               // className={classes.paper} 
               // backgroundImage={canvas}                                                      
               >

                  <form
                  //   style={{ verticalAlign: 'middle' }}
                  >

                     <Grid item xs={12.0} sm={12}>

                        {/* </Grid>  */}

                        {/* <Grid item xs={12.0} sm={12}>  */}

                        <br />

                        {/* <Grid item xs={12.0} sm={12}>  */}
                        <TextField
                           id="standard-textarea"
                           variant="outlined"
                           label="Compensation"
                           //  rows={4}
                           //   rowsMax={20}
                           name="compensation"
                           //  multiline
                           //  className={classes.inputs}
                           //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                           value={this.state.newVet.compensation}
                           onChange={(event) => this.handleInputChange(event, 'compensation')}
                        />

                        {/* </Grid>  */}

                        <br />

                        {/* <Grid item xs={12.0} sm={12}>  */}
                        <TextField
                           id="standard-textarea"
                           variant="outlined"
                           label="Percentage"
                           //  rows={4}
                           //   rowsMax={20}
                           name="percentage"
                           //  multiline
                           //  className={classes.inputs}
                           //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                           value={this.state.newVet.percentage}
                           onChange={(event) => this.handleInputChange(event, 'percentage')}
                        />

                        {/* </Grid>  */}

                        <br />

                        {/* <Grid item xs={12.0} sm={12}>  */}
                        <TextField
                           id="standard-textarea"
                           variant="outlined"
                           label="Danger Areas"
                           //  rows={4}
                           //   rowsMax={20}
                           name="danger_areas"
                           //  multiline
                           //  className={classes.inputs}
                           //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                           value={this.state.newVet.danger_areas}
                           onChange={(event) => this.handleInputChange(event, 'danger_areas')}
                        />

                        {/* </Grid>  */}

                        <br />

                        {/* <Grid item xs={12.0} sm={12}>  */}
                        <TextField
                           id="standard-textarea"
                           variant="outlined"
                           label="Purple Heart"
                           //  rows={4}
                           //   rowsMax={20}
                           name="purple_heart"
                           //  multiline
                           //  className={classes.inputs}
                           //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                           value={this.state.newVet.purple_heart}
                           onChange={(event) => this.handleInputChange(event, 'purple_heart')}
                        />

                     </Grid>

                     <br />





                     <Grid item xs={12.0} sm={12}>

                        <Button
                           onClick={this.saveDemographics}
                           // addArtProp={this.addArt}
                           elevation={20}
                           //  className={classes.typography}
                           //  textAlign='center'
                           //  justify='center'
                           style={{ justifyContent: 'center' }}
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
                        >SAVE</Button>


                     </Grid>
                     <br />

                  </form>
                  {/* </Card> */}
                  {/* </Grid> */}
               </Paper>

            </Grid>

         </>
      )//END return
   }//END render

}//END DemographicsForm

export default connect(mapStoreToProps)(withStyles(styles)(FinalQuestionForm));
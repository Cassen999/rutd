import React, {Component} from 'react'
//import { useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import {AppBar, Button, Toolbar, Grid, Badge, CardMedia, IconButton, makeStyles, Paper, InputBase, Card, withStyles, CardActionArea} from '@material-ui/core'
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

  class ServiceHistoryForm extends Component {

    state = {
        newVet: {
          branch_id: '',
          rank_id : '',
          start_date: '',
          end_date: '',
          status_id: '',
          discharge_id: '',


         //  injury_id: '',

         //   compensation: '',
         //   percentage: '',
         //   danger_areas: '',
         //   purple_heart: '',
        },
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

                  saveServiceHistory = () => {
                    if(this.state.newVet.first_name === '') {
                        alert('A name is required for registration.')
                    } else {
                    
                        console.log(`Saving ${this.state.newVet.first_name}'s demographics to Database...`);
                    //Clear message... should say Hello!
                    //console.log(`Sending ${this.state.newArt} to DB.`);
        
                         this.props.dispatch({ type: 'UPDATE_SERVICE_HISTORY', payload: this.state.newVet })
                         this.setState({
                          newVet: {
                           
         
          branch_id: '',
          rank_id : '',
          start_date: '',
          end_date: '',
          status_id: '',
          discharge_id: '',
         
          
                          },
                         })
                    }
                    
                  }
        
  
render(){
    const { classes } = this.props;

    return(
        <>
        <h1>ServiceHistoryForm</h1>
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
                  

{/* <Grid item xs={12.0} sm={12}>  */}
                    <TextField
                    id="standard-textarea"
                   variant="outlined"
                   label="Branch ID"
                  //  rows={4}
                  //   rowsMax={20}
                   name="branch_id"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                   value={this.state.newVet.branch_id}
                onChange ={ (event) => this.handleInputChange( event, 'branch_id' ) } 
                   />

{/* </Grid>  */}

<br/> 

{/* <Grid item xs={12.0} sm={12}>  */}
                    <TextField
                    id="standard-textarea"
                   variant="outlined"
                   label="Rank ID"
                  //  rows={4}
                  //   rowsMax={20}
                   name="rank_id"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                   value={this.state.newVet.rank_id}
                onChange ={ (event) => this.handleInputChange( event, 'rank_id' ) } 
                   />

{/* </Grid>  */}

<br/> 

{/* <Grid item xs={12.0} sm={12}>  */}
<TextField
                    id="standard-textarea"
                   variant="outlined"
                   label="Start Date"
                  //  rows={4}
                  //   rowsMax={20}
                   name="start_date"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                   value={this.state.newVet.start_date}
                onChange ={ (event) => this.handleInputChange( event, 'start_date' ) } 
                   />

{/* </Grid>  */}

<br/> 

{/* <Grid item xs={12.0} sm={12}>  */}
<TextField
                    id="standard-textarea"
                   variant="outlined"
                   label="End Date"
                  //  rows={4}
                  //   rowsMax={20}
                   name="end_date"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                   value={this.state.newVet.end_date}
                onChange ={ (event) => this.handleInputChange( event, 'end_date' ) } 
                   />

{/* </Grid>  */}

<br/> 

{/* <Grid item xs={12.0} sm={12}>  */}
<TextField
                    id="standard-textarea"
                   variant="outlined"
                   label="Status ID"
                  //  rows={4}
                  //   rowsMax={20}
                   name="status_id"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                   value={this.state.newVet.rank_id}
                onChange ={ (event) => this.handleInputChange( event, 'status_id' ) } 
                   />

{/* </Grid>  */}

<br/> 


{/* <Grid item xs={12.0} sm={12}>  */}
<TextField
                    id="standard-textarea"
                   variant="outlined"
                   label="Discharge ID"
                  //  rows={4}
                  //   rowsMax={20}
                   name="discharge_id"
                  //  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                   value={this.state.newVet.discharge_id}
                onChange ={ (event) => this.handleInputChange( event, 'discharge_id' ) } 
                   />

{/* </Grid>  */}

<br/> 


{/* <Grid item xs={12.0} sm={12}>  */}

</Grid> 

<br/> 





                 <Grid item xs={12.0} sm={12}> 

                 <Button 
                 onClick={this.saveServiceHistory}
          // addArtProp={this.addArt}
           elevation={20}  
          //  className={classes.typography}
          //  textAlign='center'
          //  justify='center'
           style={{justifyContent: 'center'}}
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
                 <br/> 

               </form>
               {/* </Card> */}
               {/* </Grid> */}
               </Paper>
               
           </Grid>
          
        </>
    )//END return
}//END render

}//END DemographicsForm

export default connect(mapStoreToProps)(withStyles(styles)(ServiceHistoryForm));
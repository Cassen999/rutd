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

  class DemographicsForm extends Component {

    state = {
        newVet: {
          first_name: '',
          last_name: '',
          email: '',
          date_of_birth: '',
          number: '',
          gender_id: '',
          married_id: '',
          children: '',
          homeless: '',
          current_address: '',
          city: '',
          state_id: '',
          zipcode: '',
          country_id: '',
          mailing_adress: '',
          branch_id: '',
          rank_id : '',
          start_date: '',
          end_date: '',
          status_id: '',
          discharge_id: '',
          injury_id: '',
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
                      newVet : {
                        ...this.state.newVet,
                        [inputProperty]: event.target.value,
                        user_id: this.props.store.user.id
                      }
                    }, function () {
                        console.log('state has been set:', this.state);
                    })
                  }

                  saveDemographics = () => {
                    if(this.state.newVet.first_name === '') {
                        alert('A name is required for registration.')
                    } else {
                    
                        console.log(`Saving ${this.state.newVet.first_name}'s demographics to Database...`);
                    //Clear message... should say Hello!
                    //console.log(`Sending ${this.state.newArt} to DB.`);
        
                         this.props.dispatch({ type: 'ADD_DEMOGRAPHIC', payload: this.state.newVet })
                         this.setState({
                          newVet: {
                            first_name: '',
          last_name: '',
          email: '',
          date_of_birth: '',
          number: '',
          gender_id: '',
          married_id: '',
          children: '',
          homeless: '',
          current_address: '',
          city: '',
          state_id: '',
          zipcode: '',
          country_id: '',
          mailing_adress: '',
          branch_id: '',
          rank_id : '',
          start_date: '',
          end_date: '',
          status_id: '',
          discharge_id: '',
          injury_id: '',
           compensation: '',
           percentage: '',
           danger_areas: '',
           purple_heart: '',
                          },
                         })
                    }
                    
                  }
        
  
render(){
    const { classes } = this.props;

    return(
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
                   <TextField
                   variant="outlined"
                   label="First Name"
                   name="first_name"
                  // className={classes.inputs}
                                    value={this.state.newVet.title}
                    onChange ={ (event) => this.handleInputChange( event, 'first-name' ) } 
                   />
                 {/* </Grid>  */}
<br/>
                {/* <Grid item xs={12.0} sm={12}> */}
                {/* // align="center">  */}
                   <TextField
                   variant="outlined"
                   label="Last Name"
                   name="last_name"
                  //  className={classes.inputs}
                   value={this.state.newVet.last_name}
                onChange ={ (event) => this.handleInputChange( event, 'last_name' ) } 
                   />
                 {/* </Grid> */}
                 <br/> 

                 {/* <Grid item xs={12.0} sm={12}>  */}
                   <TextField
                   variant="outlined"
                   label="Email"
                   name="email"
                  //  className={classes.inputs}

                   value={this.state.newVet.email}
                onChange ={ (event) => this.handleInputChange( event, 'email' ) } 

                   />

                 {/* </Grid>   */}
                 <br/> 

                 {/* <Grid item xs={12.0} sm={12}>  */}
                    <TextField
                   variant="outlined"
                   label="Date of Birth"
                   name="date_of_birth"
                   value={this.state.newVet.date_of_birth}
                onChange ={ (event) => this.handleInputChange( event, 'date_of_birth' ) } 

                   />

                 {/* </Grid>  */}
                 <br/> 

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
                onChange ={ (event) => this.handleInputChange( event, 'number' ) } 
                   />




                 {/* </Grid>  */}
                 <br/> 

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
                onChange ={ (event) => this.handleInputChange( event, 'gender_id' ) } 
                   />
{/* </Grid>  */}
<br/> 

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
                onChange ={ (event) => this.handleInputChange( event, 'married_id' ) } 
                   />
{/* </Grid>  */}
<br/> 
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
                onChange ={ (event) => this.handleInputChange( event, 'children' ) } 
                   />

{/* </Grid>  */}

                 <br/> 


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
                onChange ={ (event) => this.handleInputChange( event, 'homeless' ) } 
                   />
{/* </Grid>  */}

<br/> 

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
                onChange ={ (event) => this.handleInputChange( event, 'current_address' ) } 
                   />

{/* </Grid>  */}

<br/> 


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
                onChange ={ (event) => this.handleInputChange( event, 'city' ) } 
                   />

{/* </Grid>  */}

<br/> 

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
                onChange ={ (event) => this.handleInputChange( event, 'state_id' ) } 
                   />

{/* </Grid>  */}

<br/> 

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
                onChange ={ (event) => this.handleInputChange( event, 'zipcode' ) } 
                   />

{/* </Grid>  */}

<br/> 


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
                onChange ={ (event) => this.handleInputChange( event, 'country_id' ) } 
                   />

{/* </Grid>  */}

<br/> 



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
                   value={this.state.newVet.mailing_adress}
                onChange ={ (event) => this.handleInputChange( event, 'mailing_address' ) } 
                   />

{/* </Grid>  */}

<br/> 

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
                onChange ={ (event) => this.handleInputChange( event, 'injury_id' ) } 
                   />

{/* </Grid>  */}

<br/> 


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
                onChange ={ (event) => this.handleInputChange( event, 'compensation' ) } 
                   />

{/* </Grid>  */}

<br/> 

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
                onChange ={ (event) => this.handleInputChange( event, 'percentage' ) } 
                   />

{/* </Grid>  */}

<br/> 

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
                onChange ={ (event) => this.handleInputChange( event, 'danger_areas' ) } 
                   />

{/* </Grid>  */}

<br/> 

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
                onChange ={ (event) => this.handleInputChange( event, 'purple_heart' ) } 
                   />

</Grid> 

<br/> 





                 <Grid item xs={12.0} sm={12}> 

                 <Button 
                 onClick={this.saveDemographics}
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

export default connect(mapStoreToProps)(withStyles(styles)(DemographicsForm));
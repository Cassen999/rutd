import React, { Component } from 'react'
//import { useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { AppBar, FormControl, InputLabel, Select, Input, MenuItem, FormHelperText, Button, Toolbar, Grid, Badge, CardMedia, IconButton, makeStyles, Paper, InputBase, Card, CardActionArea } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

// import '../../../App/App.css';

const styles = theme=>({
   inputs: {
      width: '',
      paddingTop: '0px',
      // marginTop: '20px',
      verticalAlign: 'middle',
      fontFamily: 'Arial'
      // height: '100%'
   },
   menu: {
      width: 200,
    },
   container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
   textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  
   //     paperContainer: {
   //       backgroundImage: `url(${canvas})`
   //   },
   //   typography : {
   //     fontFamily : 'Arial'
})

class CompensationForm extends Component {


componentDidMount(){
  console.log('Mounted')
  this.props.dispatch({type: 'FETCH_PERCENTAGE'})

}
state = {
   type: '0'
 };


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
   handleInputChangeFor = (propertyName) => (event) => {
      this.setState({
        [propertyName]: event.target.value,
      });
    };
  

   saveCompensation = () => {
      if (this.state.newVet.first_name === '') {
         alert('A name is required for registration.')
      } else {

         console.log(`Saving ${this.state.newVet.first_name}'s demographics to Database...`);
         //Clear message... should say Hello!
         //console.log(`Sending ${this.state.newArt} to DB.`);

         this.props.dispatch({ type: 'UPDATE_COMPENSATION', payload: this.state.newVet })
         this.setState({
            newVet: {

               compensation: '',
               percentage: '',
               danger_areas: '',
               purple_heart: '',
            },
         })
         // this.props.history.push('/home')
      }

   }


   render() {
      const { classes } = this.props;
      const percentage = this.props.store.percentageReducer

      return (
         <>
            <h1>CompensationForm</h1>
            <Paper
                  className=''
                  // style={styles.paperContainer}
                  elevation={10}
               // className={classes.paper} 
               // backgroundImage={canvas}                                                      
               >
                  Are you currently being compensated by the VA?
                  <br/>
                  <label>Yes</label>
              <Radio
                checked={this.state.type === '1'}
                onChange={this.handleInputChangeFor('type')}
                value='1'
                name="Yes"
                aria-label="Yes"
                classes={{
                  root: classes.root,
                  checked: classes.checked,
              }}
              />
              <label>No</label>
              <Radio
                checked={this.state.type === '0'}
                onChange={this.handleInputChangeFor('type')}
                value='0'
                name="No"
                aria-label="No"
                classes={{
                  root: classes.root,
                  checked: classes.checked,
              }}
             />
             <div> &nbsp;


              { this.state.type === '1' && // if this part is false, the next part won't show
                
                
                <Radio
                checked={this.state.type === '0'}
                onChange={this.handleInputChangeFor('type')}
                value='0'
                name="No"
                aria-label="No"
                classes={{
                  root: classes.root,
                  checked: classes.checked,
              }}
             />
                
                
                } 
         
         
         
         
         
            </div>
<form>
{/* <FormControl className={classes.formControl}>
<InputLabel htmlFor="age-auto-width">Age</InputLabel>
           <Select
            value={this.state.newVet.compensation}
            // onChange={this.handleChange}
            input={<Input name="age" id="age-label-placeholder" />}
            displayEmpty
            name="age"
            className={classes.selectEmpty}
          >
             <MenuItem value="" disabled>
              Placeholder
            </MenuItem>
           <MenuItem>
         <em>No</em>
           </MenuItem>
           <MenuItem>
          Yes
           </MenuItem>
</Select>
<br/>
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
                        <br/>
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
                        <br/>

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
                        <br/>

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
                        <br/>
                        <Button
                           onClick={this.saveCompensation}
                           // addArtProp={this.addArt}
                           // elevation={20}
                           //  className={classes.typography}
                           //  textAlign='center'
                           //  justify='center'
                           // style={{ justifyContent: 'center' }}
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
                        >FINISH</Button>

</FormControl> */}
   </form>





            {/* <Grid container
               className=''
               //alignItems="center"
               spacing={2}
               direction="column"> */}
               </Paper>

            {/* </Grid> */}

         </>
      )//END return
   }//END render

}//END DemographicsForm

export default connect(mapStoreToProps)(withStyles(styles)(CompensationForm));
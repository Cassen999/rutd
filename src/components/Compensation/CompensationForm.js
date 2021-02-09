import React, { Component } from 'react'
//import { useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { AppBar, FormControl, InputLabel, FormLabel, RadioGroup, FormControlLabel, Select, Input, MenuItem, FormHelperText, Button, Toolbar, Grid, Badge, CardMedia, IconButton, makeStyles, Paper, InputBase, Card, CardActionArea } from '@material-ui/core'
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
   percentageId: '0',

   type: '0',
   typeTwo: '2',
   value: '0',
   name: '',
   age: '',
   multiline: '',
   currency: '' 
};

handleChange = event => {
   this.setState({ value: event.target.value });
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

   handleClick = (event, percentId) => {
      console.log(percentId);
      // console.log('Setting state...');

      this.setState({
         percentageId : percentId

         },function() {
            console.log(`percentage ID: ${this.state.percentage}`);
            
         }
        
      // }, function () {
      //    console.log('state has been set:', this.state);
      // })
   )

   }

   handleTextChange = name => event => {
      this.setState({ 
         ...this.state,
         [name]: event.target.value }, function() {
            console.log(`State has been set: ${this.state.multiline}`)
         });
    };
  

   handleInputChangeFor = (propertyName) => (event) => {
      this.setState({
        [propertyName]: event.target.value,
      }, function() {
         console.log(`State has been set`)
      });
    };
  

   saveCompensation = () => {
      // if (this.state.newVet.first_name === '') {
      //    alert('A name is required for registration.')
      // } else {

         console.log(`Saving compensation rate...`);
         //Clear message... should say Hello!
         //console.log(`Sending ${this.state.newArt} to DB.`);

         this.props.dispatch({ type: 'UPDATE_COMPENSATION', payload: this.state.percentageId })
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

   // }


   render() {
      const { classes } = this.props;
      const percentages = this.props.store.percentageReducer

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
                  Are you currently registered with the VA?
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
                
                
                <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Compensation Rate</FormLabel>
          <RadioGroup
            aria-label="Compensation Rate"
            name="gender1"
            className={classes.group}
            value={this.state.percentId}
            onChange={this.handleChange}
          >
               {percentages.map((percent) => (

            <FormControlLabel key={percent.description} value={percent.description} 
            control={<Radio onClick={(event)=>this.handleClick(event, percent.id)}
               
               />} 
            label={percent.description} />
            // <FormControlLabel value="male" control={<Radio />} label="Male" />
            // <FormControlLabel value="other" control={<Radio />} label="Other" />
            // <FormControlLabel
            //   value="disabled"
            //   disabled
            //   control={<Radio />}
            //   label="(Disabled option)"
            // />
            ))}

          </RadioGroup>
        </FormControl>
                



                }  
Have you been deployed to imminent danger areas
<br/>
<label>Yes</label>
              <Radio
                checked={this.state.typeTwo === '3'}
                onChange={this.handleInputChangeFor('typeTwo')}
                value='3'
                name="Yes"
                aria-label="Yes"
                classes={{
                  root: classes.root,
                  checked: classes.checked,
              }}
              />
              <label>No</label>
              <Radio
                checked={this.state.typeTwo === '2'}
                onChange={this.handleInputChangeFor('typeTwo')}
                value='2'
                name="No"
                aria-label="No"
                classes={{
                  root: classes.root,
                  checked: classes.checkedTwo,
              }}
             />

         
{ this.state.typeTwo === '3' && // if this part is false, the next part won't show
<form>
<TextField
          id="standard-multiline-flexible"
          label="Describe danger areas"
          multiline
          rows="5"
          variant='outlined'
          rowsMax="10"
          value={this.state.multiline}
          onChange={this.handleTextChange('multiline')}
          className={classes.textField}
          margin="normal"
        />

       </form>
            }
                               <button onClick={this.saveCompensation}>Next</button>

         {/* <div>
  {percentages.map((percent, i) => (
    this.state.type === '1'

      ? (              

      <Radio
      key={i}
         checked={this.setstate({
            percentage : percent.id
         })
      
      
      
      }
         onChange={this.handleInputChangeFor('type')}
         value={percent.description}
         name="No"
         label={percent.description}
         aria-label="No"
         classes={{
           root: classes.root,
           checked: classes.checked,
       }}
      />)
      : null
  ))}
</div> */}

         
         
         
            </div>
<form>
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
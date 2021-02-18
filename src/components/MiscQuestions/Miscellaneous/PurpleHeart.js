import React, { Component } from 'react';
import clsx from 'clsx';
import {  
  FormControl,
  Radio,
  Typography,
  Fab   
} from "@material-ui/core";
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';

class PurpleHeart extends Component {
  render() {
    const classes = this.props.classes;
    const purpleHeart = this.props.purpleHeart;
    return (
      <div
        display="inline-flex"
      >     
        <Typography className={classes.textControl}>
          Have you been awarded a Purple Heart?
        </Typography>
        <div 
          className={classes.selectContainer}
          display="flex"  
        >
          <label className={classes.label}>Yes</label>
          <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}      
            checked={purpleHeart === true}
            value={true}
            onClick={(event) => this.props.updateState(event, 'purpleHeart')}
          />
          <label className={classes.label}>No</label>         
          <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            checked={purpleHeart === false} 
            value={false}
            onClick={(event) => this.props.updateState(event, 'purpleHeart')}
          />
          {purpleHeart === true && (
            <Fab
              className="float-right"
              style={{
                  borderRadius: 35,
                  backgroundColor: '#AFFA3D',
                  fontFamily: 'orbitron',
                  marginBottom: '10%',
                  marginRight: '10px',
              }}
              onClick={(event) => { this.saveDemographic(event) }}>
              <SaveTwoToneIcon />
            </Fab>    
          )}
        </div>  
      </div>
    );
  }
}

export default PurpleHeart;


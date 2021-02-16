import React, { Component } from 'react';
import clsx from 'clsx';
import {  
  FormControl,
  Radio,
  Typography  
} from "@material-ui/core";
class PurpleHeart extends Component {
  render() {
    const classes = this.props.classes;
    const purpleHeart = this.props.purpleHeart;
    return (
      <div
        //className="container"
        display="inline-block"
      >     
        <Typography className={classes.textControl}>Have you been awarded a Purple Heart?</Typography>
        <div 
          className={classes.selectContainer}
          display="block"  
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
            <form className={classes.formControl} onSubmit={(event) => this.props.saveProgress(event)}>
              <input className="btn" type="submit" name="submit" value="Save Progress" />
            </form>     
          )}
        </div>  
      </div>
    );
  }
}

export default PurpleHeart;


import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import clsx from 'clsx';
import { Radio, Typography } from "@material-ui/core";

class Hazard extends Component {
  render() {
    const classes = this.props.classes;
    const imminentDanger = this.props.imminentDanger;
    const dangerDescription = this.props.dangerDescription;
    return (
      <div
        display="inline-flex" 
      >
        <Typography className={classes.textControl}>
          Have you served in any imminent danger areas?
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
              checked={imminentDanger === true}
              value={true}
              onClick={(event) => this.props.updateState(event, 'imminentDanger')}
            />           
            <label className={classes.label}>No</label>         
            <Radio
              className={classes.root}
              disableRipple
              color="default"
              checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
              icon={<span className={classes.icon} />}
              checked={imminentDanger === false} 
              value={false}
              onClick={(event) => this.props.updateState(event, 'imminentDanger')}
            />
            {imminentDanger === true && ( // if this part is false, the next part won't show
              <TextField
                id="standard-multiline-flexible"
                label="Describe danger areas"
                multiline
                rows="5"
                variant="outlined"
                rowsMax="10"
                value={dangerDescription}
                onChange={(event) => this.props.updateState(event, 'dangerDescription')}
                className={classes.formControl}
                margin="normal"
              />
            )}
        </div>
      </div>
    );
  }
}

export default Hazard;
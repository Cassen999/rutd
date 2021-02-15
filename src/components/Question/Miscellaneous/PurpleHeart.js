import React, { Component } from 'react';
import clsx from 'clsx';
import {  
  FormControl,
  Radio,
  Grid,
  Typography  
} from "@material-ui/core";
class PurpleHeart extends Component {
  render() {
    const classes = this.props.classes;
    const purpleHeart = this.props.purpleHeart;
    return (
      <>     
        <Typography >Are you currently registered with the VA?</Typography>
        <Grid
          container
          spacing={1}
          direction="row"
          className={classes.gridContainer}
        >
          <Grid
            container
            item
            xs={6}
            sm={3}
            spacing={2}
            justify="flex-start"
            alignItems="center"     
          >
            <Grid item xs={3}>
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
            </Grid>
            <Grid item xs={3}>
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
            </Grid>
            <Grid item xs={3}>
              {purpleHeart === true && (
                <form className={classes.formControl} onSubmit={(event) => this.props.saveProgress(event)}>
                  <input className="btn" type="submit" name="submit" value="Save Progress" />
                </form>     
              )}
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default PurpleHeart;


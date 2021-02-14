import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import clsx from 'clsx';
import { FormControl, Radio, Grid } from "@material-ui/core";  
class Hazard extends Component {
  render() {
    const classes = this.props.classes;
    const imminentDanger = this.props.imminentDanger;
    const dangerDescription = this.props.dangerDescription;
    return (
      <>
        <p>Have you been deployed to imminent danger areas?</p>
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
                checked={imminentDanger === true}
                value={true}
                onClick={(event) => this.props.updateState(event, 'imminentDanger')}
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
                checked={imminentDanger === false} 
                value={false}
                onClick={(event) => this.props.updateState(event, 'imminentDanger')}
              />
            </Grid>
            <Grid item xs={3}>
              {imminentDanger === true && ( // if this part is false, the next part won't show
                <FormControl>
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
                </FormControl>
              )}
            </Grid>
          </Grid>
        </Grid>
      </>
    ); //END return
  } //END render
} //END DemographicsForm

export default Hazard;
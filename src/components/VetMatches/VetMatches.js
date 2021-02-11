import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import ProgressBar from "../ProgressBar/ProgressBar";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import compose from 'recompose/compose';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
});

class VetMatches extends Component {
  state = {
    vetId: this.props.store.vetReducer.id,
  };

  contactOrg = (org_id) => {
    let today = new Date();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    console.log("Contacting Org and time, org_id, vet_id", time, org_id, this.state.vetId);
    this.props.dispatch({type: 'POST_NEW_MATCH', payload: {vet_id: this.state.vetId, org_id: org_id, time: time}})
  };

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_VET_ID', payload: this.props.store.user.id})
  };

  render() {

    const { classes } = this.props;
    const matches = this.props.store.vetMatchReducer;

    return (
        <div>
          {JSON.stringify(matches)}
          {JSON.stringify(this.state)}
          <h2>{this.state.heading}</h2>
          <FormControl className={classes.formControl}>
            {/* <InputLabel id="search-category-label">Category</InputLabel>
            <Select
              labelId="search-category-label"
              id="search-category"
              value={matches}
              input={<Input />}
            >
              {matches.map((match, i) => (
                <MenuItem key={i} value={match.name} >
                  {match.name}
                </MenuItem>
              ))}
            </Select> */}
          </FormControl>
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid container item xs={9} spacing={3}>
                {matches.map((match, i) => (
                  <React.Fragment>
                    <Grid item key={i} xs={2}>
                      <Paper className={classes.paper}>
                        <img
                          className="resource-icon"
                          alt={match.pictures}
                          // src="https://www.redcross.org/content/dam/redcross/imported-images/redcross-logo.png.img.png"
                        />
                      </Paper>        
                    </Grid>
                    <Grid item key={i} xs={3}>
                      <Paper className={classes.paper}>
                        {match.name}
                      </Paper>        
                    </Grid>
                    <Grid item key={i} xs={3}>
                      <Paper className={classes.paper}>
                        {match.description}
                      </Paper>        
                    </Grid>
                    <Grid item key={i} xs={3}>
                      <Paper className={classes.paper}>
                        {match.website}
                      </Paper>        
                    </Grid>
                    <Grid item key={i} xs={3}>
                      <Paper className={classes.paper}>
                        <button onClick={(event) => this.contactOrg(match.org_id)}>
                          Save Match and Contact
                        </button>
                      </Paper>        
                    </Grid>              
                  </React.Fragment>            
                ))}
              </Grid>
            </Grid>
          </div>
        
        <ProgressBar value={30} />
        <button onClick={(event) => this.props.history.push("/home")}>
          BACK TO HOME
        </button>
      </div>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStoreToProps)
)(withRouter(VetMatches));

import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import ProgressBar from "../ProgressBar/ProgressBar";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import compose from 'recompose/compose';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class VetMatches extends Component {
  state = {
    heading: "Vet Matches",
  };

  contactOrg = (event) => {
    console.log("Contacting Org");
  };

  // componentDidMount() {
  //   this.props.dispatch({ type: "FETCH_CATEGORY" });
  //   this.props.dispatch({ type: "FETCH_MATCH" });
  // }

  render() {

    const { classes } = this.props;
    const matches = this.props.store.vetMatchReducer;

    return (
      <div>
        <h2>{this.state.heading}</h2>
        <button onClick={(event) => this.props.history.push("/home")}>
          BACK TO HOME
        </button>
        <button onClick={(event) => this.contactOrg(event)}>CONTACT ORG</button>

    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
        
        <Grid container className={classes.root} spacing={2}><Paper className={classes.paper}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {matches.map((match, i) => (
                <Grid key={i} item>
                  
                </Grid>
              ))}
            </Grid>
         </Grid></Paper>
        </Grid>
        
        <ProgressBar value={30} />
      </div>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStoreToProps)
)(withRouter(VetMatches));

import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import ProgressBar from "../ProgressBar/ProgressBar";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import compose from 'recompose/compose';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '2em'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  fab: {
    margin: theme.spacing.unit,
  },
});

class VetMatches extends Component {
  state = {
    vetId: this.props.store.vetReducer.id,
    vetFirstName: this.props.store.vetReducer.first_name,
    vetLastName: this.props.store.vetReducer.last_name,
    vetEmail: this.props.store.vetReducer.email,
    textbox: this.props.store.emailReducer,
    sender_type: 1
  };
  
  componentDidMount() {
    if(this.props.store.emailReducer !== []) {
      this.setState({
        textbox: this.props.store.emailReducer
      })
    }
    else if(this.props.store.emailReducer === []) {
      this.setState({
        textbox: ''
      })
    }
  }

  contactOrg = (org_id, orgName, org_email, id) => {
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const state = this.state
    console.log("Contacting Org and time, org_id, vet_id", time, org_id, this.state.vetId);
    this.props.dispatch({type: 'POST_NEW_MATCH', payload: {vet_id: this.state.vetId, 
      org_id: org_id, time: time}});
    this.props.dispatch({type: 'POST_EMAIL', payload: {org_id: org_id, 
      orgName: orgName,  org_email: org_email,
      text: state.textbox, vetFirstName: state.vetFirstName, 
      vetLastName: state.vetLastName, vetEmail: state.vetEmail, 
      sender_type: state.sender_type}})
  };

  // dispatchFunction = (org_id, orgName, org_email) => {
  //   this.props.dispatch({type: 'FETCH_MATCH_EXIST', payload: {vetId: this.props.store.user.id, orgId: org_id}}) 
  // }

  checkIfExists = (org_id, orgName, org_email, event) => {
    const matchArray = []
    console.log('vetMatch check if exists event.id', event.currentTarget.id, matchArray.includes(event.currentTarget.id))
    // this.props.dispatch({type: 'FETCH_MATCH_EXIST', payload: {vetId: this.props.store.user.id, orgId: org_id}}) 
    if(matchArray.includes(event.currentTarget.id) === false) {
      matchArray.push(event.currentTarget.id)
      this.contactOrg(org_id, orgName, org_email)
    }
    else if( matchArray.includes(event.currentTarget.id) === true) {
      this.alreadySavedAlert(org_id, orgName, org_email)
    }
  }
  
  alreadySavedAlert = (org_id, orgName, org_email) => {
    swal({
      title: "You have already contacted this resource!",
      icon: "info",
      text: `If you have not heard back from them, click "Contact Again"`,
      buttons: {
        cancel: "Ok",
        contact: "Contact Again",
      },
    })
      .then((value) => {
        switch(value) {
          case "contact":
            swal('We sent them another message!', this.props.dispatch({
              type: 'POST_EMAIL',
              payload: {org_id: org_id, 
                orgName: orgName,  
                org_email: org_email,
                text: 'Reaching out again to get an application update or connect again', 
                vetFirstName: this.state.vetFirstName, 
                vetLastName: this.state.vetLastName, 
                vetEmail: this.state.vetEmail, 
                sender_type: this.state.sender_type}
            }))
            break;
          default:
            swal('Returning to matches')
        }
      })
  }

  // switchSaveButton = (match, m) => {
  //   if(this.props.store.matchExistReducer === false) {
  //     return (
  //       <Grid item key={m} xs={3}>
  //         <Fab 
  //           style={{
  //             borderRadius: 35,
  //             backgroundColor: '#AFFA3D',
  //             fontFamily: 'orbitron',
  //           }}
  //           onClick={(event) => this.contactOrg(match.org_id, match.name, match.email)}>
  //         </Fab>
  //       </Grid> 
  //     )
  //   }
  //   else {
  //     return (
  //       <Grid item key={m} xs={3}>
  //         <Fab 
  //           style={{
  //             borderRadius: 35,
  //             backgroundColor: '#AFFA3D',
  //             fontFamily: 'orbitron',
  //           }}
  //           onClick={this.alreadySavedAlert(match.org_id, match.name, match.email)}>
  //         </Fab>
  //       </Grid>
  //     )
  //   }
  // }

  render() {

    const { classes } = this.props;
    const matches = this.props.store.vetMatchReducer;

    return (
        <div>
          {JSON.stringify(this.props.store.matchExistReducer)}
          <Button onClick={(event) => this.props.history.push("/home")}
            variant="contained"
            style={{
              borderRadius: 35,
              width: '25px',
              height: '40px',
              backgroundColor: '#AFFA3D',
              fontFamily: 'orbitron',
            }}>
            <HomeRoundedIcon />
          </Button>
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid container item xs={9} spacing={3}>
                {matches.map((match, i, j, k, l, m) => (
                  <React.Fragment>
                    <Paper className={classes.paper}> 
                      <Grid item key={i} xs={2}>
                          <img
                            className="resource-icon"
                            alt={match.pictures}
                            // src="https://www.redcross.org/content/dam/redcross/imported-images/redcross-logo.png.img.png"
                          />        
                      </Grid>
                      <Grid item key={j} xs={3}>
                          {match.name}       
                      </Grid>
                      <Grid item key={k} xs={3}>
                          {match.description}       
                      </Grid>
                      <Grid item key={l} xs={3}>
                          {match.website}      
                      </Grid>
                      <Grid item key={m} xs={3}>
                        <Fab
                          id={uuidv4()}
                          style={{
                              borderRadius: 35,
                              backgroundColor: '#AFFA3D',
                              fontFamily: 'orbitron',
                            }}
                          onClick={(event) => this.checkIfExists(match.org_id, match.name, match.email, event)}>
                            <FavoriteRoundedIcon />
                      </Fab>
                      </Grid>              
                    </Paper>        
                  </React.Fragment>            
                ))}
              </Grid>
            </Grid>
          </div>
        {/* <ProgressBar value={30} /> */}
      </div>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStoreToProps)
)(withRouter(VetMatches));

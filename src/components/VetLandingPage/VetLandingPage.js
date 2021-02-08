import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import './VetLandingPage.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  gridList: {
    width: 200,
    height: 400,
    padding: 1,
    margin: 10,
  },
  gridListTile: {
    border: '2px solid',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    padding: 2,
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 500,
    height: 300,
    margin: '-150px 0 0 -250px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});

class UserPage extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {
      completeMatchIndex: 0,
      incompleteMatchIndex: 0,
      modalOpen: false,
    }
  }
  
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_COMPLETE_MATCH',
      payload: this.props.store.user.id
    });

  }

  handleClick = (btnValue) => {
    switch (btnValue) {
      case 'edit':
        return this.props.history.push('/vetmatches');
      case 'emergency': 
        return this.setState({modalOpen: true});
      case 'closeModal': 
        return this.setState({modalOpen: false});
      case 'allMatches':
        return this.props.history.push('/vetmatches');
      case 'incrementComplete':
        return this.setState({completeMatchIndex: +1});
      case 'incrementIncomplete':
        return this.setState({incompleteMatchIndex: +1});
      case 'decrementComplete':
        return this.setState({completeMatchIndex: -1});
      case 'decrementIncomplete':
        return this.setState({incompleteMatchIndex: -1});
    }
  }

  render() {
    const { classes } = this.props;
    
    const emergencyModal = (
      <div className={classes.paper}>
        <h2 id="modal-title">Emergency Contact Numbers</h2>
        <ul id="emergency-contacts">
          <li>Veteran’s Crisis Line:  1-800-273-8255 </li>
          <br />
          <li>National Suicide Prevention Lifeline:  800-273-8255</li>
          <br />
          <li>The STARRY Counseling Program Crisis Hotline:  800-440-9789</li>
        </ul>
        <br />
        <Button variant="contained" onClick={() => this.handleClick('closeModal')}>Close</Button>
      </div>
    );

    const matches = this.props.store.vetMatchReducer;
    const incompleteMatches = this.props.store.incompleteMatchReducer;
    const { completeMatchIndex, incompleteMatchIndex, modalOpen } = this.state

    return (
      <div id="pageBody">
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <div id="cardContainer">
          <div id="completedMatches" className="matchDisplay"> 
            <h1 id="completeTitle">Complete Matches</h1>
            <Paper id="completedPaper" elevation={3}>
            <Grid container spacing={1} direction="row">
                <Grid container item xs={12} spacing={3} justify="space-evenly" alignItems="stretch" className={classes.gridList} >
                  {matches.map( (match, index) => {
                    if (match.approved !== null && (index === completeMatchIndex || index === completeMatchIndex + 1)) {
                      return(
                        <Grid item xs={5} className={classes.gridListTile} key={match.id}>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {match.name}
                          </Typography>
                          <Typography variant="h5" component="h2">
                            {match.description}
                          </Typography>
                          <Typography className={classes.pos} color="textSecondary">
                            {match.website}
                          </Typography>
                          <Typography variant="body2" component="p">
                            {match.email}
                          </Typography>
                          <Typography variant="body2" component="p">
                            {match.number}
                          </Typography>
                        </Grid>           
                      )
                    }
                  })}
                </Grid>
              </Grid>
              <IconButton id="decrement-match-index" variant="contained" onClick={() => this.handleClick('decrementComplete')}><ChevronLeftIcon /></IconButton>
              <IconButton id="increment-match-index" variant="contained" onClick={() => this.handleClick('incrementComplete')}><ChevronRightIcon /></IconButton>
            </Paper>
          </div>
          <div id="incompleteContainer" className="matchDisplay">
            <h1 id="incompleteTitle">Matches in Progress</h1>
            <Paper id="incompletePaper" className={classes.root} elevation={3}>
            <Grid container spacing={1} direction="row">
                <Grid container item xs={12} spacing={3} justify="space-evenly" alignItems="stretch" className={classes.gridList} >
                  {incompleteMatches.map((match, index) => {
                    if (index === incompleteMatchIndex || index === incompleteMatchIndex + 1) {
                      return(
                        <Grid item xs={5} className={classes.gridListTile} key={match.id}>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {match.name}
                          </Typography>
                          <Typography variant="h5" component="h2">
                            {match.description}
                          </Typography>
                          <Typography className={classes.pos} color="textSecondary">
                            {match.website}
                          </Typography>
                          <Typography variant="body2" component="p">
                            {match.email}
                          </Typography>
                          <Typography variant="body2" component="p">
                            {match.number}
                          </Typography>
                        </Grid>           
                      )
                    }
                  })}
                </Grid>
              </Grid>
              <IconButton id="decrement-incomplete-index" variant="contained" onClick={() => this.handleClick('decrementIncomplete')}><ChevronLeftIcon /></IconButton>
              <IconButton id="increment-incomplete-index" variant="contained" onClick={() => this.handleClick('incrementIncomplete')}><ChevronRightIcon /></IconButton>
            </Paper>
          </div>
        </div>
          <div id="btnContainer">
              <Button id="editBtn" variant="contained" onClick={() => this.handleClick('edit')}>View/Edit Profile</Button>
              <Button id="emergencyBtn" variant="contained" color="secondary" onClick={() => this.handleClick('emergency')}>Emergency Numbers</Button>
              <Button id="allMatchBtn" variant="contained" onClick={() => this.handleClick('allMatches')}>View All Matches</Button>
          </div>
          <Modal
            open={modalOpen}           
            aria-labelledby="modal-title"
            aria-describedby="emergency-contacts"
          >
            {emergencyModal}
          </Modal>  
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default withRouter(withStyles(styles, {withTheme: true})(connect(mapStoreToProps)(UserPage)));


// TODO //

// Nav Bar
// GET route to get their matches in progress
// GET route to get their completed matches
// Set up card view for in progress and completed matches
// View and Edit button routes - same page for Vet and Admin or different
// Emergency numbers button
// View all Matches button - route and dispatch


import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import './VetLandingPage.css';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';

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
  }
});

class UserPage extends Component {
  
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
        return alert('clicked emergency button');
      case 'allMatches':
        return this.props.history.push('/vetmatches');
    }
  }

  render() {
    const { classes } = this.props; 
    return (
      <div id="pageBody">
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <div id="cardContainer">
          <div id="completedMatches" className="matchDisplay"> 
            <h1 id="completeTitle">Complete Matches</h1>
            <Paper id="completedPaper" elevation={3}>
            <Grid container spacing={1} direction="row">
                <Grid container item xs={12} spacing={3} justify="space-evenly" alignItems="stretch" className={classes.gridList} >
                  {this.props.store.vetMatchReducer.map(match => {
                    return(
                      <Grid item xs={5} className={classes.gridListTile} key={match.id}>
                      {/* <Card key={match.id} id="matchCard" variant="outlined" >
                      <CardContent className={classes.card}> */}
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
                      {/* </CardContent>
                      </Card>  */}
                      </Grid>           
          )
        })}
        </Grid>
        </Grid>
        </Paper>
        </div>
        <div id="incompleteContainer" className="matchDisplay">
        <h1 id="incompleteTitle">Matches in Progress</h1>
        <Paper id="incompletePaper" className={classes.root} elevation={3}>
        <Card id="matchCard" variant="outlined">
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Blopadnfa
                  </Typography>
                  <Typography variant="h5" component="h2">
                    asldkfn
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    asdfasdf
                  </Typography>
                  <Typography variant="body2" component="p">
                    asdfasdfasdf
                  </Typography>
                  <Typography variant="body2" component="p">
                    asdfasdfa
                  </Typography>
                </CardContent>
              </Card>
        </Paper>
        </div>
        </div>
                    <div id="btnContainer">
              <Button id="editBtn" variant="contained" onClick={() => this.handleClick('edit')}>View/Edit Profile</Button>
              <Button id="emergencyBtn" variant="contained" color="secondary" onClick={() => this.handleClick('emergency')}>Emergency Numbers</Button>
              <Button id="allMatchBtn" variant="contained" onClick={() => this.handleClick('allMatches')}>View All Matches</Button>
            </div>  
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
// View and Edit button routes
// Emergency numbers button
// View all Matches button - route and dispatch


import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const useStyles = () => makeStyles({
  root: {
    minWidth: 275,
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
        return console.log('clicked edit/view button');
      case 'emergency': 
        return console.log('clicked emergency button');
      case 'allMatches':
        return console.log('clicked allMatches button');
    }
  }

  render() {
    const classes = useStyles();
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        {this.props.store.vetMatchReducer.map(match => {
          return(
            <div>
            <div>
              <Card className={classes.root} variant="outlined">
                <CardContent>
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
                </CardContent>
              </Card>           
            </div>
            <div>
              <Button variant="contained" onClick={() => this.handleClick('edit')}>View/Edit Profile</Button>
              <Button variant="contained" color="secondary" onClick={() => this.handleClick('emergency')}>Emergency Numbers</Button>
              <Button variant="contained" onClick={() => this.handleClick('allMatches')}>View All Matches</Button>
            </div>
            </div>

          )
        })}
          
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);


// TODO //

// Nav Bar
// GET route to get their matches in progress
// GET route to get their completed matches
// Set up card view for in progress and completed matches
// View and Edit button routes
// Emergency numbers button
// View all Matches button - route and dispatch


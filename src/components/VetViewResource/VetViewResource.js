import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

// This page 

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});


class VetViewResource extends Component{
    
    goBackHome = () => {
        this.props.history.push('/user')
    }

    render(){
    const {classes} = this.props;
        const {vetMatchReducer} = this.props.store;
        return(
            <div className="container">
                <center>
                    <h2 className="grey">Resource Details</h2>
                </center>
                  <div>
                    <Paper className={classes.root} elevation={1}>
                      <hr></hr>
                      {vetMatchReducer.map((vetMatch, i) => {
                          return (
                            <div key={i}>
                                <Typography variant="h5" component="h3">
                                    Organization Details
                                </Typography>
                                <Typography component="p">
                                    Name: {vetMatch.name}
                                </Typography>
                                <Typography component="p">
                                    Number: {vetMatch.number}
                                </Typography>
                                <Typography component="p">
                                    Email: {vetMatch.email}
                                </Typography>
                                <Typography component="p">
                                    City: {vetMatch.city}
                                </Typography>
                                <Typography component="p">
                                    State: {vetMatch.state}
                                </Typography>
                                <Typography component="p">
                                    Website:{ vetMatch.website}
                                </Typography>
                                <Typography component="p">
                                    Categories: {vetMatch.categories}
                                </Typography>
                        <hr></hr>
                        </div>
                      )
                    })}
                    </Paper>
                    <br></br>
                  </div>
                <center>
                  <Fab 
                    className="admin-landing-button" variant="contained"
                    style={{
                      borderRadius: 35,
                      backgroundColor: '#AFFA3D',
                      fontFamily: 'orbitron',
                    }}
                    onClick={this.goBackHome()}><HomeRoundedIcon /></Fab>
                    <span>&nbsp;&nbsp;</span>
                </center>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(withStyles(styles)(VetViewResource));

import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import ProgressBar from "../ProgressBar/ProgressBar";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import compose from 'recompose/compose';
// import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
import RedCross from '../../Images/redcross.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from "@material-ui/core/Typography";


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

  contactOrg = (org_id, orgName, org_email) => {
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

  render() {

    const { classes } = this.props;
    const matches = this.props.store.vetMatchReducer;

    return (
        <div>
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
                {matches.map((match, i) => {
                  return ( 
                      <div key={i}>
                            <Card className={classes.card}>
                              <CardActionArea>
                                  <CardHeader
                                    avatar={
                                      <Avatar aria-label={match.title}>
                                        {match.title}
                                      </Avatar>
                                    }
                                    title={match.title}
                                    subheader={match.name}
                                    />
                                <CardMedia
                                    className={classes.media}
                                    alt={match.title}
                                    image={RedCross}/>
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    {match.name}
                                  </Typography>
                                  <Typography component="p">
                                    {match.email}
                                  </Typography>
                                  <Typography component="p">
                                    {match.number}
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                            <CardActions>
                              <Fab 
                                style={{
                                  borderRadius: 35,
                                  backgroundColor: '#AFFA3D',
                                  fontFamily: 'orbitron',
                                }}
                                onClick={(event) => this.contactOrg(match.org_id, match.name, match.email)}>
                                <SaveTwoToneIcon />
                              </Fab>
                            </CardActions>
                          </Card>
                        </div>
                )})}
        {/* <ProgressBar value={30} /> */}
      </div>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStoreToProps)
)(withRouter(VetMatches));

import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import compose from 'recompose/compose';
import "./VetLandingPage.css";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

// STYLING: Material-UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';


const styles = (theme) => ({
  gridList: {
    width: 200,
    height: 400,
    padding: 1,
    margin: 10,
    minWidth: 0,
    minHeight: 0,
  },
  gridListTile: {
    border: "3px ridge #ADFA3B",
    overflow: "hidden",
    minWidth: 0,
  },
  title: {
    fontSize: 26,
  },
  pos: {
    marginBottom: 12,
  },
  description: {
    marginTop: 30,
    marginBottom: 30,
  },
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 500,
    height: 350,
    margin: "-175px 0 0 -250px",
    backgroundColor: "#de9595",
    border: "2px solid #ADFA3B",
    paddingBottom: "20px",
  },
  contacts: {
    padding: theme.spacing(4, 5, 1),
  },
  closeModal: {
    marginTop: "35px",
    marginRight: "10px",
    left: "85%",
  },
  matchContainer: {
    border: "5px solid #ADFA3B",
  },
    root: {
    padding: '0px'
  },
  card: {
    maxWidth: 320,
    margin: 20,
  },
  media: {
    height: 180,
    width: 320
  },
  avatar: {
  backgroundColor: 'red',
  },
});

class UserPage extends Component {
  state = {
      completeMatchIndex: 0,
      incompleteMatchIndex: 0,
      modalOpen: false,
    };

  componentDidMount() {
    // dispatch to see of they exist in vet table
    // if false nothing happens
    // if true dispatch 
    this.props.dispatch({
        type: 'FETCH_VET_EXIST', 
        payload: this.props.store.user.id
      });
    this.props.dispatch({
      type: "FETCH_COMPLETE_MATCH",
      payload: this.props.store.user.id,
    });
  }

  handleClick = (btnValue) => {
    switch (btnValue) {
      case "profile":
        return this.props.history.push("/adminVetView");
      case "emergency":
        return this.setState({ modalOpen: true });
      case "closeModal":
        return this.setState({ modalOpen: false });
      case "allMatches":
        return this.props.history.push("/vetFindMatches");
      case "completeProfile":
        return this.props.history.push("/register");
      case "incrementComplete":
        return this.setState({ completeMatchIndex: +1 });
      case "incrementIncomplete":
        return this.setState({ incompleteMatchIndex: +1 });
      case "decrementComplete":
        return this.setState({ completeMatchIndex: -1 });
      case "decrementIncomplete":
        return this.setState({ incompleteMatchIndex: -1 });
      default:
        return "no button clicked";
    }
  };

  insertVet = (user_id) => {
    console.log('inserting vet')
    this.props.dispatch({type: 'POST_NEW_VET', payload: user_id})
    this.props.history.push("/register")
  }

  visitResource = (id) =>{
    console.log('visiting resource', id);
    this.props.dispatch({type: 'VET_GET_RESOURCE', payload: id});
    this.props.history.push('/vetViewResource', id);
  }



  render() {
    const { classes } = this.props;
        // const { spacing } = this.state;

    const emergencyModal = (
      <div className={classes.paper}>
        <header id="modal-header">
          <h2 id="modal-title">Emergency Contact Numbers</h2>
        </header>
        <div className={classes.contacts}>
          <ul id="emergency-contacts">
            <li>Veteran’s Crisis Line</li>
            <li>1-800-273-8255</li>
            <br />
            <li>National Suicide Prevention Lifeline</li>
            <li>800-273-8255</li>
            <br />
            <li>The STARRY Counseling Program Crisis Hotline</li>
            <li>800-440-9789</li>
          </ul>
          <Button
            variant="contained"
            style={{
              borderRadius: 35,
              backgroundColor: '#AFFA3D',
              fontFamily: 'orbitron',
            }}
            className={classes.closeModal}
            onClick={() => this.handleClick("closeModal")}
          >
            Close
          </Button>
        </div>
      </div>
    );

    const matches = this.props.store.vetMatchReducer;
    const incompleteMatches = this.props.store.incompleteMatchReducer;
    const { completeMatchIndex, incompleteMatchIndex, modalOpen } = this.state;

    return (
      <div id="pageBody">
        {JSON.stringify(this.state)}
        {JSON.stringify(this.props.store.user.id)}
        {JSON.stringify(this.props.store.existReducer)}
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        {this.props.store.existReducer.eists === true ? 
          <Button
            id="completeProfileBtn"
            size="large"
            variant="contained"
            style={{
              borderRadius: 35,
              backgroundColor: '#AFFA3D',
              fontFamily: 'orbitron',
            }}
            onClick={() => this.handleClick("completeProfile")}
          >
            Complete Profile Information
          </Button> : 
          <Button
            id="completeProfileBtn"
            size="large"
            variant="contained"
            style={{
              borderRadius: 35,
              backgroundColor: '#AFFA3D',
              fontFamily: 'orbitron',
            }}
            onClick={() => this.insertVet(this.props.store.user.id)}>
            Complete Profile Information
          </Button>}
        <div id="cardContainer">
          <div id="completedMatches" className="matchDisplay">
            <h1 id="completeTitle">Complete Matches</h1>
            <Paper
              id="completedPaper"
              className={classes.matchContainer}
              elevation={3}
            >
              <Grid container spacing={1} direction="row">
                <Grid
                  container
                  item
                  xs={12}
                  spacing={3}
                  justify="space-evenly"
                  alignItems="stretch"
                  className={classes.gridList}
                >
                  {matches.map((match, index) => {
                    if (
                      match.approved !== null &&
                      (index === completeMatchIndex ||
                        index === completeMatchIndex + 1)
                    ) {
                      return (
                        <Grid
                          item
                          xs={5}
                          className={classes.gridListTile}
                          key={index}
                        >
                          <img
                            className="resource-icon"
                            alt={match.title}
                            src="https://www.redcross.org/content/dam/redcross/imported-images/redcross-logo.png.img.png"
                          />
                          <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            {match.name}
                          </Typography>
                          <Typography
                            className={classes.pos}
                            variant="h7"
                            component="h4"
                          >
                            Website
                          </Typography>
                          <Typography
                            className={classes.pos}
                            color="textSecondary"
                          >
                            {match.website}
                          </Typography>
                          <Typography
                            className={classes.pos}
                            variant="h7"
                            component="h4"
                          >
                            Email
                          </Typography>
                          <Typography
                            className={classes.pos}
                            color="textSecondary"
                          >
                            {match.email}
                          </Typography>
                          <Typography
                            className={classes.pos}
                            variant="h7"
                            component="h4"
                          >
                            Phone Number
                          </Typography>
                          <Typography
                            className={classes.pos}
                            color="textSecondary"
                          >
                            {match.number}
                          </Typography>
                        </Grid>
                      );
                    }
                  })}
                </Grid>
              </Grid>
                <IconButton
                  id="decrement-match-index"
                  style={{
                    borderRadius: 35,
                    backgroundColor: '#AFFA3D',
                    fontFamily: 'orbitron',
                  }}
                  variant="contained"
                  onClick={() => this.handleClick("decrementComplete")}>
                  <ArrowBackIcon fontSize="large" />
                </IconButton>
                <IconButton
                  id="increment-match-index"
                  variant="contained"
                  style={{
                    borderRadius: 35,
                    backgroundColor: '#AFFA3D',
                    fontFamily: 'orbitron',
                  }}
                  onClick={() => this.handleClick("incrementComplete")}>
                  <ArrowForwardIcon fontSize="large" />
                </IconButton>
            </Paper>
          </div>
          <div id="incompleteContainer" className="matchDisplay">
            <h1 id="incompleteTitle">Matches in Progress</h1>
            <Paper
              id="incompletePaper"
              className={classes.matchContainer}
              elevation={3}
            >
              <Grid container spacing={1} direction="row">
                <Grid
                  container
                  item
                  xs={12}
                  spacing={3}
                  justify="space-evenly"
                  alignItems="stretch"
                  className={classes.gridList}
                >
                  {incompleteMatches.map((match, index) => {
                    if (incompleteMatchIndex >= incompleteMatches.length) {
                      return <h3></h3>;
                    } else if (
                      index === incompleteMatchIndex ||
                      index === incompleteMatchIndex + 1
                    ) {
                      return (
                        <Grid
                          item
                          xs={5}
                          className={classes.gridListTile}
                          key={index}
                        >
                        {/* MATERIAL UI CARD HERE */}
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
                                  className="resource-icon"
                                  alt={match.title}
                                  src="https://www.redcross.org/content/dam/redcross/imported-images/redcross-logo.png.img.png"/>
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
                            <Button 
                              size="small" 
                              color="primary"
                              onClick={() => this.visitResource(match.id)}
                              >More Info
                            </Button>
                          </CardActions>
                        </Card>
                        </Grid>
                      );
                    }
                    // } else {
                    //   return <h3>No In Progress Matches to Show</h3>;
                    // }
                  })}
                </Grid>
              </Grid>
              <IconButton
                id="decrement-incomplete-index"
                variant="contained"
                style={{
                  borderRadius: 35,
                  backgroundColor: '#AFFA3D',
                  fontFamily: 'orbitron',
                }}
                onClick={() => this.handleClick("decrementIncomplete")}
              >
                <ArrowBackIcon fontSize="large" />
              </IconButton>
              <IconButton
                id="increment-incomplete-index"
                variant="contained"
                style={{
                  borderRadius: 35,
                  backgroundColor: '#AFFA3D',
                  fontFamily: 'orbitron',
                }}
                onClick={() => this.handleClick("incrementIncomplete")}
              >
                <ArrowForwardIcon fontSize="large" />
              </IconButton>
            </Paper>
          </div>
        </div>
        <div id="btnContainer">
          <Button
            id="emergencyBtn"
            size="large"
            variant="contained"
            style={{
              borderRadius: 35,
              backgroundColor: '#AFFA3D',
              fontFamily: 'orbitron',
            }}
            onClick={() => this.handleClick("emergency")}
          >
            Emergency Numbers
          </Button>
          <Button
            id="allMatchBtn"
            size="large"
            variant="contained"
            style={{
              borderRadius: 35,
              backgroundColor: '#AFFA3D',
              fontFamily: 'orbitron',
            }}
            onClick={() => this.handleClick("allMatches")}
          >
            View New Matches
          </Button>
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

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStoreToProps)
)(withRouter(UserPage));

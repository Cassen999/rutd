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
import Modal from "@material-ui/core/Modal";
import RedCross from '../../Images/redcross.jpg'

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
    maxWidth: 400,
    margin: 10,
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
    this.props.dispatch({
        type: 'FETCH_VET_EXIST', 
        payload: this.props.store.user.id
      });
    this.props.dispatch({
      type: "FETCH_COMPLETE_MATCH",
      payload: this.props.store.user.id,
    });
  }

  // universal click handler function for all click events on this page
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

      //code for popup modal
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
      
      const { classes } = this.props;
      const matches = this.props.store.vetMatchReducer;
      const incompleteMatches = this.props.store.incompleteMatchReducer;
      const { completeMatchIndex, incompleteMatchIndex, modalOpen } = this.state;

      return (
        <div >
          <center>
            <h1 class="grey"> Below are your saved resources</h1>
            <hr className="hr-width"></hr>
          </center>
            {this.props.store.existReducer.eists === true ? 
              <Button
                className="completeProfileBtn"
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
                className="completeProfileBtn"
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
              <div>
                  <div className="cardContainer">
                    {matches.map((match, index) => {
                        return (
                          <div key={index}>
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
                              <Button 
                                size="small" 
                                color="primary"
                                onClick={() => this.visitResource(match.id)}
                                >More Info
                              </Button>
                            </CardActions>
                          </Card>
                        </div>
                        );
                      }
                    )}
            <br></br>
          </div>
            <div className="buttons">
            <center>
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
              </center>
            </div>
            <Modal
              open={modalOpen}
              aria-labelledby="modal-title"
              aria-describedby="emergency-contacts"
            >
            {emergencyModal}
          </Modal>
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStoreToProps)
)(withRouter(UserPage));

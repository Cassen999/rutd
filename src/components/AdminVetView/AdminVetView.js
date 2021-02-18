import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../AdminVetView/AdminVetView.css';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: "#F5F5F5",
  },
});

const conversion = (newBoolean) => {
  if (newBoolean === false) {
    return "No";
  } else if (newBoolean === true) {
    return "Yes";
  }
};

class AdminVetView extends Component {
  state = {
    boolean: [],
  };

  // 'Going back to Admin Landing Page'
  goBackHome = () => {
    this.props.history.push("/adminlanding");
  };

  render() {
    const { details } = this.props.store;
    const { classes } = this.props;
    return (
      <div className="container">
        {details.map((vet, i) => {
          return (
            <div key={i}>
              <Paper className={classes.root} elevation={1}>
                <center>
                  <Typography variant="h5" className="font grey" component="h5">
                    Demographics of {vet.first_name} {vet.last_name}
                  </Typography>
                </center>
                <hr className="hr-width"></hr>
                <div className="flex-grid">
                  <div className="col">
                    <br></br>
                    <Typography className="font" component="p">
                      Full Name: <br></br>
                      <i>
                        {vet.first_name} {vet.last_name}
                      </i>
                    </Typography>
                    <br></br>
                    <Typography className="font" component="p">
                      Email: <br></br>
                      <i>{vet.email}</i>
                    </Typography>
                    <br></br>
                    <Typography className="font" component="p">
                      Date of Birth: <br></br>
                      <i>{moment(vet.date_of_birth).format("LL")}</i>
                    </Typography>
                    <br></br>
                    <Typography className="font" component="p">
                      Contact Number: <br></br>
                      <i>{vet.number}</i>
                    </Typography>
                    <br></br>
                    <Typography className="font" component="p">
                      Gender: <br></br>
                      <i>{vet.gender}</i>
                    </Typography>
                    <br></br>
                    <Typography className="font" component="p">
                      Marital Status: <br></br>
                      <i>{vet.married}</i>
                    </Typography>
                    <br></br>
                    <Typography className="font" component="p">
                      Children: <br></br>
                      <i>{vet.children}</i>
                    </Typography>
                    <br></br>
                    <Typography className="font" component="p">
                      Experiencing Homelessness? <br></br>
                      <i>{conversion(vet.homeless)}</i>
                    </Typography>
                    <br></br>
                    <Typography variant="h5" className="font" component="h5">
                      Address
                    </Typography>
                    <Typography className="font" component="p">
                      {" "}
                      <i>{vet.current_address}</i>
                    </Typography>
                    <Typography className="font" component="p">
                      {" "}
                      <i>
                        {vet.city}, {vet.state}
                      </i>
                    </Typography>
                    <Typography className="font" component="p">
                      {" "}
                      <i>{vet.zipcode}</i>
                    </Typography>
                    <Typography className="font" component="p">
                      {" "}
                      <i>{vet.country}</i>
                    </Typography>
                  </div>
                  <div className="col">
                    <br></br>
                    <Typography component="p">
                      Service Status: <br></br>
                      <i>{vet.discharge}</i>
                    </Typography>
                    <br></br>
                    <Typography component="p">
                      Branch of Service: <br></br>
                      <i>{vet.branch}</i>
                    </Typography>
                    <br></br>
                    <Typography component="p">
                      Highest Attained Rank: <br></br>
                      <i>{vet.rank}</i>
                    </Typography>
                    <br></br>
                    <Typography component="p">
                      Start of Service: <br></br>
                      <i>{moment(vet.start_date).format("LL")}</i>
                    </Typography>
                    <br></br>
                    <Typography component="p">
                      End Service Date: <br></br>
                      <i>{moment(vet.end_date).format("LL")}</i>
                    </Typography>
                    <br></br>
                    <Typography component="p">
                      Maladies: <br></br>
                      <i>{vet.injury}</i>
                    </Typography>
                    <br></br>
                    <Typography component="p">
                      Dept Veterans Affairs compensation: <br></br>
                      <i>{vet.percentage}</i>
                    </Typography>
                    <br></br>
                    <Typography component="p">
                      Served in imminent danger areas: <br></br>
                      <i>{conversion(vet.danger_areas)}</i>
                    </Typography>
                    <br></br>
                    <Typography component="p">
                      Received purple heart: <br></br>
                      <i>{conversion(vet.purple_heart)}</i>
                    </Typography>
                  </div>
                </div>
                <hr className="hr-width"></hr>
              </Paper>
              <br></br>
              <div>
                <span className="space-between-buttons">&nbsp;&nbsp;</span>
                <Fab
                  className="admin-landing-button"
                  variant="contained"
                  style={{
                    borderRadius: 35,
                    backgroundColor: "#AFFA3D",
                    fontFamily: "orbitron",
                  }}
                  onClick={this.goBackHome}
                >
                  <HomeIcon />
                </Fab>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AdminVetView));

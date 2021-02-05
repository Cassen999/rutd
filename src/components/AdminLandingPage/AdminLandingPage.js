import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import AdminVetList from "../AdminVetList/AdminVetList";
import "../AdminLandingPage/AdminLandingPage.css";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

/*
TO DO LIST ON THIS PAGE:
  Map through the MATCHES & render onto the cards appropriately
  onClick feature for Resource names: opens admin resource view/edit
  onClick for Veteran names: opens admin veteran view
*/

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class AdminLandingPage extends Component {
  state = {
    heading: "Admin Landing Page",
  };

  componentDidMount() {
    console.log("Fetching veteran list from DB");
    this.props.dispatch({ type: "FETCH_VET" });
  }

  handleVeteran = (id) => {
    console.log("VETERAN YOU SELECTED:", id);
    // this.props.dispatch({type: ''})
    this.props.history.push("/adminVetView");
  };

  //TODO Dispatch RESOURCE YOU SELECTED
  handleResource = (id) => {
    console.log("RESOURCE YOU SELECTED:", id);
    // this.props.dispatch({type: ''})
    this.props.history.push("/adminResourceEdit");
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {JSON.stringify(this.props.store.vetReducer)}
        <h2>Admin Landing Page</h2>
        <div className="container">
          {this.props.store.vetReducer.map((vet, i) => {
            return (
              <Card className={classes.card} key={i}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {vet.received}
                  </Typography>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => this.handleVeteran(vet.id)}
                    >
                      <Typography variant="h5" component="h2">
                        {vet.first_name} {vet.last_name}
                      </Typography>
                    </Button>
                  </CardActions>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => this.handleResource(vet.name)}
                    >
                      <Typography component="p">{vet.name}</Typography>
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AdminLandingPage));

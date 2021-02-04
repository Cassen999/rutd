import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminVetList from '../AdminVetList/AdminVetList';
import '../AdminLandingPage/AdminLandingPage.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
    heading: 'Admin Landing Page',
  };
  
  
  componentDidMount(){
    console.log('Fetching veteran list from DB');
    this.props.dispatch({type: 'FETCH_VET'});
  }
  
  handleVeteran = () =>{
    console.log('CLICKING ON VETERAN');
    this.props.history.push('/adminVetView');
  }

  handleResource = () =>{
    console.log('CLICKING ON RESOURCE');
    this.props.history.push('/adminResourceEdit');
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <center>
        <h2>{this.state.heading}</h2>
        <h3>Connections in Progress (Track Time)</h3>
          </center>
            <div className="container">
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                      TIMESTAMP
                  </Typography>
                  <CardActions>
                    <Button size="small" onClick={this.handleVeteran}>
                      <Typography variant="h5" component="h2">
                          John Doe
                      </Typography>
                    </Button>
                  </CardActions> 
                  <CardActions>
                    <Button size="small" onClick={this.handleResource}>
                      <Typography component="p">
                          Hives for Heroes
                        <br />
                      </Typography>
                    </Button>
                  </CardActions> 
                </CardContent>
              </Card>
              <br></br>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                      TIMESTAMP
                  </Typography>
                  <CardActions>
                    <Button size="small" onClick={this.handleVeteran}>
                      <Typography variant="h5" component="h2">
                          Maria Huerta
                      </Typography>
                    </Button>
                  </CardActions> 
                  <CardActions>
                    <Button size="small" onClick={this.handleResource}>
                      <Typography component="p">
                          Wounded Warrior Project
                        <br />
                      </Typography>
                    </Button>
                  </CardActions> 
                </CardContent>
              </Card>
              <br></br>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                      TIMESTAMP
                  </Typography>
                  <CardActions>
                    <Button size="small" onClick={this.handleVeteran}>
                      <Typography variant="h5" component="h2">
                          Lee Vang
                      </Typography>
                    </Button>
                  </CardActions> 
                  <CardActions>
                    <Button size="small" onClick={this.handleResource}>
                      <Typography component="p">
                          Mighty Oak
                        <br />
                      </Typography>
                    </Button>
                  </CardActions> 
                </CardContent>
              </Card>
          </div>
        <AdminVetList />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AdminLandingPage));

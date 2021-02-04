import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

class AdminVetList extends Component {
  
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_VET'})
  }

  handleVeteran = () =>{
    console.log('CLICKING ON VETERAN');
  }

  handleResource = () =>{
    console.log('CLICKING ON RESOURCE');
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {JSON.stringify(this.props.store.vetReducer)}
        <h2>List of Veterans still waiting on their matched resource to respond</h2>
        <div className="container">
          {this.props.store.vetReducer.map((vet, i) => {
          return(
              <Card className={classes.card} key={i}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {vet.received}
                  </Typography>
                  <CardActions>
                    <Button size="small" onClick={this.handleVeteran}>
                      <Typography variant="h5" component="h2">
                          {vet.first_name} {vet.last_name}
                      </Typography>
                    </Button>
                  </CardActions> 
                  <CardActions>
                    <Button size="small" onClick={this.handleResource}>
                      <Typography component="p">
                          {vet.name}
                        <br />
                      </Typography>
                    </Button>
                  </CardActions> 
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AdminVetList));

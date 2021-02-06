import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  searchContainer: {
    // backgroundColor: "white",
  },
  textField: {
    width: "100%",
    height: "100%",
    background: "white",
    borderRadius: "4px"
  }
};


class AdminVetList extends Component {

  state = {
    searchText: ''
  }
  
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_VET'})
  }

  handleVeteran = () =>{
    console.log('CLICKING ON VETERAN');
  }

  handleResource = () =>{
    console.log('CLICKING ON RESOURCE');
  }

  handleInputChangeForSearch = (event) => {
    event.preventDefault()
    this.setState({
      searchText: event.target.value
    },
    function() {
      this.props.dispatch({type: `FETCH_SEARCH_VET`, payload: this.state.searchText})
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2>List of Veterans still waiting on their matched resource to respond</h2>
        <div className="container">
          <div className={classes.searchContainer}>
            {JSON.stringify(this.state)}
            <center>
              <TextField
                id="outlined-search"
                onChange={this.handleInputChangeForSearch}
                placeholder="Search for Vet by name"
                type="search"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                background-color="black"
              />
            </center>
          </div>
            {this.state.searchText === '' ? 
              <div>
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
              :
              <div>
                <h2>Search Results</h2>
                {this.props.store.vetSearchReducer.map((result, i) => {
                  return(
                    <Card className={classes.card} key={i}>
                      <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                          {result.received}
                        </Typography>
                      <CardActions>
                        <Button size="small" onClick={this.handleVeteran}>
                          <Typography variant="h5" component="h2">
                            {result.first_name} {result.last_name}
                          </Typography>
                        </Button>
                      </CardActions> 
                      <CardActions>
                        <Button size="small" onClick={this.handleResource}>
                          <Typography component="p">
                            {result.name}
                            <br />
                          </Typography>
                        </Button>
                      </CardActions> 
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
            }
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AdminVetList));

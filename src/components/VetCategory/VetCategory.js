import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import withStyles from "@material-ui/core";


class VetCategory extends Component {
  state = {
    category: []
  };

  render() {
    return (
        <FormControl className={classes.formControl}>
        <InputLabel>Categories</InputLabel>
        <Select
          fullWidth
          className={classes.textField}
          value={this.state.category}
          onChange={(event) => this.handleChange(event, "category")}
        >
          {this.props.store.catio.model.map((category, i) => (
            <MenuItem key={i} value={category.id}>
              {category.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(VetCategory));
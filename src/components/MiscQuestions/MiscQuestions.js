import React, { Component } from "react";
import Compensation from "../Question/Compensation";
import Hazard from "../Question/Hazard";
import PurpleHeart from "../Question/PurpleHeart";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    formControl: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      minWidth: 185, 
    },
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 20,
      height: 20,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#5b6357',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 20,
        height: 20,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#727372',
      },
    },
    gridContainer: {
      marginLeft: theme.spacing(2),
    }  
  });
class MiscQuestions extends Component {
    state = { 
        compensationId: 0,
        registered: false,
        imminentDanger: false,
        dangerDescription: '',
        purpleHeart: false,
    }

    updateState = (event, propertyName) => {
        let value = event.target.value
        if (value === 'false'){
            value = false;
        } else if (value === 'true'){
            value = true;
        }
        this.setState({
            [propertyName]: value
        }) 
    }

    saveProgress = (event) => {
        event.preventDefault();
        console.log('Saving Progress');
    }

    render() {
        const { classes } = this.props;
        const { compensationId, registered, imminentDanger, dangerDescription, purpleHeart } = this.state;
        console.log('current state is:', this.state); 
        return ( 
            <>
                <Compensation
                    registered={registered}
                    compensationId={compensationId}
                    updateState={this.updateState}
                    classes={classes} 
                />
                <Hazard
                    imminentDanger={imminentDanger}
                    dangerDescription={dangerDescription}
                    updateState={this.updateState}
                    classes={classes} 
                />
                <PurpleHeart
                    purpleHeart={purpleHeart}
                    updateState={this.updateState}
                    classes={classes}
                    saveProgress={this.saveProgress}
                />
            </>
         );
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStoreToProps)
)(MiscQuestions);

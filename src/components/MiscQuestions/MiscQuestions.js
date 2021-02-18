import React, { Component } from "react";
import Compensation from "./Miscellaneous/Compensation";
import Hazard from "./Miscellaneous/Hazard";
import PurpleHeart from "./Miscellaneous/PurpleHeart";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles, Typography, Fab } from '@material-ui/core';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';

const styles = (theme) => ({
    formControl: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      minWidth: 185, 
    },
    formColor: {
        textAlign: 'left',
        marginBottom: '10px'
    },
    selectContainer: {
        textAlign: 'left',
        padding: theme.spacing(1)
    },
    formTitle: {
        color: 'black',
        textAlign: 'center',
        borderBottom: '2px solid grey',
        borderTop: '2px solid grey',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(2),
        backgroundColor: '#AFFA3D'
    },
    textControl: {
        color: 'grey',
        textAlign: 'center',
        borderBottom: '2px solid grey',
        borderTop: '2px solid grey',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(2),
        width: "80%",
        display: 'inline-flex',
    },
    lineStyle: { 
        width: "90%",
        color: 'grey',
        backgroundColor: 'white',
        height: 6,
        marginTop: 0,
        marginBottom: 2
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
  });


// This component displays the intake questionaire for the 'Miscellaneous' tab \\   
class MiscQuestions extends Component {
    state = {
        userId: this.props.store.user.id, 
        compensationId: 0,
        registered: '',
        imminentDanger: '',
        dangerDescription: '',
        purpleHeart: '',
    }

    //converts string booleans to boolean values and updates state with them
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
        console.log('Saving Progress', this.state);
        this.props.dispatch({
            type: 'UPDATE_MISC_QUESTIONS',
            payload: this.state
        })
    }

    render() {
        const { classes } = this.props;
        const { compensationId, registered, imminentDanger, dangerDescription, purpleHeart } = this.state;
        return ( 
            <div 
                className="container"
                display="inline-flex"
            >
                <h1 className="grey">Miscellaneous</h1>
                <hr className="float-left no-margin hr-width"></hr>
                <br></br>
                <form className={classes.formColor}>
                    <Compensation
                        registered={registered}
                        compensationId={compensationId}
                        updateState={this.updateState}
                        classes={classes} 
                    />
                    {/* ---------------------------------- */}
                    <Hazard
                        imminentDanger={imminentDanger}
                        dangerDescription={dangerDescription}
                        updateState={this.updateState}
                        classes={classes} 
                    />
                    {/* ---------------------------------- */}
                    <PurpleHeart
                        purpleHeart={purpleHeart}
                        updateState={this.updateState}
                        classes={classes}
                        saveProgress={this.saveProgress}
                    />
                    {/* ---------------------------------- */}
                    <Fab
                        className="float-right"
                        style={{
                            borderRadius: 35,
                            backgroundColor: '#AFFA3D',
                            fontFamily: 'orbitron',
                            marginBottom: '10%',
                            marginRight: '10px',
                        }}
                        onClick={(event) => { this.saveDemographic(event) }}>
                            <SaveTwoToneIcon />
                    </Fab>
                </form>
            </div>
         );
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStoreToProps)
)(MiscQuestions);

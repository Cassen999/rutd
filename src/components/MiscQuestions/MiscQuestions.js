// Compensation, Hazard, Purple Heart
import React, { Component } from "react";
import Compensation from "../Question/Compensation";
import Hazard from "../Question/Hazard";
import PurpleHeart from "../Question/PurpleHeart";


class MiscQuestions extends Component {
    state = { 
        compensationId: 0,
        

    }

    saveProgress = (question) => {
        this.props.dispatch({
            type: "UPDATE_COMPENSATION",
            payload: this.state.newVet,
        });
    }

    updateCompState = (event, propertyName) => {
        event.preventDefault();
        this.setState({
            [propertyName]: event.target.value
        })
    }

    render() {
        console.log('current state of compensationId:', this.state.compensationId); 
        return ( 
            <div>
                <Compensation updateCompState={this.updateCompState}/>
                <Hazard />
                <PurpleHeart />
            </div>
         );
    }
}
 
export default MiscQuestions;
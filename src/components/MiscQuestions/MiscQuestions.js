// Compensation, Hazard, Purple Heart
import React, { Component } from "react";
import Compensation from "../Question/Compensation";
import Hazard from "../Question/Hazard";
import PurpleHeart from "../Question/PurpleHeart";


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

    render() {
        const { compensationId, registered, imminentDanger, dangerDescription, purpleHeart } = this.state;
        console.log('current state of compensationId:', compensationId);
        console.log('current state of registered:', registered); 
        return ( 
            <>
                <Compensation
                    registered={registered}
                    compensationId={compensationId}
                    updateState={this.updateState} 
                />
                <Hazard
                    imminentDanger={imminentDanger}
                    dangerDescription={dangerDescription}
                    updateState={this.updateState} 
                />
                <PurpleHeart
                    purpleHeart={purpleHeart}
                    updateState={this.updateState}
                />
            </>
         );
    }
}
 
export default MiscQuestions;
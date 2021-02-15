import React, { Component } from 'react';

class ServiceHistoryQuestions extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <h1>Service History</h1>
                <p>SERVICE STATUS DROPDOWN HERE: Active/Veteran</p>
                <br></br>
                <p>TYPE OF DISCHARGE DROPDOWN HERE: Honorable/Other</p>
                <br></br>
                <p>BRANCH OF SERVICE DROPDOWN HERE: Army/Marines, etc.</p>
                <br></br>
                <p>HIGHEST ATTAINED RANK DROPDOWN HERE: Enlisted/Officer, etc</p>
                <br></br>
                <p>SERVICE END DATE: ADD A CALENDAR HERE?</p>
                <br></br>
                <p>Are you currently serving or served in the military on or after September 11, 2001?</p>
                <p>RADIO BUTTONS HERE</p>

            </div>
         );
    }
}
 
export default ServiceHistoryQuestions;
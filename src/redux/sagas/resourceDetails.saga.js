import axios from 'axios';
import {
    put,
    takeLatest
} from 'redux-saga/effects';



function* getOneResource(action) {
    try {
        // sending id of dream selected
        console.log('You\'ve chosen a resource with ID #:', action.payload); // chrome console log
        const response = yield axios.get(`/api/org/`, action.payload) // 
        yield put({
            type: 'SET_ONE_RESOURCE',
            payload: response.data
        })
    } catch (error) {
        console.log('GET ROUTE error from DB when attempting to get one ORG ID', error);
    }
}



function* resourceDetails() {
    yield takeLatest('GET_ONE_RESOURCE', getOneResource);
}


export default resourceDetails;
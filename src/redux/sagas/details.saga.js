import axios from 'axios';
import {
    put,
    takeLatest
} from 'redux-saga/effects';



function* getOneVet(action) {
    try {
        // sending id of dream selected
        console.log('You\'ve chosen a dream with ID #:', action.payload);

        const response = yield axios.get(`/api/vet/${action.payload}`) // 
        yield put({
            type: 'SET_ONE_VET',
            payload: response.data
        })
    } catch (error) {
        console.log('GET ROUTE error from DB when attempting to get specific VET ID', error);
    }
}



function* Details() {
    yield takeLatest('GET_ONE_VET', getOneVet);
}


export default Details;
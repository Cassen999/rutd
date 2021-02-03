import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// gets all account types for users
function* getAcctType() {
    console.log('Fetch account types from DB working OK');
    try{
        const response = yield axios.get('/api/acctType')
        yield put({type: 'SET_ACCT_TYPE', payload: response.data});
        console.log('response.data from db get acct type:', response.data);
    } catch(error){
        console.log('error with account type fetch request', error);
    }        
}

function* acctType() {
    yield takeLatest('FETCH_ACCT_TYPE', getAcctType);
}

export default acctType;
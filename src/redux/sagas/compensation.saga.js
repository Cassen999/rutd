import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* compensationSaga() {
  yield takeLatest("UPDATE_COMPENSATION", updateCompensationSaga);
  yield takeLatest("FETCH_PERCENTAGE", fetchPercentageSaga);
}

  function* updateCompensationSaga(action) {
    console.log('In updateCompensationSaga...')
    let compensation = action.payload
    console.log('payload:', compensation)
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
    //  const response = yield axios.put('compensation', action.payload, config);
  
      yield put({ type: 'SET_COMPENSATION', payload: compensation});
    } catch (error) {
      console.log('Art get request failed', error);
    }
  }

function* fetchPercentageSaga(action) {
  console.log("In fetchPercentageSaga...");
  
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.get(`/api/compensation/percentage`, config);

    yield put({ type: 'SET_PERCENTAGE', payload: response.data });
  } catch (error) {
    console.log("GET Compensation request failed", error);
  }
}

export default compensationSaga;

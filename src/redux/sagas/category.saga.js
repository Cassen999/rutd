import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* categorySaga() {
  yield takeLatest("FETCH_CATEGORY", fetchCategorySaga);
  yield takeLatest("ADD_CATEGORY", addCategorySaga);

}

function* fetchCategorySaga(action) {
  console.log("In fetchCategorySaga...");
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get(`/api/category`, config);
    yield put({ type: "SET_CATEGORY", payload: response.data });
  } catch (error) {
    console.log("Error in fetchCategorySaga", error);
  }
}

function* addCategorySaga(action) {
    console.log('In addCategorySaga...')
    console.log('payload:', action.payload)
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      const response = yield axios.post('api/question/category', action.payload, config);
  
    //   yield put({ type: ''});
    } catch (error) {
      console.log('Error in addCategorySaga', error);
    }
  }

export default categorySaga;
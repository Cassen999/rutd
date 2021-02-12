import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* categorySaga() {
  yield takeLatest("FETCH_CATEGORY", fetchCategorySaga);
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

export default categorySaga;
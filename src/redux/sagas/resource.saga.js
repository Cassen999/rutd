import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// gets all account types for users
function* fetchResource() {
  console.log("Fetch orgs from DB");
  try {
    const response = yield axios.get("/api/resource");
    yield put({ type: "SET_RESOURCE", payload: response.data });
    console.log("response.data from db get resource:", response.data);
  } catch (error) {
    console.log("error with resource fetch request", error);
  }
}

function* updateResource(action) {
  console.log("Updating orgs in DB", action);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put(
      `/api/resource/${action.payload.id}`,
      action.payload.resourceDetails,
      config
    );
    console.log("response.data from db get resource:", response.data);
  } catch (error) {
    console.log("error with resource fetch request", error);
  }
}

function* resource() {
  yield takeLatest("FETCH_RESOURCE", fetchResource);
  yield takeLatest("UPDATE_RESOURCE", updateResource);
}

export default resource;

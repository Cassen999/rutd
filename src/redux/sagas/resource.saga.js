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

function* getOneResource(action) {
  try {
      // sending id of dream selected
      console.log('You\'ve chosen a resource with ID #:', action.payload);
      const response = yield axios.get(`/api/resource/${action.payload}`); 
      yield put({
          type: 'SET_ONE_RESOURCE',
          payload: response.data
      })
  } catch (error) {
      console.log('GET ROUTE error from DB when attempting to get one ORG ID', error);
  }
}

function* vetGetResource(action) {
  try {
      // sending id of dream selected
      console.log('You\'ve chosen a resource with ID #:', action.payload);
      const response = yield axios.get(`/api/resource/${action.payload}`); 
      yield put({
          type: 'SET_VET_RESOURCE',
          payload: response.data
      })
  } catch (error) {
      console.log('GET ROUTE error from DB when attempting to get one ORG ID', error);
  }
}

// GET for resource search bar
function* fetchSearchResource(action) {
  console.log('Fetch resourceSearch from DB action.payload', action.payload);
  try{
      const response = yield axios.get(`/api/resourceSearch?searchText=${action.payload}`)
      yield put({type: 'SET_RESOURCE_SEARCH', payload: response.data});
      console.log('response.data from db get resourceSearch:', response.data);
  } catch(error){
      console.log('error with resourceSearch fetch request', error);
  } 
}

function* resource() {
  yield takeLatest("FETCH_RESOURCE", fetchResource);
  yield takeLatest("UPDATE_RESOURCE", updateResource);
  yield takeLatest('GET_ONE_RESOURCE', getOneResource);
  yield takeLatest('VET_GET_RESOURCE', vetGetResource);
  yield takeLatest('FETCH_SEARCH_RESOURCE', fetchSearchResource);
}

export default resource;

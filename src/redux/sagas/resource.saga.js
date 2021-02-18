import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// GET all organizations from database
function* fetchResource() {
  console.log("Fetch orgs from DB");
  try {
    const response = yield axios.get("/api/resource");
    yield put({ type: "SET_RESOURCE", payload: response.data });
  } catch (error) {
    console.log("error with resource fetch request", error);
  }
}

// PUT to update a resource
function* updateResource(action) {
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
    yield put({ type: 'FETCH_RESOURCE' });
  } catch (error) {
    console.log("error with resource fetch request", error);
  }
}

// GET for one resource
function* getOneResource(action) {
  try {
      const response = yield axios.get(`/api/resource/oneResource/${action.payload}`); 
      yield put({
          type: 'SET_ONE_RESOURCE',
          payload: response.data
      })
  } catch (error) {
      console.log('GET ROUTE error from DB when attempting to get one ORG ID', error);
  }
}

// GET for all resources for individual Vet
function* vetGetResource(action) {
  try {
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
  try{
      const response = yield axios.get(`/api/resource/resourceSearch/resourceSearch?searchText=${action.payload}`)
      yield put({type: 'SET_RESOURCE_SEARCH', payload: response.data});
  } catch(error){
      console.log('error with resourceSearch fetch request', error);
  } 
}

function* addResource(action) {
  console.log("Fetch orgs from DB");
  try {
    const response = yield axios.post("/api/resource");
    yield put({ type: "SET_RESOURCE", payload: response.data });
  } catch (error) {
    console.log("error with adding resource request", error);
  }
}


function* deleteResource(action) {
  console.log('action.payload', action.payload)
  try {
      yield axios.delete(`/api/resource/delete/${action.payload}`)
      console.log('delete saga id', action.payload)
      console.log('action.payload from delete resource saga', action.payload)
      yield put({type: 'FETCH_RESOURCE'})
  }catch(error){
      console.log('error in delete resource saga', error); 
  }
}

function* resource() {
  yield takeLatest("FETCH_RESOURCE", fetchResource);
  yield takeLatest("UPDATE_RESOURCE", updateResource);
  yield takeLatest('GET_ONE_RESOURCE', getOneResource);
  yield takeLatest('VET_GET_RESOURCE', vetGetResource);
  yield takeLatest('FETCH_SEARCH_RESOURCE', fetchSearchResource);
  yield takeLatest('DELETE_RESOURCE', deleteResource);
  yield takeLatest('ADD_RESOURCE', addResource);

}

export default resource;

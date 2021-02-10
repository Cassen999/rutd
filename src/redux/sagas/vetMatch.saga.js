import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getCompleteMatch(action) {
  console.log("Fetch veteran matches is working");
  try {
    const response = yield axios.get(`/api/match/complete/${action.payload}`);
    const allMatches = response.data;
    const incompleteMatches = allMatches.filter(findIncompleteMatch);
    yield put({ type: "SET_VET_MATCHES", payload: allMatches });
    yield put({ type: "SET_INCOMPLETE_MATCHES", payload: incompleteMatches });
    console.log("response.data from db get complete vet matches:", allMatches);
  } catch (error) {
    console.log("error with completed vet matches fetch request", error);
  }
}

function findIncompleteMatch(match) {
  return match.approved === null;
}

function* getNewMatches(action) {
  try {
    const response = yield axios.get(`/api/match/newMatches/${action.payload}`);
    const newMatches = response.data;
    console.log("In getNewMatches response.data", response.data);
    yield put({ type: "SET_VET_MATCHES", payload: newMatches });
    console.log("response.data from db get new vet matches:", newMatches);
  } catch (error) {
    console.log("error with all vet matches fetch request", error);
  }
}

function* vetMatchSaga() {
  yield takeLatest("FETCH_COMPLETE_MATCH", getCompleteMatch);
  yield takeLatest("FETCH_ALL_MATCHES", getNewMatches);
}

export default vetMatchSaga;

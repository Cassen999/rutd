import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Changes compensation percentage in vet's profile
function* updateCompensationSaga(action) {
    console.log("In updateCompensationSaga...");
    console.log("payload:", action.payload);
    try {
        const response = yield axios.put("api/question/compensation", action.payload);
    } catch (error) {
        console.log("Error in updateCompensationSaga", error);
    }
}

// Updates vet's service history
function* updateServiceHistorySaga(action) {
    console.log("service history payload:", action.payload);
    try {
      console.log("In updateServiceHistorySaga...");
    } catch (error) {
      console.log("Update Service History Failed", error);
    }
}

// Updates vet's email address
function* updateEmailSaga(action) {
    console.log("In updateEmailSaga...");
    console.log("payload:", action.payload);
try {
    const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    };
    const response = yield axios.put("/api/question/email", action.payload, config);
} catch (error) {
    console.log('Error in updateEmailSaga', error);
}
}

  // Changes vet's name in profile
function* addDemographicSaga(action) {
try {
    const response = yield axios.post(
    "api/demographic",
    action.payload,
    );
    } catch (error) {
    console.log("Art get request failed", error);
    }
}

function* updateGenderSaga(action) {
    console.log("In updateGenderSaga...");
    console.log("payload:", action.payload);
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      const response = yield axios.put("api/question/gender", action.payload, config);
    } catch (error) {
      console.log('Error in updateGenderSaga', error);
    }
}

function* updateHazardSaga(action) {
    console.log("In updateHazardSaga...");
    console.log("payload:", action.payload);
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      const response = yield axios.put("api/question/hazard", action.payload, config);
    } catch (error) {
      console.log('Error in updateHazardSaga', error);
    }
}

function* updateHomeAddressSaga(action) {
    console.log("In updateHomeAddressSaga...");
    console.log("payload:", action.payload);
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      const response = yield axios.put("api/question/homeaddress", action.payload, config);
    } catch (error) {
      console.log('Error in updateHomeAddressSaga', error);
    }
}

function* updateMailAddressSaga(action) {
    console.log("In updateMailAddressSaga...");
    console.log("payload:", action.payload);
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      const response = yield axios.put("api/question/mailaddress", action.payload, config);
    } catch (error) {
      console.log('Error in updateMailAddressSaga', error);
    }
}

function* updateProfileSaga() {
    yield takeLatest("UPDATE_COMPENSATION", updateCompensationSaga);
    yield takeLatest('UPDATE_SERVICE_HISTORY',updateServiceHistorySaga);
    yield takeLatest("ADD_DEMOGRAPHIC", addDemographicSaga);
    yield takeLatest('UPDATE_EMAIL', updateEmailSaga);
    yield takeLatest('UPDATE_GENDER', updateGenderSaga);
    yield takeLatest('UPDATE_HAZARD', updateHazardSaga);
    yield takeLatest('UPDATE_HOME_ADDRESS', updateHomeAddressSaga);
    yield takeLatest('UPDATE_MAIL_ADDRESS', updateMailAddressSaga);
}

export default updateProfileSaga;
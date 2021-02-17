import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import maladySaga from './malady.saga';
import emailSaga from './email.saga';
import vetSaga from './vet.saga';
import vetMatchSaga from './vetMatch.saga';
import vetSearchSaga from './vetSearch.saga';
import resourceDetails from './resourceDetails.saga';
import resourceSaga from './resource.saga';
import resourceSearchSaga from './resourceSearch.saga';
import deleteResourceSaga from './deleteResource.saga';
import categorySaga from './category.saga';
import dropdownSaga from './dropdown.saga';
import miscQuestionSaga from './miscQuestion.saga';
import updateProfileSaga from './updateProfile.saga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    maladySaga(),
    vetSaga(),
    vetMatchSaga(),
    vetSearchSaga(),
    resourceDetails(),
    emailSaga(),
    resourceSaga(),
    resourceSearchSaga(),
    deleteResourceSaga(),
    categorySaga(),
    dropdownSaga(),
    miscQuestionSaga(),
    updateProfileSaga(),
  ]);
}
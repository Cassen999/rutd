import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import emailSaga from './email.saga';
import vetSaga from './vet.saga';
import vetMatchSaga from './vetMatch.saga';
import resourceSaga from './resource.saga';
import deleteResourceSaga from './deleteResource.saga';
import categorySaga from './category.saga';
import dropdownSaga from './dropdown.saga';
import updateProfileSaga from './updateProfile.saga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    vetSaga(),
    vetMatchSaga(),
    emailSaga(),
    resourceSaga(),
    deleteResourceSaga(),
    categorySaga(),
    dropdownSaga(),
    updateProfileSaga(),
  ]);
}
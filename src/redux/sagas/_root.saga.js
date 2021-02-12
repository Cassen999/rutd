import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import demographicSaga from './demographic.saga'
import serviceSaga from './service.saga'
import compensationSaga from './compensation.saga'
import maladySaga from './malady.saga'
import emailSaga from './email.saga';
import vetSaga from './vet.saga';
import vetMatchSaga from './vetMatch.saga';
import vetSearchSaga from './vetSearch.saga'
import details from './details.saga';
import resourceDetails from './resourceDetails.saga';
import resourceSaga from './resource.saga';
import resourceSearchSaga from './resourceSearch.saga';
import deleteResourceSaga from './deleteResource.saga';
import categorySaga from './category.saga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    demographicSaga(),
    serviceSaga(),
    compensationSaga(),
    maladySaga(),
    vetSaga(),
    vetMatchSaga(),
    vetSearchSaga(),
    details(),
    resourceDetails(),
    emailSaga(),
    details(),
    resourceSaga(),
    resourceSearchSaga(),
    deleteResourceSaga(),
    categorySaga()
  ]);
}
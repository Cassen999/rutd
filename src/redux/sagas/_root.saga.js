import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import categorySaga from './category.saga';
import matchSaga from './match.saga'
import acctType from './acctType.saga';
import demographicSaga from './demographic.saga'
import serviceHistorySaga from './serviceHistory.saga'
import compensationSaga from './compensation.saga'
//import demographicSaga from './demographic.saga';
import vetSaga from './vet.saga';
import vetMatchSaga from './vetMatch.saga';
import vetSearchSaga from './vetSearch.saga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    categorySaga(),
    matchSaga(),
    acctType(),
    demographicSaga(),
    serviceHistorySaga(),
    compensationSaga(),
    vetSaga(),
    vetMatchSaga(),
    vetSearchSaga()
  ]);
}

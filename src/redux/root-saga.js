import { all, call } from 'redux-saga/effects';
import { globalSagas } from './global/global.sagas';
import { dailySagas } from './daily/daily.sagas';
import { countriesSagas } from './countries/countries.sagas';

export default function* rootSaga() {
    yield all([call(globalSagas), call(dailySagas), call(countriesSagas)]);
}

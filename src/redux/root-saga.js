import { all, call } from 'redux-saga/effects';
import { globalSagas } from './global/global.sagas';

export default function* rootSaga() {
    yield all([call(globalSagas)]);
}

import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import GlobalActionTypes from './global.types';
import { fetchGlobalDataSuccess, fetchGlobalDataFailure } from './global.actions';

export function* fetchGlobalData() {
    const url = `https://covid19.mathdro.id/api`;

    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = yield axios.get(url);

        yield put(fetchGlobalDataSuccess({ confirmed, recovered, deaths, lastUpdate }));
    } catch (err) {
        yield put(fetchGlobalDataFailure(err));
    }
}

export function* onFetchGlobalDataStart() {
    yield takeLatest(GlobalActionTypes.FETCH_GLOBAL_DATA_START, fetchGlobalData);
}

export function* globalSagas() {
    yield all([call(onFetchGlobalDataStart)]);
}

import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import GlobalActionTypes from './global.types';
import { fetchGlobalDataSuccess, fetchGlobalDataFailure } from './global.actions';
import { fetchDailyDataStart, fetchDailyDataSuccess } from '../daily/daily.actions';

export function* fetchGlobalData({ payload: country }) {
    const url = `https://covid19.mathdro.id/api`;
    let newUrl = url;
    if (country) newUrl = `${url}/countries/${country}`;
    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = yield call(axios.get, newUrl);

        yield put(fetchGlobalDataSuccess({ confirmed, recovered, deaths, lastUpdate }));
        if (country) yield put(fetchDailyDataSuccess({ confirmed, recovered, deaths, lastUpdate }));
        else yield put(fetchDailyDataStart());
    } catch (err) {
        yield put(fetchGlobalDataFailure(err));
    }
}

export function* onFetchGlobalDataStart() {
    yield takeLatest([GlobalActionTypes.FETCH_GLOBAL_DATA_START, GlobalActionTypes.CHANGE_COUNTRY], fetchGlobalData);
}

export function* globalSagas() {
    yield all([call(onFetchGlobalDataStart)]);
}

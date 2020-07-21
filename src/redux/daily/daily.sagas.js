import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import DailyActionTypes from './daily.types';
import { fetchDailyDataSuccess, fetchDailyDataFailure } from './daily.actions';

const getModifiedData = data => {
    const modifiedData = data.map(
        ({
            confirmed: { total: confirmed },
            recovered: { total: recovered },
            deaths: { total: deaths },
            reportDate: date,
        }) => ({
            confirmed,
            recovered,
            deaths,
            date,
        })
    );
    return modifiedData;
};
export function* fetchDailyData() {
    const url = `https://covid19.mathdro.id/api/daily`;

    try {
        const { data } = yield call(axios.get, url);
        const modifiedData = getModifiedData(data);
        yield put(fetchDailyDataSuccess(modifiedData));
    } catch (err) {
        yield put(fetchDailyDataFailure(err));
    }
}

export function* onFetchDailyDataStart() {
    yield takeLatest(DailyActionTypes.FETCH_DAILY_DATA_START, fetchDailyData);
}

export function* dailySagas() {
    yield all([call(onFetchDailyDataStart)]);
}

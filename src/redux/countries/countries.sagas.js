import { takeLatest, put, all, call } from 'redux-saga/effects';
import CountriesActionTypes from './countries.types';
import { fetchCountriesDataSuccess, fetchCountriesDataFailure } from './countries.actions';
import axios from 'axios';

const getModifiedData = countries => countries.map(country => country.name);

export function* fetchCountriesData() {
    const url = `https://covid19.mathdro.id/api/countries`;
    try {
        const {
            data: { countries },
        } = yield call(axios.get, url);

        const modifiedData = getModifiedData(countries);

        yield put(fetchCountriesDataSuccess(modifiedData));
    } catch (err) {
        yield put(fetchCountriesDataFailure(err));
    }
}
export function* onFetchCountriesDataStart() {
    yield takeLatest(CountriesActionTypes.FETCH_COUNTRIES_DATA_START, fetchCountriesData);
}
export function* countriesSagas() {
    yield all([call(onFetchCountriesDataStart)]);
}

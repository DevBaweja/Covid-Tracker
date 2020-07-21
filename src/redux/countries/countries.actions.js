import CountriesActionTypes from './countries.types';

export const fetchCountriesDataStart = () => ({
    type: CountriesActionTypes.FETCH_COUNTRIES_DATA_START,
});

export const fetchCountriesDataSuccess = data => ({
    type: CountriesActionTypes.FETCH_COUNTRIES_DATA_SUCCESS,
    payload: data,
});

export const fetchCountriesDataFailure = err => ({
    type: CountriesActionTypes.FETCH_COUNTRIES_DATA_FAILURE,
    payload: err,
});

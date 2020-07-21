import GlobalActionTypes from './global.types';

export const fetchGlobalDataStart = () => ({
    type: GlobalActionTypes.FETCH_GLOBAL_DATA_START,
});

export const fetchGlobalDataSuccess = data => ({
    type: GlobalActionTypes.FETCH_GLOBAL_DATA_SUCCESS,
    payload: data,
});

export const fetchGlobalDataFailure = err => ({
    type: GlobalActionTypes.FETCH_GLOBAL_DATA_FAILURE,
    payload: err,
});

export const changeCountry = country => ({
    type: GlobalActionTypes.CHANGE_COUNTRY,
    payload: country,
});

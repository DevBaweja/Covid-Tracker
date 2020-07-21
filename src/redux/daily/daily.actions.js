import DailyActionTypes from './daily.types';

export const fetchDailyDataStart = () => ({
    type: DailyActionTypes.FETCH_DAILY_DATA_START,
});

export const fetchDailyDataSuccess = data => ({
    type: DailyActionTypes.FETCH_DAILY_DATA_SUCCESS,
    payload: data,
});

export const fetchDailyDataFailure = err => ({
    type: DailyActionTypes.FETCH_DAILY_DATA_FAILURE,
    payload: err,
});

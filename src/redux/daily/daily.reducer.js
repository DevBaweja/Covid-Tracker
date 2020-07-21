import DailyActionTypes from './daily.types';

// confirmed, recovered, deaths, lastUpdate
const INITIAL_STATE = {
    data: [],
    isFetching: false,
    err: null,
};

const dailyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DailyActionTypes.FETCH_DAILY_DATA_START:
            return {
                ...state,
                data: [],
                isFetching: true,
                err: null,
            };
        case DailyActionTypes.FETCH_DAILY_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                err: null,
            };
        case DailyActionTypes.FETCH_DAILY_DATA_FAILURE:
            return {
                ...state,
                data: [],
                isFetching: false,
                err: action.payload,
            };
        default:
            return state;
    }
};

export default dailyReducer;

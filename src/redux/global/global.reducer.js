import GlobalActionTypes from './global.types';

// confirmed, recovered, deaths, lastUpdate
const INITIAL_STATE = {
    data: {},
    country: null,
    isFetching: false,
    err: null,
};

const globalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GlobalActionTypes.FETCH_GLOBAL_DATA_START:
            return {
                ...state,
                data: {},
                country: null,
                isFetching: true,
                err: null,
            };
        case GlobalActionTypes.FETCH_GLOBAL_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                err: null,
            };
        case GlobalActionTypes.FETCH_GLOBAL_DATA_FAILURE:
            return {
                ...state,
                data: {},
                isFetching: false,
                err: action.payload,
            };
        case GlobalActionTypes.CHANGE_COUNTRY:
            return {
                ...state,
                data: {},
                country: action.payload,
            };
        default:
            return state;
    }
};

export default globalReducer;

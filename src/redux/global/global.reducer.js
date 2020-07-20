import GlobalActionTypes from './global.types';

// confirmed, recovered, deaths, lastUpdate
const INITIAL_STATE = {
    data: {},
    isFetching: false,
    err: null,
};

const globalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GlobalActionTypes.FETCH_GLOBAL_DATA_START:
            return {
                ...state,
                data: {},
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
        default:
            return state;
    }
};

export default globalReducer;

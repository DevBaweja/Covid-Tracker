import CountriesActionTypes from './countries.types';
const INITIAL_STATE = {
    data: [],
    isFetching: false,
    err: null,
};

const countriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CountriesActionTypes.FETCH_COUNTRIES_DATA_START:
            return {
                ...state,
                data: [],
                isFetching: true,
                err: null,
            };
        case CountriesActionTypes.FETCH_COUNTRIES_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                err: null,
            };
        case CountriesActionTypes.FETCH_COUNTRIES_DATA_FAILURE:
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

export default countriesReducer;

import { combineReducers } from 'redux';

import globalReducer from './global/global.reducer';
import dailyReducer from './daily/daily.reducer';
import countriesReducer from './countries/countries.reducer';

const rootReducer = combineReducers({
    global: globalReducer,
    daily: dailyReducer,
    countries: countriesReducer,
});

export default rootReducer;

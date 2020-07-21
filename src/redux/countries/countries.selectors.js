import { createSelector } from 'reselect';

const selectCountries = state => state.countries;

export const selectCountriesData = createSelector(selectCountries, countries => countries.data);

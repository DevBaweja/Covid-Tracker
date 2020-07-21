import { createSelector } from 'reselect';

const selectDaily = state => state.daily;

export const selectDailyData = createSelector(selectDaily, daily => daily.data);

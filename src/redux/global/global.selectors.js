import { createSelector } from 'reselect';

const selectGlobal = state => state.global;

export const selectGlobalData = createSelector(selectGlobal, global => global.data);

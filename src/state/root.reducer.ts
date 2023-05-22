import { combineReducers } from 'redux';
import { universitiesSlice } from './universities/universities.slices';

export const rootReducer = combineReducers({
    universities: universitiesSlice.reducer
})
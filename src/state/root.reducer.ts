import { combineReducers } from 'redux';
import { toastsSlice } from './toasts/reducer.slices';
import { universitiesSlice } from './universities/universities.slices';

export const rootReducer = combineReducers({
    toats: toastsSlice.reducer,
    universities: universitiesSlice.reducer
})
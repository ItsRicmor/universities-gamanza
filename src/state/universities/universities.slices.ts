import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUniversity } from 'models/IUniversity';
import { fetchUniversities } from './universities.effects';

export interface UniversitiesState {
    items: IUniversity[];
    isLoading: boolean;
}

export const initialState: UniversitiesState = {
    items: [],
    isLoading: false
}

export const universitiesSlice = createSlice({
    name: "universities",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUniversities.pending, (state) => {
            state.items = [];
            state.isLoading = true;
        })
            .addCase(fetchUniversities.fulfilled, (state, action: PayloadAction<IUniversity[]>) => {
                state.items = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchUniversities.rejected, (state) => {
                state.isLoading = false;
            })
    }
});
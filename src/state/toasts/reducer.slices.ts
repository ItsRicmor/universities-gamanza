import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IToast } from '../../models/IToast';

export interface ToatsState {
    items: IToast[];
}

export const initialState: ToatsState = {
    items: []
}

export const toastsSlice = createSlice({
    name: "toats",
    initialState,
    reducers: {
        addToast(state, action: PayloadAction<IToast>) {
            return {
                items: [...state.items, action.payload]
            }
        },
        removeById(state, action: PayloadAction<string>) {
            const toastId = action.payload;
            return {
                items: state.items.filter((model) => model.id !== toastId)
            }
        }
    }
});

export const { addToast, removeById } = toastsSlice.actions
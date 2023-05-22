import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root.reducer'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: true, serializableCheck: false }),
    devTools: process.env.CLIENT_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root.reducer'
import { errorToastMiddleware } from './middleware/errorToastMiddleware'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: true, serializableCheck: false }).prepend(errorToastMiddleware),
    devTools: process.env.CLIENT_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
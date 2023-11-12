import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { catApi } from './cats/api/catsApi'
import catReducer from './cats/catsSlice'

export const store = configureStore({
    reducer: {
        [catApi.reducerPath]: catApi.reducer,
        cats: catReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(catApi.middleware),
})

setupListeners(store.dispatch)

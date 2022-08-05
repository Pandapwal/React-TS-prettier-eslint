import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/ThemeSlice'
import itemsReducer from './slices/ItemsSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        items: itemsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

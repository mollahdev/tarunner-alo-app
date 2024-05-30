import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users'
import appReducer from './app'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    app: appReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
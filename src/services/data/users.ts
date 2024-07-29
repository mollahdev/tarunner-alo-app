import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@src/services/data'

interface InitialStateInterface {
  users: ProfileApiResponse[] | null | [];
  currentUser: ProfileApiResponse | null;
}

const initialState: InitialStateInterface = {
  users: null,
  currentUser: null
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<ProfileApiResponse[]>) {
      state.users = action.payload
    },

    setCurrentUser(state, action: PayloadAction<ProfileApiResponse | null>) {
      state.currentUser = action.payload
    }
  }
})

export const { setUsers, setCurrentUser } = usersSlice.actions

export const selectCurrentUser = (state: RootState) => state.users.currentUser
export const selectUsers = (state: RootState) => state.users.users
export default usersSlice.reducer
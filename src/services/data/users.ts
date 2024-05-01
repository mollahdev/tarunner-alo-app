import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@src/services/data'

interface InitialStateInterface {
  value: number;
  users: UserInterface[] | null;
  currentUser: UserInterface | null | [];
}

const initialState: InitialStateInterface = {
  value: 0,
  users: null,
  currentUser: null
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    
    decrement: state => {
      state.value -= 1
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = usersSlice.actions

export const selectCount = (state: RootState) => state.users.value
export const selectCurrentUser = (state: RootState) => state.users.currentUser
export default usersSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@src/services/data'

interface InitialStateInterface {
  meta: null | {
    version: string;
    download_link: string;  
  };
}

const initialState: InitialStateInterface = {
    meta: null
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMeta: (state, action: PayloadAction<InitialStateInterface['meta']>) => {
      state.meta = action.payload
    }
  }
})

export const { setMeta } = appSlice.actions

export const selectMeta = (state: RootState) => state.app.meta
export default appSlice.reducer
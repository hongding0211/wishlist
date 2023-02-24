import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserState = {
  token?: string
  data?: {
    uuid?: number
    name?: string
    avatar?: string
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: undefined,
  } as UserState,
  reducers: {
    setToken: (state, action: PayloadAction<{ token?: string }>) => {
      state.token = action.payload.token
      if (action.payload?.token) {
        AsyncStorage.setItem('token', action.payload.token).then()
      } else {
        AsyncStorage.removeItem('token').then()
      }
    },
    setUserData: (
      state,
      action: PayloadAction<{
        data?: { uuid: number; name: string; avatar: string }
      }>
    ) => {
      state.data = action.payload.data
    },
  },
})

export const { setToken, setUserData } = userSlice.actions
export default userSlice.reducer

import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserState = {
  isLogin: boolean
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
    isLogin: false,
    token: undefined,
  } as UserState,
  reducers: {
    setToken: (state, action: PayloadAction<{ token?: string }>) => {
      state.token = action.payload.token
      if (action.payload?.token) {
        AsyncStorage.setItem('token', action.payload.token).then()
      } else {
        state.isLogin = false
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
    setLoginStatus: (state, action: PayloadAction<{status: boolean}>) => {
      state.isLogin = action.payload.status
    }
  },
})

export const { setToken, setUserData, setLoginStatus } = userSlice.actions
export default userSlice.reducer

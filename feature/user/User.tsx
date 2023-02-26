import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setToken, setUserData } from './userSlice'
import { useAppSelector } from '../../app/store'
import { useUserInfo } from '../../services/user'
const User: React.FC = () => {
  const [readyGetUserInfo, setReadyGetUserInfo] = useState(false)

  const [hasReadToken, setHasReadToken] = useState(false)

  const navigation = useNavigation<any>() // TODO fix type
  const dispatch = useDispatch()
  const { data: userInfoData } = useUserInfo(undefined, readyGetUserInfo)
  const token = useAppSelector(state => state.user.token)

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(v => {
        if (v != null) {
          dispatch(
            setToken({
              token: v,
            })
          )
        }
      })
      .finally(() => {
        setHasReadToken(true)
      })
  }, [])

  useEffect(() => {
    if (hasReadToken && !token) {
      navigation.navigate('SSO')
      return
    }
    if (token) {
      setReadyGetUserInfo(true)
    }
  }, [token, hasReadToken])

  useEffect(() => {
    if (userInfoData && userInfoData.success && userInfoData.data) {
      dispatch(
        setUserData({
          data: userInfoData.data,
        })
      )
    }
    if (userInfoData && !userInfoData.success) {
      dispatch(
        setToken({
          token: undefined,
        })
      )
      dispatch(
        setUserData({
          data: undefined,
        })
      )
    }
  }, [userInfoData])

  return <></>
}

export default User

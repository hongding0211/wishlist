import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setIsLogin, setIsLoginComplete, setToken, setUserData } from './userSlice'
import { useAppSelector } from '../../app/store'
import { useUserInfo } from '../../services/user'

const User: React.FC = () => {
  const [readyGetUserInfo, setReadyGetUserInfo] = useState(false)

  const [hasReadToken, setHasReadToken] = useState(false)

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
      .catch(() => {
        dispatch(
          setToken({
            token: undefined,
          })
        )
      })
      .finally(() => {
        setHasReadToken(true)
      })
  }, [])

  useEffect(() => {
    if (hasReadToken && !token) {
      dispatch(
        setIsLoginComplete({
          isLoginComplete: true,
        })
      )
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
      dispatch(
        setIsLoginComplete({
          isLoginComplete: true,
        })
      )
      dispatch(
        setIsLogin({
          isLogin: true,
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
      dispatch(
        setIsLoginComplete({
          isLoginComplete: true,
        })
      )
    }
  }, [userInfoData])

  return <></>
}

export default User

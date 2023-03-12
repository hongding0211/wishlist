import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import styles from './style'
import useToast from '../../components/Toast/useToast'
import { setLoading } from '../../feature/general/generalSlice'
import { setToken } from '../../feature/user/userSlice'
import { LoginProps } from '../../navigation/types'
import { useLogin } from '../../services/user'

const Login: React.FC = () => {
  const navigation = useNavigation<LoginProps['navigation']>()
  const { t } = useTranslation('login')
  const route = useRoute<LoginProps['route']>()
  const { trigger: triggerLogin } = useLogin()
  const dispatch = useDispatch()
  const toast = useToast()

  const { ticket, type } = route.params || {}

  const handleLoginWithSSO = useCallback(() => {
    navigation.navigate('SSO')
  }, [])

  useEffect(() => {
    if (!ticket || !type) {
      return
    }
    dispatch(setLoading({ status: true }))
    triggerLogin({
      params: {
        type,
        ticket,
      },
    })
      .then(res => {
        if (res?.success && res?.data?.token) {
          dispatch(
            setToken({
              token: res.data.token,
            })
          )
          return
        }
        return Promise.reject(new Error('loginFail'))
      })
      .catch(() => {
        toast(t('loginFail') + '')
      })
      .finally(() => {
        dispatch(setLoading({ status: false }))
      })
  }, [ticket, type])

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/images/logo.png')}
      />
      <Pressable
        style={styles.button}
        onPress={handleLoginWithSSO}
      >
        <Text style={styles.button.text}>Login With SSO</Text>
      </Pressable>
    </View>
  )
}

export default Login

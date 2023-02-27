import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import styles from './style'

const Login: React.FC = () => {
  const navigation = useNavigation<any>()

  const handleLoginWithSSO = useCallback(() => {
    navigation.navigate('SSO')
  }, [])

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

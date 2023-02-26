import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { Button, Text, View } from 'react-native'

import styles from './style'

const Login: React.FC = () => {
  const navigation = useNavigation<any>()

  const handleLoginWithSSO = useCallback(() => {
    navigation.navigate('SSO')
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WishList</Text>
      <Button
        title="Login with SSO"
        onPress={handleLoginWithSSO}
      />
    </View>
  )
}

export default Login

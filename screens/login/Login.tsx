import React, { useCallback } from 'react'
import { Button, Text, View } from 'react-native'

import styles from './style'

const Login: React.FC = () => {
  const handleLoginWithSSO = useCallback(() => {
    // TODO
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WishList</Text>
      <Button title="Login with SSO" onPress={handleLoginWithSSO} />
    </View>
  )
}

export default Login

import React, { useCallback } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../app/store'
import { setToken } from '../feature/user/userSlice'

const Mine: React.FC = () => {
  const userData = useAppSelector(state => state.user.data)
  const dispatch = useDispatch()

  const handleLogout = useCallback(() => {
    dispatch(
      setToken({
        token: undefined,
      })
    )
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: userData?.avatar }}
        style={styles.img}
      />
      <Text>Name: {userData?.name}</Text>
      <Text>UUID: {userData?.uuid}</Text>
      <Button
        title="Logout"
        onPress={handleLogout}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 64,
    height: 64,
  },
})

export default Mine

import { StyleSheet, View, Text } from 'react-native'

import { useAppSelector } from '../app/store'

export default function Home() {
  const userData = useAppSelector((state) => state.user.data)

  return (
    <View style={styles.container}>
      <Text>{userData?.name}</Text>
      <Text>{userData?.uuid}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

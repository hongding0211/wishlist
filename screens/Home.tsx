import { StyleSheet, View, Text, Image } from 'react-native'

import { useAppSelector } from '../app/store'

export default function Home() {
  const userData = useAppSelector(state => state.user.data)

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: userData?.avatar }}
        style={styles.logo}
      />
      <Text style={styles.text}>User: {userData?.name}</Text>
      <Text style={styles.text}>UUID: {userData?.uuid}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 4,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 20,
  },
})

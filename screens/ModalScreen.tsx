import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, Platform, StyleSheet, TextInput, Text } from 'react-native'
import shajs from 'sha.js'

import { View } from '../components/Themed'

export default function ModalScreen() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [userInfo, setUserInfo] = useState('')

  const handlePhoneChange = (phone: string) => setPhone(phone)
  const handlePasswordChange = (password: string) => setPassword(password)
  const handleLoginPress = () => {
    const hashedPassword = shajs('sha256').update(password).digest('hex')
    const timedPassword = shajs('sha256')
      .update(`${Math.floor(Date.now() / 60000) - 1}${hashedPassword}`)
      .digest('hex')

    fetch('https://hong97.ltd/sso/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        phone,
        password: timedPassword,
      }),
    })
      .then((v) => v.json())
      .then(({ data }) => {
        const { ticket } = data
        return fetch('https://hong97.ltd/sso/api/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            ticket,
          }),
        }).then((v) => v.json())
      })
      .then(({ data }) => {
        const { authToken } = data
        return fetch(
          'https://hong97.ltd/sso/api/userInfo?authToken=' + authToken
        ).then((v) => v.json())
      })
      .then(({ data }) => {
        setUserInfo(JSON.stringify(data, null, 2))
      })
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={handlePhoneChange}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLoginPress} />

      <Text>{userInfo}</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  input: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

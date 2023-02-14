import { useCallback } from 'react'
import { Text } from 'react-native'
import WebView from 'react-native-webview'

const Login = () => {
  const handleChangeNavigationState = useCallback((e) => {
    console.log(e)
  }, [])

  return (
    <>
      <WebView
        onNavigationStateChange={handleChangeNavigationState}
        source={{ uri: 'https://hong97.ltd/sso/login' }}
      />
    </>
  )
}

export default Login

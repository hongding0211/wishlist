import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Mine: undefined
}

export type LoginStackParamList = {
  Login: {
    ticket?: string
    type?: 'sso'
  }
  SSO: undefined
}

export type LoginProps = NativeStackScreenProps<LoginStackParamList, 'Login'>

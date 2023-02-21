/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined
}
export type RootTabParamList = {
  Home: undefined
}

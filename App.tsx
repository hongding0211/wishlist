import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import store from './app/store'
import User from './feature/user/User'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <StatusBar />
          <Navigation />
          <User />
        </Provider>
      </SafeAreaProvider>
    )
  }
}

import React, { useState } from 'react';
import * as Font from 'expo-font'
import Home from './screens/home';
import AppLoading from 'expo-app-loading'
import { AppNavigator } from './routes/homeStack';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})


// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      // <Home />
      <AppNavigator />
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log('error')}
      />
    )
  }
}



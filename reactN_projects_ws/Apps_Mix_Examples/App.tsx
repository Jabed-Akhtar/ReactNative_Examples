/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/* Imports ================================================================== */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import PasswordGenerator_App from './components/PasswordGenerator_App'

/* Main-App ================================================================= */
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <PasswordGenerator_App />
      </View>
    </SafeAreaView>
  );
}

/* Export App =============================================================== */
export default App;

/* ##### END OF FILE ######################################################## */

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

//import PasswordGenerator_App from './components/PasswordGenerator_App'
//import BackgroundRandomColorChangerOnButton_App from './components/BackgroundRandomColorChangerOnButton_App';
//import RollDice_App from './components/RollDice_App/RollDice_App';
import CurrencyConvertor_App from './components/CurrencyConvertor_App/App_Main';

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
        {/* 1. Passwrod generator App - <PasswordGenerator_App />*/}
        {/* 2. Passwrod generator App - <BackgroundRandomColorChangerOnButton_App />*/}
        {/* 3. Roll Dice App - <RollDice_App />*/}
        <CurrencyConvertor_App />
      </View>
    </SafeAreaView>
  );
}

/* Export App =============================================================== */
export default App;

/* ##### END OF FILE ######################################################## */

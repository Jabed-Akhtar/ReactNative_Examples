 /*
 ******************************************************************************
 * @file           : ...
 * @brief          : ...
 ******************************************************************************
 * @author         : Jabed-Akhtar (Github)
 * @creation-date  : 27.08.2023
 ******************************************************************************
 * Packages:
 * - react-native-vector-icons (npm i react-native-vector-icons)
 *      :needed: (npm i @types/react-native-vector-icons)
 * - (npm i react-native-snackbar)
 * Features:
 * - FontAwesome
 * Description:
 * - Follos steps to set up for android: https://www.npmjs.com/package/react-native-vector-icons#android
 ******************************************************************************
 */

 /* Imports ================================================================== */
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TicTacToe_Screen from './components/TicTacToe_Screen';

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
      <TicTacToe_Screen />
    </SafeAreaView>
  );
}

/* Stylesheet variable ====================================================== */
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

/* ##### END OF FILE ######################################################## */

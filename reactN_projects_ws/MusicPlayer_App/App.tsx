 /*
 ******************************************************************************
 * @file           : ...
 * @brief          : ...
 ******************************************************************************
 * @author         : Jabed-Akhtar (Github)
 * @creation-date  : 28.08.2023
 ******************************************************************************
 * Packages:
 * - § npm install --save react-native-track-player : music player
 * - § npm i react-native-snackbar
 * - $ npm i react-native-vector-icons : for icons
 *      to run this package, run this command: npm i --save-dev @types/react-native-vector-icons
 * - § npm i @react-native-community/slider
 * Features:
 * - ...
 * Edited files:
 * - index.js
 * - ./android/app/build.gradle
 * - ./MusicPlayerService.js
 * Description:
 * - Follow steps to set up vector-icons: https://www.npmjs.com/package/react-native-vector-icons#android
 ******************************************************************************
 */

/* Imports ================================================================== */
import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import MusicPlayer_Screen from './components/MusicPlayer_Screen';
import { setupPlayer, addTrack } from './MusicPlayerService';

/* Main-App ================================================================= */
function App(): JSX.Element {

  /*--------------- Variables ---------------*/
  const isDarkMode = useColorScheme() === 'dark';

  const [isPlayerReady, setIsPlayerReady] = useState(false)
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*--------------- Fun - setup player ---------------*/
  async function setup(){
    let isSetup = await setupPlayer()

    if (isSetup){
      await addTrack()
    }

    setIsPlayerReady(isSetup)
  }

  /*--------------- Fun - useEffect ---------------*/
  useEffect(() => {
    setup()
  }, [])
  
  /*--------------- Return View ---------------*/
  // If player is not ready
  if (!isPlayerReady){
    return(
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }
  // If player is ready
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <MusicPlayer_Screen />
    </SafeAreaView>
  );
}

/* Export Main-App ========================================================== */
export default App;

/* ##### END OF FILE ######################################################## */

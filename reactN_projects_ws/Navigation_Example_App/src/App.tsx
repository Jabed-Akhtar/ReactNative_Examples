/*
 ******************************************************************************
 * @file           : ...
 * @brief          : ...
 ******************************************************************************
 * @author         : Jabed-Akhtar (Github)
 * @creation-date  : 28.08.2023
 ******************************************************************************
 * Packages:
 * - § npm install @react-navigation/native
 * - § npm install react-native-screens react-native-safe-area-context
 * - Stack Navigator: § npm install @react-navigation/native-stack
 * Features:
 * - ...
 * Useful links:
 * - https://reactnavigation.org/
 ******************************************************************************
 */

/* Imports ================================================================== */
import React from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// Screen
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string}
};

const Stack = createNativeStackNavigator<RootStackParamList>()

/* Main-App ================================================================= */
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*--------------- Return View ---------------*/
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: "Trending Products"
        }}
        />
        <Stack.Screen
        name='Details'
        component={Details}
        options={{
          title: "Products details"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* Export Main-App ========================================================== */
export default App;

/* ##### END OF FILE ######################################################## */

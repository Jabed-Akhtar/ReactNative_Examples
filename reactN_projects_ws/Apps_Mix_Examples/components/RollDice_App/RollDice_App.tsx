 /*
 ******************************************************************************
 * @file           : ...
 * @brief          : ...
 ******************************************************************************
 * @author         : Jabed-Akhtar (Github)
 * @creation-date  : 26.08.2023
 ******************************************************************************
 * Packages:
 * - react-native-haptic-feedback (npm i react-native-haptic-feedback)
 * Features:
 * - haptic feedback
 * Description:
 * - ...
 ******************************************************************************
 */

/* Imports ================================================================== */
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react';
import { ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable
} from 'react-native'

import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Import Images
import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

/* PasswordGenerator-App ==================================================== */
export default function RollDice_App() {

  /*--------------- Variables ---------------*/
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)
  
  /*--------------- Fun - Roll Dice ---------------*/
  const rollDiceOnTap = () => {
    let randomNumer = Math.floor(Math.random() * 6) + 1;

    switch (randomNumer) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
  }

  /*--------------- Return View ---------------*/
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleTxt}>Roll the Dice</Text>
      </View>
      <Dice imageUrl={diceImage} />
      <Pressable
      onPress={rollDiceOnTap}
      >
        <Text style={styles.rollDiceBtnText}>Roll it!</Text>
      </Pressable>
      <Text style={styles.footerEmptyTxt}></Text>
    </View>
  )
}

/* Stylesheet variable ====================================================== */
const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ABB2B9',
  },
  title: {
      height: 70,
      margin: 10,
      justifyContent: 'center', // Vertically center the title
      alignItems: 'center', // Horizontally center the title
  },
  titleTxt: {
      fontSize: 24,
      textTransform: "uppercase",
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    backgroundColor: '#FDEBD0',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  footerEmptyTxt: {
    height: 50,
  },
})

/* ##### END OF FILE ######################################################## */

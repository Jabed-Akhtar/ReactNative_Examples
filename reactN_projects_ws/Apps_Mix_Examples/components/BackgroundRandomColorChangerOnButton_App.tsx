 /*
 ******************************************************************************
 * @file           : ...
 * @brief          : ...
 ******************************************************************************
 * @author         : Jabed-Akhtar (Github)
 * @creation-date  : 26.08.2023
 ******************************************************************************
 * Packages:
 * - ...
 * Description:
 * - ...
 ******************************************************************************
 */

/* Imports ================================================================== */
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

/* PasswordGenerator-App ==================================================== */
export default function BackgroundRandomColorChangerOnButton_App() {

  /*--------------- Variables ---------------*/
  const [randomBackground, setRandomBackground] = useState("#ffffff");
  
  /*--------------- Fun - generate random color ---------------*/
  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
      
    }
    setRandomBackground(color)
  }

  /*--------------- Return View ---------------*/
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleTxt}>Background Color Changer</Text>
      </View>
      <View style={[styles.content, {backgroundColor: randomBackground}]}>
        {/* The rest of the content */}
        <TouchableOpacity onPress={generateColor}>
            <View style={styles.actionBtn}>
                <Text style={styles.actionBtnTxt}>Press me</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

/* Stylesheet variable ====================================================== */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20, // Padding for the title
    },
    title: {
        height: 50,
        justifyContent: 'center', // Vertically center the title
        alignItems: 'center', // Horizontally center the title
        backgroundColor: 'lightgray',
    },
    titleTxt: {
        fontSize: 24,
        textTransform: "uppercase"
    },
    content: {
        backgroundColor: "#A9DFBF",
        height: 700,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionBtn: {
        borderRadius: 12,
        backgroundColor: "#6A1B4D",
        paddingVertical: 20,
        paddingHorizontal: 40,
        width: 200,
    },
    actionBtnTxt: {
        fontSize: 24,
        color: "#FFFFFF",
        textTransform: "uppercase"
    }
})

/* ##### END OF FILE ######################################################## */

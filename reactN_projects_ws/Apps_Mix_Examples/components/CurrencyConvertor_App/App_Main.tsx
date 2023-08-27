 /*
 ******************************************************************************
 * @file           : ...
 * @brief          : ...
 ******************************************************************************
 * @author         : Jabed-Akhtar (Github)
 * @creation-date  : 27.08.2023
 ******************************************************************************
 * Packages:
 * - React Native Snackbar (npm i react-native-snackbar)
 * Features:
 * - FlatList
 * Description:
 * - ...
 ******************************************************************************
 */

/* Imports ================================================================== */
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import Snackbar from 'react-native-snackbar';

import { currencyByRupee } from './constants';

/* CurrencyConvertor-App ==================================================== */
export default function CurrencyConvertor_App() {

  /*--------------- Variables ---------------*/
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')
  const [numColumns, setNumColumns] = useState(3);
  
  /*--------------- Fun - Convert and return currency ---------------*/
  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue){
      return Snackbar.show({
        text: "Enter a value",
        backgroundColor: "#EA7773",
        textColor: "#000000",
      })
    }
    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)){
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: "Not a valid number",
        backgroundColor: "#F4BE2C",
        textColor: "#000000",
      })
    }
  }

  /*--------------- Fun - Render FlatList items ---------------*/
  const renderItem = ({ item }: { item: Currency }) => (
    <View style={styles.buttonContainer}>
      <Pressable
      style={[styles.button, targetCurrency===item.name && styles.selected]}
      onPress={() => {
        buttonPressed(item)
      }}
      >
        <Text style={styles.flag}>{item.flag}</Text>
        <Text style={styles.country}>{item.name}</Text>
      </Pressable>
    </View>
  );

  /*--------------- Return View ---------------*/
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Currency Convertor</Text>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.rupeesContainer}>
          <Text style={styles.rupee}>N₨</Text>
          <TextInput
          style={styles.inputAmountField}
          maxLength={14}
          value={inputValue}
          clearButtonMode='always' //only for iOS
          onChangeText={setInputValue}
          keyboardType='number-pad'
          placeholder='Enter amount in NRs'
          />
        </View>
        {resultValue && (
          <Text style={styles.resultTxt}>
            {resultValue}
          </Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <FlatList
          data={currencyByRupee}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          numColumns={numColumns}
        />
      </View>
    </View>
  )
}

/* Stylesheet variable ====================================================== */
const styles = StyleSheet.create({
  header:{
    backgroundColor: '#85929E',
    paddingTop: 10,
    paddingLeft: 10,
  },
  headerTxt: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  container: {
    backgroundColor: '#515151',
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  buttonContainer : {
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    margin: 12,
    height: 60,
    width: 80,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
  flag: {
    fontSize: 28,
    color: "#FFFFFF",
    marginBottom: 4
  },
  country: {
    fontSize: 14,
    color: "#2d3436",
  },
})

/* ##### END OF FILE ######################################################## */

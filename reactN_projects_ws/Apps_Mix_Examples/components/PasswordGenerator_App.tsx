 /*
 ******************************************************************************
 * @file           : ...
 * @brief          : ...
 ******************************************************************************
 * @author         : Jabed-Akhtar (Github)
 * @creation-date  : 26.08.2023
 ******************************************************************************
 * Packages:
 * - yup (npm i yup): for Schema builder
 * - Formik (npm install formik --save): for building Forms
 * - React Native Bouncy Checkbox (npm i react-native-bouncy-checkbox)
 * - react-native devTool (npm i react-devtools)
 * Description:
 * 		-
 ******************************************************************************
 */

/* Imports ================================================================== */
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import * as Yup from 'yup'
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

/* Password-Schema ========================================================== */
const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters.')
    .max(16, 'Should be max of 16 characetrs.')
    .required('Length is required.')
})

/* PasswordGenerator-App ==================================================== */
export default function PasswordGenerator_App() {

  /*--------------- Variables ---------------*/
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  /*--------------- Fun - generate password string ---------------*/
  const generatePasswordString = (passwordLength: number) => {
    console.log('From generatePasswordString!')

    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if(lowerCase){
        characterList += lowerCaseChars
    }
    if(upperCase){
        characterList += upperCaseChars
    }
    if(numbers){
        characterList += digitChars
    }
    if(symbols){
        characterList += specialChars
    }

    const passwordResult = createPassword(characterList, passwordLength )

    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  /*--------------- Fun - create password (final result) ---------------*/
  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }

  /*--------------- Return View ---------------*/
  return (
    <>
    <View style={styles.titleView}>
        <Text style={styles.title}>Password Generator</Text>
    </View>
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.appContainer}>
        <View>
        <Formik
        initialValues={{ passwordLength: '' }}
        validationSchema={PasswordSchema}
        onSubmit={(values) => {
            generatePasswordString(+values.passwordLength)
        }}
        >
        {({ handleChange, handleSubmit, values, errors, touched, isValid, handleReset }) => (
        <>
        {/*----- Input Field -----*/}
        <View style={styles.inputWrapper}>
            <View style={styles.inputColumn}>
            <Text style={styles.heading}>Password Length:</Text>
            {touched.passwordLength && errors.passwordLength && (
                <Text style={styles.errorText}>
                {errors.passwordLength}
                </Text>
            )}
            </View>
            <TextInput
            style={styles.inputStyle}
            value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder="Eg. 8"
            keyboardType='numeric'
            />
        </View>

        {/*----- Include-Lowercase Field -----*/}
        <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include lowercase</Text>
            <BouncyCheckbox
            disableBuiltInState
            isChecked={lowerCase}
            onPress={() => {
            setLowerCase(!lowerCase)
            console.log('loserCase state:', lowerCase)
            }}
            fillColor="#29AB87"
            />
        </View>

        {/*----- Include-Uppercase Field -----*/}
        <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include uppercase</Text>
            <BouncyCheckbox
            disableBuiltInState
            isChecked={upperCase}
            onPress={() => {
            setUpperCase(!upperCase)
            console.log('upperCase state:', upperCase)
            }}
            fillColor = "#FC80A5"
            />
        </View>

        {/*----- Include-Numbers Field -----*/}
        <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include numbers</Text>
            <BouncyCheckbox
            disableBuiltInState
            isChecked={numbers}
            onPress={() => {
            setNumbers(!numbers)
            console.log('numbers state:', numbers)
            }}
            fillColor = "#5499C7"
            />
        </View>

        {/*----- Include-Numbers Field -----*/}
        <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include symbols</Text>
            <BouncyCheckbox
            disableBuiltInState
            isChecked={symbols}
            onPress={() => {
            setSymbols(!symbols)
            console.log('symbols state:', symbols)
            }}
            fillColor = "#C9A0DC"
            />
        </View>

        {/*----- Nuttons - Generate and reset password -----*/}
        <View style={styles.formActions}>
            {/*----- Generate-password button -----*/}
            <TouchableOpacity
            disabled={!isValid}
            style={styles.primaryBtn}
            onPress={() => {
            handleSubmit();
            console.log('Btn submit!');
            }}
            >
            <Text style={styles.primaryBtnTxt}>Generate Password</Text>
            </TouchableOpacity>
            {/*----- Reset-password button -----*/}
            <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => {
                handleReset();
                setPassword('')
                setIsPassGenerated(false)
                setLowerCase(true)
                setUpperCase(false)
                setNumbers(false)
                setSymbols(false)
                console.log('Btn reset!');
            }}
            >
            <Text style={styles.secondaryBtnTxt}>Reset</Text>
            </TouchableOpacity>
        </View>

        {/*----- Show result (generated password) -----*/}
        {isPassGenerated ? (
            <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.subTitle}>Result:</Text>
                <Text style={styles.description}>Long Press to copy</Text>
                <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
            </View>
        ) : null}
        </>
        )}
        </Formik>
        </View>
    </ScrollView>
    </>
  )
}

/* Stylesheet variable ====================================================== */
const styles = StyleSheet.create({
    appContainer: {
        padding: 15,
        backgroundColor: '#EAECEE',
    },
    formContainer: {
        margin: 8,
        padding: 8,
    },
    titleView: {
        backgroundColor: '#85929E',
        paddingTop: 10,
        paddingLeft: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 15,
    },
    subTitle: {
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 2,
    },
    description: {
        color: '#758283',
        marginBottom: 8,
    },
    heading: {
        fontSize: 15,
    },
    inputWrapper: {
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    inputColumn: {
        flexDirection: 'column',
    },
    inputStyle: {
        padding: 8,
        width: '30%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
    },
    errorText: {
        fontSize: 12,
        color: '#ff0d10',
    },
    formActions: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    primaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#5DA3FA',
    },
    primaryBtnTxt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    secondaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#CAD5E2',
    },
    secondaryBtnTxt: {
        textAlign: 'center',
    },
    card: {
        marginTop: 20,
        padding: 12,
        borderRadius: 6,
        marginHorizontal: 12,
    },
    cardElevated: {
        backgroundColor: '#F0B27A',
        elevation: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    generatedPassword: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 12,
        color:'#100'
    },
})

/* ##### END OF FILE ######################################################## */

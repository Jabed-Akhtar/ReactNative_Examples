
/* Imports ================================================================== */
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

// Navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

import {RootStackParamList} from '../App'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

/* Screen - Details ========================================================= */
const Details = ({route}: DetailsProps) => {

  /*--------------- Variables ---------------*/
  const {productId} = route.params

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  /*--------------- Return View ---------------*/
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details: {productId}</Text>
      <Button
      title='Go to Home'
      //onPress={() => navigation.navigate('Home')}
      onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

/* Stylesheet variable ====================================================== */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    }
})

/* Export Screen ============================================================ */
export default Details

/* ##### END OF FILE ######################################################## */

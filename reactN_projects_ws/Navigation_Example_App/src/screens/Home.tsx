
/* Imports ================================================================== */
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

// Navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

/* Screen - Home ============================================================ */
const Home = ({navigation}: HomeProps) => {
  /*--------------- Return View ---------------*/
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
      title='Go to details'
      onPress={() => navigation.navigate('Details', {
        productId: "123"
      })}
      ></Button>
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
export default Home

/* ##### END OF FILE ######################################################## */

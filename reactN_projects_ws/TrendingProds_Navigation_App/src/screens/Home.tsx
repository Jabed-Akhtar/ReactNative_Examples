
/* Imports ================================================================== */
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native'
import React, { Component } from 'react'

// React Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'

import {RootStackParamList} from '../App'
import ProductItem from '../components/ProductItem'
import Separator from '../components/Separator'
// Data
import { PRODUCTS_LIST } from '../data/constants'

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">

/* Screen - Home ============================================================ */
const Home = ({navigation}: HomeProps) => {
  /*--------------- Return View ---------------*/
  return (
    <View style={styles.container}>
        <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
            <Pressable
            onPress={() => {
                navigation.navigate('Details', {
                    product: item
                })
            }}
            >
                <ProductItem
                product={item}
                />
            </Pressable>
        )}  
        />
    </View>
  )
}

/* Stylesheet variable ====================================================== */
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
  
      padding: 12,
      backgroundColor: '#FFFFFF',
    },
  });

/* Export Screen ============================================================ */
export default Home

/* ##### END OF FILE ######################################################## */

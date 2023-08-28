
/* Imports ================================================================== */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Slider from '@react-native-community/slider'
import {useProgress} from 'react-native-track-player'

/* Song slider component ==================================================== */
const SongSlider = () => {

  /*--------------- Variables ---------------*/
  const {position, duration} = useProgress()

  /*--------------- Return View ---------------*/
  return (
    <View>
      <Slider 
      value={position}
      minimumValue={0}
      maximumValue={duration}
      thumbTintColor='#FFFFFF'
      maximumTrackTintColor='#FFFFFF'
      style={styles.sliderContainer}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
            {new Date(position*1000).toISOString().substring(15, 19)}
        </Text>
        <Text style={styles.time}>
            {new Date((duration-position)*1000).toISOString().substring(15, 19)}
        </Text>
      </View>
    </View>
  )
}

/* Stylesheet variable ====================================================== */
const styles = StyleSheet.create({
    sliderContainer: {
      width: 350,
      height: 40,
      marginTop: 25,
  
      flexDirection: 'row',
    },
    timeContainer: {
      width: 340,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    time: {
      color: '#fff',
    },
  });

/* Export component ========================================================= */
export default SongSlider

/* ##### END OF FILE ######################################################## */


/* Imports ================================================================== */
import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { playbackService } from '../MusicPlayerService'

/* Control center component ================================================= */
const ControlCenter = () => {

  /*--------------- Variables ---------------*/
  const playBackState = usePlaybackState()

  /*--------------- Fun - skip to next ---------------*/
  const skipToNext =async () => {
    await TrackPlayer.skipToNext()
  }

  /*--------------- Fun - skip to previous ---------------*/
  const skipToPrevious =async () => {
    await TrackPlayer.skipToPrevious()
  }

  /*--------------- Fun - toggle pause/play track ---------------*/
  const togglePlayback =async (playback: State) => {
    const currentTrack = await TrackPlayer.getCurrentTrack()

    if(currentTrack !== null){
        if(playback === State.Paused || State.Ready){
            await TrackPlayer.play()
        } else {
            await TrackPlayer.pause()
        }
    }
  }

  /*--------------- Return View ---------------*/
  return (
    <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
            <Icon style={styles.icon} name="skip-previous" size={40} />
        </Pressable>
        <Pressable onPress={() => togglePlayback(playBackState)}>
            <Icon style={styles.icon} name={playBackState=== State.Playing ? "pause" : "play-arrow"} size={50} />
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Icon style={styles.icon} name="skip-next" size={40} />
        </Pressable>
    </View>
  )
}

/* Stylesheet variable ====================================================== */
const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
});

/* Export ControlCenter ===================================================== */
export default ControlCenter

/* ##### END OF FILE ######################################################## */

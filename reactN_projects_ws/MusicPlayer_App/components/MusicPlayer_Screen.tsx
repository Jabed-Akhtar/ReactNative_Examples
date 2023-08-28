
/* Imports ================================================================== */
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react';
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import TrackPlayer, {Event, Track, useTrackPlayerEvents} from 'react-native-track-player'
import { playListData } from './constants';
import SongInfo from './SongInfo';
import SongSlider from './SongSlider';
import ControlCenter from './ControlCenter';

const {width} = Dimensions.get('window')

/* Music player screen ====================================================== */
const MusicPlayer_Screen = () => {

  /*--------------- Variables ---------------*/
  const [track, setTrack] = useState<Track | null>()

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event=>{
    switch (event.type) {
      case Event.PlaybackTrackChanged:
        const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
        setTrack(playingTrack)
        break;
    }
  })

  /*--------------- Fun - render-art-work ---------------*/
  const renderArtWork = () => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork && (
            <Image
            style={styles.albumArtImg}
            source={{uri: track?.artwork?.toString()}}
            />
          )}
        </View>
      </View>
    )
  }
  
  /*--------------- Return View ---------------*/
  return (
    <View style={styles.container}>
      <FlatList
      horizontal
      data={playListData}
      renderItem={renderArtWork}
      keyExtractor={song => song.id.toString()}
      />

      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  )
}

/* Stylesheet variable ====================================================== */
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
});

/* Export component ========================================================= */
export default MusicPlayer_Screen

/* ##### END OF FILE ######################################################## */

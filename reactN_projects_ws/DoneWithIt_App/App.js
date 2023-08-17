//import { StatusBar } from 'expo-status-bar';
import { 
  Platform, 
  View, 
  SafeAreaView, 
  StatusBar, 
  StyleSheet, 
  Alert, 
  Text, 
  Image, 
  TouchableOpacity, 
  Button,
  Dimensions
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  //console.log(Dimensions.get("screen"))     // Getting dimension of the device
  const {landscape} = useDeviceOrientation();

  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello World.</Text>
      <Text>Temp.</Text>
      <TouchableOpacity onPress={() => console.log("Image pressed!")}>
        <Image 
          source={require('./assets/icon.png')} 
          style={{width: 100, height: 100}}
          blurRadius={5}
        />
      </TouchableOpacity>
      <Button 
        title='Click me'
        color="orange"
        onPress={() => Alert.alert('Alert msg', 'Button pressed', [
          {text: "Yes", onPress: () => console.log('Button pressed -> Yes')}, 
          {text: "No", onPress: () => console.log('Button pressed -> No')},
        ])}
      />
      <View style={{
        backgroundColor: 'dodgerblue',
        width: "50%",
        height: landscape ? '100%' : '30%',
      }}></View>
      <View style={{
        backgroundColor: "red",
        width: "50%",
        height: landscape ? '70%' : '30%',
        flex: 1,
      }}>
        <View style={{
          backgroundColor: "gold",
          flex: 2,
          flexDirection: "row-reverse", // horizontal and inverse
          justifyContent: 'center',     // main
          alignItems: "center",       // secondary axis
          alignContent: "center",       // works only if there is wrapping
          flexWrap: "wrap",             // Wrap to new line
        }}>
          <View style={{
            backgroundColor: "red",
            flexBasis: "10%",     // width or height
            flexGrow: 1,          // Fill first item till start (remained)
            flexShrink: 1,        // make the item to shring, if it is pushing other items out of the screen, same as "flex: -1"
            //width: "10%",
            height: "40%",
          }}></View>
          <View style={{
            backgroundColor: "green",
            width: "10%",
            height: "50%",
            alignSelf: "flex-end",
            top: 20,
            position: "absolute",
          }}></View>
          <View style={{
            backgroundColor: "red",
            width: "10%",
            height: "50%",
          }}></View>
        </View>
        <View style={{
          backgroundColor: "blue",
          flex: 1,
        }}></View>
        <View style={{
          backgroundColor: "red",
          flex: 1,
        }}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight+100:0,
  },
});

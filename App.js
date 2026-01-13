import { StatusBar } from 'expo-status-bar';
import { Button as ButtonRN, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './src/ui/Button/Button';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {

  const pressHandler = () => {
    alert('You pressed')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading} onPress={pressHandler}>My App</Text>
      <Text >My first <Text style={styles.bold}>React Native</Text> App</Text>

      <Button
        text="Press me!"
        onPress={pressHandler}
        icon={<AntDesign name="arrow-right" size={20} color="white" />}
        style={{ alignSelf: 'flex-start' }}
      />

      <ButtonRN title="Press me" onPress={pressHandler} color="red" />

      <Pressable
        style={({ pressed })=> [styles.button, pressed && { opacity: 0.5 }]}
        onLongPress={pressHandler}
        disabled={true}
      >
        <Text style={styles.buttonText}>Press me</Text>
      </Pressable>



      {/* <View style={{ flexDirection: 'row' }}>
        <View style={{ backgroundColor: '#ddd', flex: 2 }}>
          <Text>Some text</Text>
        </View>
        <View style={[styles.container, { backgroundColor: '#555' }]}>
          <Text>Some text</Text>
        </View>
      </View> */}

      {/* <Image source={require('./assets/favicon.png')} />
      <Image
        source={{ uri: 'https://focus.ua/static/storage/thumbs/1088x/e/e5/dbcfcb49-5d326bab03bbbedc1c01b2380805be5e.jpg' }}
        style={{ width: 100, height: 300 }}
        resizeMode='cover'
      />

      <ImageBackground source={{ uri: 'https://focus.ua/static/storage/thumbs/1088x/e/e5/dbcfcb49-5d326bab03bbbedc1c01b2380805be5e.jpg' }}>
        <Text>Some Text</Text>
      </ImageBackground> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  bold: {
    fontWeight: 'bold'
  },
  button: {
    padding: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

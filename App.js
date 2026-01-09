import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const pressHandler = () => {
    alert('You pressed')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading} onPress={pressHandler}>My App</Text>
      <Text>My first <Text style={styles.bold}>React Native</Text> App</Text>

      
      <View style={{ flexDirection: 'row' }}>
        <View style={{ backgroundColor: '#ddd', flex: 2 }}>
          <Text>Some text</Text>
        </View>
        <View style={[styles.container, {backgroundColor: '#555'}]}>
          <Text>Some text</Text>
        </View>
      </View>

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
  }
});

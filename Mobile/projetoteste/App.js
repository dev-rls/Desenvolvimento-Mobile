import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Abra o App.js para começar a trabalhar no seu aplicativo!</Text>
      <FontAwesome5 name="cube" size={24} color="black" />
      <img>
      
      </img>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StyleSheet, Text, View, Image, Button } from 'react-native'; // Corrigido "Buttom" para "Button"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {// Mesmo que def
  const handlePress = () => { 
    alert("Você clicou! Parabéns");
  };

  return (
    <View style={styles.container}>
      <Text>Raquel</Text> <br></br>
      <Image
        style={styles.image} 
        source={require('./morango.jpg')} 
      /><br/>
      <Button 
        title="Pressione aqui" 
        onPress={handlePress} 
      /> <br/>
      <FontAwesome5 name="cube" size={24} color="black" />
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
  image: {
    width: 300, // Define largura da imagem
    height: 300, // Define altura da imagem
  },
});




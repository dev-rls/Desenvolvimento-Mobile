import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function MinhasCredenciais({ githubUser }) {
  // Estado para controlar o like
  const [liked, setLiked] = useState(false);

  // Função para alternar o estado de like
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <View style={{ padding: 15, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{
            marginRight: 15,
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={{
            uri: `https://github.com/${githubUser}.png`,
          }}
        />
        <Image
          style={{
            width: 150,
            height: 150,
          }}
          source={{
            uri: `https://github.com/${githubUser}.png`,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginVertical: 10,
          color: '#333',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5,
        }}
      >
        {githubUser}
      </Text>
      <TouchableOpacity
        onPress={toggleLike}
        activeOpacity={0.7}
        style={{ transform: [{ scale: liked ? 1.2 : 1 }] }}
      >
        <AntDesign
          name={liked ? 'heart' : 'hearto'}
          size={24}
          color={liked ? 'red' : 'black'}
        />
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const githubUsers = ['dev-rls', 'HisanoEdu', 'jamilyGomes'];

  return (
    <View style={styles.container}>
      <ScrollView>
        {githubUsers.map((githubUser) => (
          <MinhasCredenciais key={githubUser} githubUser={githubUser} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
  },
});
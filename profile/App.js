import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
 
function MinhasCredenciais({ githubUser }) {
  return (
    <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
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
          width: 200,
          height: 200,
        }}
        source={{
          uri: `https://github.com/${githubUser}.png`,
        }}
      />
 
      <AntDesign name="hearto" size={24} color="black" />
    </View>
  );
}
 
export default function App() {
 
  const githubUsers = ['dev-rls','HisanoEdu', 'jamilyGomes'];
 
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
    backgroundColor: 'aliceblue',
  },
});

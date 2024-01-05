// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Ana Sayfa</Text>
    <Button title="Hakkında'ya Git" onPress={() => navigation.navigate('Hakkında')} />
  </View>
);

export default HomeScreen;

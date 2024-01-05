// src/screens/AboutScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }) => (
  <View>
    <Text>Hakkında</Text>
    <Button title="Ana Sayfa'ya Git" onPress={() => navigation.navigate('AnaSayfa')} />
  </View>
);

export default AboutScreen;

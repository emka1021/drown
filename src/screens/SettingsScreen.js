// src/screens/SettingsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => (
  <View>
    <Text>Ayarlar</Text>
    <Button title="Ana Sayfa'ya Git" onPress={() => navigation.navigate('AnaSayfa')} />
  </View>
);

export default SettingsScreen;

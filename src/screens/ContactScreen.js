// src/screens/ContactScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ContactScreen = ({ navigation }) => (
  <View>
    <Text>İletişim</Text>
    <Button title="Ana Sayfa'ya Git" onPress={() => navigation.navigate('AnaSayfa')} />
  </View>
);

export default ContactScreen;

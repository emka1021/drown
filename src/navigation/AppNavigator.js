// src/navigation/AppNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="AnaSayfa">
      <Drawer.Screen name="AnaSayfa" component={HomeScreen} />
      <Drawer.Screen name="Hakkında" component={AboutScreen} />
      <Drawer.Screen name="İletişim" component={ContactScreen} />
      <Drawer.Screen name="Ayarlar" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;

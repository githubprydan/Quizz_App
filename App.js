import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/index.js';
const App = () => (
  <NavigationContainer>
    <Navigation />
  </NavigationContainer>
);

export default App;


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home.js';
import Quizz from '../screen/Quizz.js';
import Result from '../screen/Result.js';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizzScreen"
        component={Quizz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={Result}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../features/home/Home';
import Details from '../features/details/Details';

const AppNavigator = createStackNavigator(
  {
    home: {screen: Home},
    details: {screen: Details}
  }
);

export default createAppContainer(AppNavigator);

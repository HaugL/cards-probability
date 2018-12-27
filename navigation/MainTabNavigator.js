import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import PokerScreen from '../screens/PokerScreen'
import GolfScreen from '../screens/GolfScreen'
import TabBarIcon from '../components/TabBarIcon';

const PokerStack = createStackNavigator({
  Poker: PokerScreen
});

PokerStack.navigationOptions = {
  tabBarLabel: 'Poker',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-trophy`
          : 'trophy'
      }
    />
  ),
};

const GolfStack = createStackNavigator({
  Poker: GolfScreen
})

GolfStack.navigationOptions = {
  tabBarLabel: 'Golf',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-ribbon`
          : 'md-ribbon'
      }
    />
  ),
};

export default createBottomTabNavigator({
  PokerStack,
  GolfStack
});

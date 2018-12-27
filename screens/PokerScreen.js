import React from 'react';
import { Text, View } from 'react-native';

import CardSelector from '../components/CardSelector'


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Poker Hand Predictor',
  };

  render() {
    return (
      <View>
        <Text>
          I am Poker
        </Text>
        <CardSelector 
          setValue={ () => {}}
        />
      </View>
    );
  }
}

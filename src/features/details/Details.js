import React from 'react';
import { View, Text, Button } from 'react-native';
import { navigate } from '../../router/navigation';

export default class Details extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigate(this.props, 'details')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigate(this.props, 'home')}
        />
        <Button title="Go back" onPress={() => navigate(this.props, 'back')} />
      </View>
    );
  }
}

import React from 'react';
import { View, Text, Button } from 'react-native';
import { navigate } from '../../router/navigation';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigate(this.props, 'details')}
        />
      </View>
    );
  }
}

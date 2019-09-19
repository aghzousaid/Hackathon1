import React from 'react';
import { Text, View} from 'react-native';
import { Avatar } from 'react-native-elements'

export default class CompteScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Avatar
            size="xlarge"
            rounded
            title="CR"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
         
        </View>
      );
    }
}
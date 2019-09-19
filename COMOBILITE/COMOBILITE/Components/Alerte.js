import React from 'react';
import { View, Text} from 'react-native';
import { Button ,Slider} from 'react-native-elements'

export default class AlerteScreen extends React.Component {

  constructor(props) {
    super(props)
   
 
    this.state = {
      value: 0 
    }
  }

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          

          <Button
  title="Créer une alerte"

  titleStyle={{ fontWeight: "700" }}
  buttonStyle={{
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }}
  containerStyle={{ marginTop: 20 }}
/>

        </View>
      );
    }
}
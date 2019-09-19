import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CardViewWithIcon } from "react-native-simple-card-view";

import PlusScreen from './Components/Plus';
import ChercherScreen from './Components/Chercher';
import AlerteScreen from './Components/Alerte';
import CompteScreen from './Components/Compte';
import TrajetScreen from './Components/Trajet';



const TabNavigator =  createBottomTabNavigator(
  {

    Chercher : ChercherScreen,
    Alerte: AlerteScreen,
    Trajets : TrajetScreen,
    Compte : CompteScreen,
    Plus: PlusScreen,
    
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Chercher') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Plus') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Trajets') {
          iconName = `ios-list${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Compte') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Alerte') {
          iconName = `ios-warning${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);


export default class App extends React.Component {
  render() {
    return (
      <View  style = {{ flex : 1 }}>
        <TabNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

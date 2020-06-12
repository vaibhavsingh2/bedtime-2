import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'; 
import readScreen from './screens/readScreen';
import  writeScreen from './screens/writeScreen';

export default class App extends React.Component {
  
 
  render(){
 
    return (
 
      <AppContainer/>
    
  );
  }
}
const TabNavigator=createBottomTabNavigator({
  Write: {screen: writeScreen},
  Read: {screen: readScreen}
})
const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


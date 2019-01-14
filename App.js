'use scrict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {  createStackNavigator,} from 'react-navigation';
import SearchPage from './SearchPage'

type Props = {};
class SearchPage extends Component<Props> {
  static navigationOptions = {
    title: 'Property Finder',
  };
  render() {
    return <Text style={styles.description}> Search for some HOUSES DUDE!</Text>;
  }
}
const App = createStackNavigator({
  Home: { screen: SearchPage },
});
export default App;



const styles = StyleSheet.create({
    description: {
      fontSize: 18,
      textAlign: 'center',
      color: "#656565",
      marginTop: 65,
    },
});

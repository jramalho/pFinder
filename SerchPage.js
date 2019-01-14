'use strict';

import React from 'react'

import { StyleSheet, Text, TextInput, View, Button, ActivityIndicator, Image } from 'react-native';

type Props = {};

export default class SearchPage extends Component<Props>{
    static navigationOptions = {
        title: 'Property Finder'
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                Procure casas para morar
                </Text>
                <Text style={styles.description}>
                Procure por lugar ou CEP.
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
      marginBottom: 20,
      fontSize: 18,
      textAlign: 'center',
      color: '#656565'
    },
    container: {
      padding: 30,
      marginTop: 65,
      alignItems: 'center'
    },
  });
  
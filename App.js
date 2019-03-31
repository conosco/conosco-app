import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Facebook } from 'expo';

export default class App extends React.Component {

  async logIn() {
    try {
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync('2279625532289242', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        Alert.alert('Cancel!', 'You canceled login with Facebook');
      }
    } catch ({ message }) {
      Alert.alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Conosco!</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.logIn()}>
          <Text style={styles.text}>Login with Facebook</Text>
        </TouchableOpacity>
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

  button: {
    backgroundColor: '#3b5998',
    margin: 16,
    padding: 16,
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});

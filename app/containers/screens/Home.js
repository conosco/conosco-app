import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';

import { logIn } from '../../actions/user';

import Button from '../../components/common/button';

const fb = require('../../../assets/fb.png');

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 32, color: '#2a2a2a', fontWeight: '600' }}>Conosco</Text>
        <Button
          text={'Entrar com Facebook'}
          color={'#4267B2'}
          textColor={'#fff'}
          icon={fb}
          press={() => this.props.dispatch(logIn())}
        />
        <Button
          text={'Entrar com e-mail'}
          color={'#F29F99'}
          textColor={'#fff'}
          icon={null}
          press={() => {}}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 16 }}>
          <View style={{ width: 70, height: 1, backgroundColor: '#EFEFED' }} />
          <Text style={{ color: '#EFEFED', marginHorizontal: 4 }}>ou</Text>
          <View style={{ width: 70, height: 1, backgroundColor: '#EFEFED' }} />
        </View>
        <Button
          text={'Cadastrar'}
          color={'#fff'}
          border
          borderColor={'#EFEFED'}
          textColor={'#F29F99'}
          icon={null}
          press={() => this.props.navigation.navigate('Register')}
        />
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

export default connect()(Home);

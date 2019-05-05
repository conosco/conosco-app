import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import { connect } from 'react-redux';

import { logIn } from '../../actions/user';

import Button from '../../components/common/button';

const fb = require('../../../assets/fb.png');
var screenWidth = Dimensions.get('window').width;

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/conosco_logo(sem_fundo).png')}
        />
        <Button
          text={'Entrar com Facebook'}
          color={'#4267B2'}
          textColor={'#fff'}
          icon={fb}
          press={() => this.props.dispatch(logIn())}
        />
        <Button
          text={'Entrar com e-mail'}
          color={'#88A379'}
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
          textColor={'#79A39D'}
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
    backgroundColor: 'rgb(79, 133, 134)'
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
  logo: {
    width: screenWidth * 0.6, 
    height: screenWidth * 0.6,
    margin: 40,
    overflow: 'visible'
  }
});

export default connect()(Home);

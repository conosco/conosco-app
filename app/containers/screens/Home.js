import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

import { connect } from 'react-redux';

import { logIn } from '../../actions/user';

import Button from '../../components/common/button';
import SeparatorOr from '../../components/common/separator';

const fb = require('../../../assets/img/fb.png');
const mail = require('../../../assets/img/mail.png');
var screenWidth = Dimensions.get('window').width;

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/img/conosco_logo(sem_fundo).png')}
        />
        <Button
          text={'Entrar com Facebook'}
          color={'#4267B2'}
          textColor={'#fff'}
          icon={fb}
          onPress={() => this.props.dispatch(logIn(this.props.navigation))}
        />
        <Button
          text={'Entrar com e-mail'}
          color={'#6DBCD6'}
          textColor={'#fff'}
          icon={mail}
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <SeparatorOr />
        <Button
          text={'Cadastrar'}
          color={'#fff'}
          border
          borderColor={'#EFEFED'}
          textColor={'#79A39D'}
          icon={null}
          onPress={() => this.props.navigation.navigate('Register')}
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
    backgroundColor: '#4D9BA3'
  },
  logo: {
    width: screenWidth * 0.6, 
    height: screenWidth * 0.6,
    margin: 40,
    overflow: 'visible'
  }
});

export default connect()(Home);

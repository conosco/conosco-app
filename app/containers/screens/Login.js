import React from 'react';
import {
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import Input from '../../components/common/input';
import Button from '../../components/common/button';

import HeaderTitle from '../../components/common/Header/headerTitle';
import HeaderBackButton from '../../components/common/Header/headerBackButton';

class Login extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle title={'Entre com e-mail'} />,
      headerLeft: <HeaderBackButton tintColor={'#fff'} onPress={() => navigation.goBack()} />,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Input
            onChange={(email) => this.setState({ email })}
            value={this.state.email}
            placeholder={'E-mail'}
            autoCorrect={false}
            autoFocus
            type={'email-address'}
          />
          <Input
            onChange={(password) => this.setState({ password })}
            value={this.state.password}
            placeholder={'Senha'}
            autoCorrect={false}
            secure
          />
          <Button
            styleProps={styles.button}
            text={'Entrar'}
            color={'#88A379'}
            textColor={'#fff'}
            icon={null}
            press={() => this.props.navigation.navigate('tabScreens')}
          />
          <KeyboardSpacer />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: 'rgb(79, 133, 134)',
  },

  button: {
    marginTop: 20,
  }
});

export default connect()(Login);

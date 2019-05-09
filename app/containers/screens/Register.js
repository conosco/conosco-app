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
import { register } from '../../actions/user';

class Register extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle title={'Cadastre-se'} />,
      headerLeft: <HeaderBackButton tintColor={'#fff'} onPress={() => navigation.goBack()} />,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      picture: ''
    };
  }

  register = () => {
    const { dispatch, navigation } = this.props;
    const { email, password, firstName, picture, lastName } = this.state;
    const user = { email, password, firstName, lastName, picture };
    
    dispatch(register(user, navigation));
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Input
            onChange={(firstName) => this.setState({ firstName })}
            value={this.state.firstName}
            placeholder={'Nome'}
            autoFocus
            autoCorrect={false}
            capitalize
          />
          <Input
            onChange={(email) => this.setState({ email })}
            value={this.state.email}
            placeholder={'E-mail'}
            autoCorrect={false}
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
            text={'Cadastrar e entrar'}
            color={'#6DBCD6'}
            textColor={'#fff'}
            icon={null}
            onPress={this.register}
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
    justifyContent: 'center',
    backgroundColor: '#4D9BA3',
  },

  button: {
    marginTop: 40,
  }
});

export default connect()(Register);

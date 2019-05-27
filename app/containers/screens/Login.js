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
import ButtonFactory from '../../factory/button/index';
import Loading from '../../components/common/loading';
import HeaderTitle from '../../components/common/Header/headerTitle';
import HeaderBackButton from '../../components/common/Header/headerBackButton';
import { setUser } from '../../actions/user';

import { validateUser } from '../../helpers/validates';

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

  login = () => {
    const { dispatch, navigation } = this.props;
    const { email, password } = this.state;
    const user = { email, password };
    
    if (validateUser(user)) dispatch(setUser(user, navigation));
  }

  render() {
    const { user } = this.props;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          { user.loading ? <Loading /> : null }
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
        { ButtonFactory.factoryMethod('login',{...this.props, login: this.login }) }
          <KeyboardSpacer />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4D9BA3',
  },

  button: {
    marginTop: 20,
  }
});

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Login);

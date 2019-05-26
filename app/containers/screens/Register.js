import React from 'react';
import {
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';
import { Permissions } from 'expo';

import KeyboardSpacer from 'react-native-keyboard-spacer';

import Input from '../../components/common/input';
import ButtonFactory from '../../factory/button/index';
import Loading from '../../components/common/loading';

import HeaderTitle from '../../components/common/Header/headerTitle';
import HeaderBackButton from '../../components/common/Header/headerBackButton';
import { register } from '../../actions/user';
import { validateRegister } from '../../helpers/validates';
import uploadImage from '../../helpers/firebase';
import Avatar from '../../components/common/avatar';

import ChangeStyle from '../../components/common/Header/headerBackButton';

console.disableYellowBox = true;

class Register extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle title={'Cadastre-se'} />,
      headerLeft: ChangeStyle(HeaderBackButton,
        {
          HOC: {
            width: 25,
            heigth: 30,
          }
      }),
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        profilePic: '',
      },
      storage: {
        progress: 0,
        loading: false,
        profilePic: '',
      },
      uploaded: null,
    };
  }

  selectAvatar = () =>
    Permissions.askAsync(Permissions.CAMERA_ROLL).then(({ status }) => {
      if (status === 'granted') {
        ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        }).then(({ uri }) => {
          this.setState({ storage: { loading: true }});
          uploadImage(uri, result => this.setState({ storage: { ...this.state.storage, ...result }}));
        });
      }
    });

  register = () => {
    const { dispatch, navigation } = this.props;
    const { email, password, firstName, lastName } = this.state.user;
    const { profilePic } = this.state.storage;
    const user = { email, password, firstName, lastName, profilePic };
    console.log(user)
    if (validateRegister(user)) dispatch(register(user, navigation));
  }

  render() {
    const { loading, progress, profilePic } = this.state.storage;
    const { uploaded } = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Avatar
            size={100}
            progress={progress}
            loading={loading}
            uploaded={uploaded}
            uri={profilePic}
            onPress={this.selectAvatar}
            callback={uploaded => this.setState({ uploaded })}
          />
          <Input
            onChange={(firstName) => this.setState({ ...this.state, user: {...this.state.user, firstName} })}
            value={this.state.user.firstName}
            placeholder={'Primeiro Nome'}
            autoFocus
            autoCorrect={false}
            capitalize
          />
          <Input
            onChange={(lastName) => this.setState({ ...this.state, user: {...this.state.user, lastName} })}
            value={this.state.user.lastName}
            placeholder={'Último Nome'}
            autoFocus
            autoCorrect={false}
            capitalize
          />
          <Input
            onChange={(email) => this.setState({ ...this.state, user: {...this.state.user, email} })}
            value={this.state.user.email}
            placeholder={'E-mail'}
            autoCorrect={false}
            type={'email-address'}
          />
          <Input
            onChange={(password) => this.setState({ ...this.state, user: {...this.state.user, password} })}
            value={this.state.user.password}
            placeholder={'Senha'}
            autoCorrect={false}
            secure
          />
        { ButtonFactory.build('register-login',{...this.props, register: this.register }) }
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

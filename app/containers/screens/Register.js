import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Input from '../../components/common/input';
import Button from '../../components/common/button';

class Register extends React.Component {

  static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: <Text style={{ fontWeight: 'bold', color: '#2a2a2a', fontSize: 14 }}>Cadastrar</Text>,
		};
	}

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Input
          onChange={(name) => this.setState({ name })}
          value={this.state.name}
          placeholder={'Nome'}
        />
        <Input
          onChange={(email) => this.setState({ email })}
          value={this.state.email}
          placeholder={'E-mail'}
        />
        <Input
          onChange={(username) => this.setState({ username })}
          value={this.state.username}
          placeholder={'Nome de usuário'}
        />
        <Input
          onChange={(password) => this.setState({password})}
          value={this.state.password}
          placeholder={'Senha'}
        />
        <Button
          text={'Cadastrar e entrar'}
          color={'#F29F99'}
          textColor={'#fff'}
          icon={null}
          press={() => { }}
        />
      </View>
    );
  }
}

export default connect()(Register);

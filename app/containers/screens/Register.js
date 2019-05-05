import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Input from '../../components/common/input';
import Button from '../../components/common/button';

var screenWidth = Dimensions.get('window').width;

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
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/conosco_logo(sem_fundo).png')}
        />
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
        <Text>{'\n \n \n \n \n'}</Text>
        <Button
          text={'Cadastrar e entrar'}
          color={'#88A379'}
          textColor={'#fff'}
          icon={null}
          press={() => { }}
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
    backgroundColor: 'rgb(79, 133, 134)',
  },

  logo: {
    width: screenWidth * 0.3, 
    height: screenWidth * 0.3,
    // margin: 40,
    overflow: 'visible',
    position: 'absolute',
        top: 15,
  }
});

export default connect()(Register);

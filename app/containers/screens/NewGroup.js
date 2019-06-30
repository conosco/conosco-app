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
import { createGroup } from '../../actions/group';

class NewGroup extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle title={'Crie o seu Grupo'} />,
      headerLeft: <HeaderBackButton tintColor={'#fff'} onPress={() => navigation.goBack()} />,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      iconUrl: '',
    };
  }

  createGroup = () => {
    const { dispatch, navigation } = this.props;
    const { name, description, iconUrl } = this.state;
    const group = { name, description, iconUrl };
    console.log("nav = ", navigation)
    dispatch(createGroup(group, navigation));
  }

  render() {
    const { user } = this.props;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          { user.loading ? <Loading /> : null }
          <Input
            onChange={(name) => this.setState({ name })}
            value={this.state.name}
            placeholder={'Nome'}
            autoCorrect={false}
            autoFocus
          />
          <Input
            onChange={(description) => this.setState({ description })}
            value={this.state.description}
            placeholder={'Descrição'}
            autoCorrect={false}
          />
          <Input
            onChange={(iconUrl) => this.setState({ iconUrl })}
            value={this.state.iconUrl}
            placeholder={'URL da Imagem'}
            autoCorrect={false}
          />
        { ButtonFactory.factoryMethod('create-group',{...this.props, createGroup: this.createGroup }) }
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
    justifyContent: 'center',
    backgroundColor: '#4D9BA3',
  },

  button: {
    marginTop: 20,
  }
});

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(NewGroup);

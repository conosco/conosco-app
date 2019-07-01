import React from 'react';
import {
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    View,
    Image,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import Input from '../../components/common/input';
import ButtonFactory from '../../factory/button/index';
import HeaderTitle from '../../components/common/Header/headerTitle';
import HeaderBackButton from '../../components/common/Header/headerBackButton';
import { createHabit } from '../../actions/habit';

var screenWidth = Dimensions.get('window').width;

class NewHabit extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <HeaderTitle title={'Crie um Hábito'} />,
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

    createHabit = () => {
        const { dispatch, navigation } = this.props;
        const { name, description, iconUrl } = this.state;
        const habit = { name, description, iconUrl };
        dispatch(createHabit(habit, navigation));
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Image
                        style={{
                            top: -90,
                            width: screenWidth * 0.5,
                            height: screenWidth * 0.5,
                        }}
                        source={require('../../../assets/img/conosco_logo_montanha.png')}
                    />
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
                        placeholder={'URL da Imagem do Hábito'}
                        autoCorrect={false}
                    />
                    {ButtonFactory.factoryMethod('create-habit', { ...this.props, createHabit: this.createHabit })}
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
        backgroundColor: '#AAD8DD',
    },

    button: {
        marginTop: 20,
    }
});

const mapStateToProps = ({ user }) => ({
    user,
});

export default connect(mapStateToProps)(NewHabit);

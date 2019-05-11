import React from 'react';
import Button from '../../components/common/button/index'

import { logIn } from '../../actions/user';

const fb = require('../../../assets/img/fb.png');
const mail = require('../../../assets/img/mail.png');

class ButtonFactory {
    static build(data, props) {
        switch (data) {
            case 'facebook':
                return <Button
                text={'Entrar com Facebook'}
                color={'#4267B2'}
                textColor={'#fff'}
                icon={fb}
                onPress={() => props.dispatch(logIn(props.navigation))} 
              />
            case 'email':
                return <Button
                text={'Entrar com e-mail'}
                color={'#6DBCD6'}
                textColor={'#fff'}
                icon={mail}
                onPress={() => props.navigation.navigate('Login')}
              />
            case 'register':
            return <Button
                text={'Cadastrar'}
                color={'#fff'}
                border
                borderColor={'#EFEFED'}
                textColor={'#79A39D'}
                icon={null}
                onPress={() => props.navigation.navigate('Register')}
              />
            default:
                return undefined;
        }
    }
}
export default (ButtonFactory);

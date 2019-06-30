import React from 'react';
import Button from '../../components/common/button/index'
import { StyleSheet } from 'react-native';

import { logIn } from '../../actions/user';

const fb = require('../../../assets/img/fb.png');
const mail = require('../../../assets/img/mail.png');

class ButtonFactory {
    static factoryMethod(data, props) {
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
            case 'login':
              return <Button
              styleProps={styles.buttonLogin}
              text={'Entrar'}
              color={'#6DBCD6'}
              textColor={'#fff'}
              icon={null}
              onPress={props.login}
            />
            case 'register-login':
                return <Button
                styleProps={styles.buttonRegister}
                text={'Cadastrar e entrar'}
                color={'#6DBCD6'}
                textColor={'#fff'}
                icon={null}
                onPress={props.register}
            />
            case 'create-group':
              return <Button
              styleProps={styles.buttonRegister}
              text={'Criar Grupo'}
              color={'#6DBCD6'}
              textColor={'#fff'}
              icon={null}
              onPress={props.createGroup}
            />
            default:
                return undefined;
        }
    }
}

const styles = StyleSheet.create({
  buttonLogin: {
    marginTop: 20,
  },
  buttonRegister: {
    marginTop: 20,
  }
});

export default (ButtonFactory);

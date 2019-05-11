import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

import { connect } from 'react-redux';

import ButtonFactory from '../../factory/button/index';
import SeparatorOr from '../../components/common/separator';

var screenWidth = Dimensions.get('window').width;

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/img/conosco_logo(sem_fundo).png')}
        />
        { ButtonFactory.build('facebook',this.props) }
        { ButtonFactory.build('email',this.props) }
        <SeparatorOr />
        { ButtonFactory.build('register',this.props) }
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
    backgroundColor: '#4D9BA3'
  },
  logo: {
    width: screenWidth * 0.6, 
    height: screenWidth * 0.6,
    margin: 40,
    overflow: 'visible'
  }
});

export default connect()(Home);

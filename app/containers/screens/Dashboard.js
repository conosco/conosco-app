import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { connect } from 'react-redux';

import Avatar from '../../components/common/avatar';
import { loadUserByEmail } from '../../actions/user/index';

class Dashboard extends React.Component {
  componentWillMount() {
    const email = this.props.navigation.getParam('email'); 
		const { dispatch } = this.props;
		dispatch(loadUserByEmail(email));
  }
  render() {
    // console.log("email = ", email);
    return (
      <View style={styles.container}>
        <Card style={styles.profileCard}>
          <CardItem>
            <Body>
              <Avatar
                size={100}
                onPress={() => {}}
                callback={uploaded => this.setState({ uploaded })}
                style={{color: '#4D9BA3'}}
              />
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#AAD8DD',
  },
  profileCard: {
    height: 130, 
    marginTop: 200,
    width: 350,
    borderRadius: 20,
    borderTopEndRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#4D9BA3'
  }
});

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Dashboard);

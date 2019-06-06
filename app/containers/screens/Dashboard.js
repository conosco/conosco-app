import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import Avatar from '../../components/common/avatar';

import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.profileCard}>
          <CardItem>
            <Body>
              <Avatar
                size={100}
                onPress={{}}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#AAD8DD'
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

export default connect()(Dashboard);

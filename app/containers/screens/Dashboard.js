import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { connect } from 'react-redux';

import Avatar from '../../components/common/avatar';

class Dashboard extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
        <Card style={styles.profileCard}>
          <CardItem>
            <Body>
              <Avatar
                size={90}
                style={{color: '#4D9BA3'}}
                uploaded
                uri={user.profilePic}
                progress={100}
                callback={() => {}}
              />
            </Body>
            <Text style={{alignSelf: 'flex-start', position: 'absolute', left: 110, top: 10, fontWeight: 'bold', fontSize: 18 }}>{user.name}</Text>
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
  user,
});

export default connect(mapStateToProps)(Dashboard);

import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { connect } from 'react-redux';
import { FloatingAction } from "react-native-floating-action";

import Avatar from '../../components/common/avatar';
import ProgressBar from '../../components/common/progressBar';

class Dashboard extends React.Component {
  logout() {
    const { navigation } = this.props;

    Alert.alert(
      'Já vai?',
      'Deseja mesmo sair?',
      [
        { text: 'Sim', onPress: () => navigation.navigate('Home') },
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }

  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
        <Card style={styles.profileCard}>
          <CardItem>
            <Body>
              <Avatar
                size={90}
                style={{ color: '#4D9BA3' }}
                uploaded
                uri={user.profilePic}
                progress={100}
                callback={() => { }}
              />
            </Body>
            <Text style={{ alignSelf: 'flex-start', position: 'absolute', left: 110, top: 10, fontWeight: 'bold', fontSize: 18 }}>{user.name}</Text>
            <View style={{ height: 66, justifyContent: "space-between" }}>
              <ProgressBar width={150} color={"#98E1DF"} backgroundColor={"#EADEE0"} progress={50} title="Descrição"></ProgressBar>
              <ProgressBar width={150} color={"#478FC8"} backgroundColor={"#EADEE0"} progress={80} title="Determinação"></ProgressBar>
            </View>
          </CardItem>
        </Card>
        <Card style={styles.areaCard}>
          <CardItem>
            <Body>
            </Body>
          </CardItem>
        </Card>
        <FloatingAction
          actions={actions}
          color='#50946F'
          onPressItem={name => {
            if (name === 'bt_logout') { this.logout() }
          }}
        />
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
    marginTop: 100,
    width: 350,
    borderRadius: 20,
    borderTopEndRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#4D9BA3'
  },
  areaCard: {
    height: 500,
    marginTop: 50,
    width: 350,
    borderRadius: 20,
    borderTopEndRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff'
  }
});

const actions = [
  {
    text: "Sair",
    icon: require("../../../assets/icons/logout.png"),
    name: "bt_logout",
    color: '#50946F',
    position: 1
  },
  {
    text: "Novo Hábito",
    icon: require("../../../assets/icons/new-post.png"),
    name: "bt_new_habit",
    color: '#50946F',
    position: 2
  },
  {
    text: "Meus Hábitos",
    icon: require("../../../assets/icons/my-habits.png"),
    name: "bt_my_habits",
    color: '#50946F',
    position: 3
  },
  {
    text: "Gerenciar Hábitos",
    icon: require("../../../assets/icons/manage.png"),
    name: "bt_manage_habits",
    color: '#50946F',
    position: 4
  },
  {
    text: "Grupos",
    icon: require("../../../assets/icons/groups.png"),
    name: "bt_groups",
    color: '#50946F',
    position: 5
  }
];

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Dashboard);

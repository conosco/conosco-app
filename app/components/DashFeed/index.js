import React from 'react';
import { ScrollView, FlatList, View, Text, Modal, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const keyExtractor = item => (item && item.id.toString()) || '';

class DashFeed extends React.Component {

  state = {
    modalVisible: false,
    name: '',
    description: ''
  };

  setModalVisible(visible, habit) {
    this.setState({ modalVisible: visible, name: habit.name, description: habit.description });
    this.renderModal(habit);
    console.log(this.state)
  }

  renderModal = habit => (
    <View style={{ width: '100%', alignItems: 'center' }}>
    <Modal
    animationType="slide"
    transparent={false}
    visible={this.state.modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
    }}
    style={{ height: 50 }}>
    <View style={{ marginTop: 22 }}>
      <View>
        <Text>{habit.name}</Text>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible, habit);
          }}>
          <Text>Fechar Modal</Text>
        </TouchableHighlight>
      </View>
    </View>
  </Modal>
  </View>
  );

  renderHabit = habit => (
    <View style={style.habit} key={habit}>
      <Text style={{ textAlign: 'center', paddingTop: 10 }} onPress={() => {
        this.setModalVisible(!this.state.modalVisible, habit)
      }}>{habit.name}</Text>
    </View>
  );

  renderGroup = ({ item }) => (
    <View>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text>{item.name}</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={style.group}>
          {Object.values(item.habits).map(habit => this.renderHabit(habit))}
        </View>
      </ScrollView>
    </View>
  );

  render() {
    const { data } = this.props;
    return (
      <View style={style.content}>
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={this.renderGroup}
        />
      </View>
    );
  }
}

DashFeed.propTypes = {
  data: PropTypes.array
};

DashFeed.defaultProps = {
  data: []
};

export default DashFeed;

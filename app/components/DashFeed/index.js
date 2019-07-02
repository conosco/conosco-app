import React from 'react';
import { ScrollView, FlatList, View, Text, Modal, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { openModal } from '../../actions/nav';
import { connect } from 'react-redux';

import style from './style';

const keyExtractor = item => (item && item.id.toString()) || '';

class DashFeed extends React.Component {

  setModalVisible(habit) {
    const { dispatch } = this.props;
    dispatch(openModal('Habits', { name: habit.name, description: habit.description  }));
  }

  renderHabit = habit => (
    <View style={style.habit} key={habit}>
      <Text style={{ textAlign: 'center', paddingTop: 10 }} onPress={() => {
        this.setModalVisible(habit)
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

export default connect()(DashFeed);

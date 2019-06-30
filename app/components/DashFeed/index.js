import React from 'react';
import { ScrollView, FlatList, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const keyExtractor = item => (item && item.id.toString()) || '';

class DashFeed extends React.Component {
  
  renderHabit = habit => (
    console.log ("habit = ", habit),
    <View style={style.habit} key={habit}>
      <Text>{habit.name}</Text>
    </View>
  );

  renderGroup = ({ item }) => (
    console.log("item = ", item),
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
          {console.log("item.habits = ", item.habits)}
          {/* {Object.keys(item.habits).map(function(key, index) {
            console.log("item.habits[key] = ", item.habits[key])})} */}
          {Object.values(item.habits).map(habit => this.renderHabit(habit))}
          {/* {item.habits.map(habit => this.renderHabit(habit))} */}
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

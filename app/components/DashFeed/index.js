import React from 'react';
import { ScrollView, FlatList, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const keyExtractor = item => (item && item.id.toString()) || '';

class DashFeed extends React.Component {
  
  renderHabit = habit => (
    <View style={style.habit} key={habit}>
      <Text>{habit}</Text>
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
          {item.habits.map(habit => this.renderHabit(habit))}
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

import React from 'react';
import {
  View,
  Animated,
  Easing,
} from 'react-native';

import style from './style';

class ProgressBar extends React.Component {

  constructor(props) {
    super(props);
    this.widthAnimation = new Animated.Value(0);
  }

  animateWidth() {
    const { width, progress } = this.props;

    const toValue = ((width * progress) / 100);

    Animated.timing(this.widthAnimation, {
      easing: Easing.linear,
      toValue: toValue > 0 ? toValue : 0,
      duration: 1000,
    }).start();
  }

  componentDidMount() {
    if (this.props.progress > 0) {
      this.animateWidth();
    }
  }

  render() {
    const { color, width, backgroundColor } = this.props;

    return (
      <View style={[{ width, backgroundColor }, style.bar]}>
        <Animated.View
          style={[
            style.dynamic,
            { backgroundColor: color, width: this.widthAnimation },
          ]}
        />
      </View>
    );
  }
}

export default ProgressBar;

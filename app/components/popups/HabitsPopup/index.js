import React from 'react';
import {
	View,
	TouchableOpacity,
	Text
} from 'react-native';
import PropTypes from 'prop-types';

import Popup from '../../common/Popup';
import style from './style';

const HabitsPopup = ({ name, description, onOkPress }) => (
	<Popup>
		<View style={style.content}>
			<Text style={style.body}>{name}</Text>
			<Text style={style.description}>{description}</Text>
			<TouchableOpacity onPress={onOkPress} style={style.button}>
				<Text style={style.textButton}>{'Ok'}</Text>
			</TouchableOpacity>
		</View>
	</Popup>
);

HabitsPopup.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onOkPress: PropTypes.func.isRequired,
};

export default HabitsPopup;

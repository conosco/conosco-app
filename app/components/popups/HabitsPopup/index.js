import React from 'react';
import {
	View,
	TouchableOpacity,
	Text
} from 'react-native';
import PropTypes from 'prop-types';

import Popup from '../../common/Popup';
import style from './style';

const HabitsPopup = ({ title, onOkPress, funcao }) => (
	<Popup>
		<View style={style.content}>
			<Text style={style.body}>{title}</Text>
			<TouchableOpacity onPress={onOkPress} style={style.button}>
				<Text style={style.textButton}>{'Ok'}</Text>
			</TouchableOpacity>
		</View>
	</Popup>
);

HabitsPopup.propTypes = {
  title: PropTypes.string.isRequired,
  onOkPress: PropTypes.func.isRequired,
  funcao: PropTypes.func.isRequired
};

export default HabitsPopup;
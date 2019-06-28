import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const Popup = ({ children }) => (
	<View style={style.overlay}>
		<View style={style.popup}>
			{children}
		</View>
	</View>
);

Popup.propTypes = {
	children: PropTypes.node
};

Popup.defaultProps = {
	children: null
};

export default Popup;

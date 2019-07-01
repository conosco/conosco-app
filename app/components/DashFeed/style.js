import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({

	content: {
		width: width - 32,
		backgroundColor: '#fff',
		borderRadius: 10,
		margin: 20
	},

	group: {
		flexDirection: 'row',
	},

	habit: {
		height: 60,
		width: 60,
		borderRadius: 10,
		backgroundColor: '#4D9BA3',
		margin: 8,
	}

});

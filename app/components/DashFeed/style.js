import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({

	content: {
		width: width - 32,
		backgroundColor: '#fff',
		borderRadius: 10
	},

	group: {
		flexDirection: 'row',
	},

	habit: {
		height: 50,
		width: 50,
		borderRadius: 10,
		backgroundColor: 'red',
		margin: 8
	}

});

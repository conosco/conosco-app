import { StyleSheet } from 'react-native';

export default StyleSheet.create({

	content: {
		padding: 16,
		justifyContent: 'space-between'
	},

	body: {
		fontSize: 16,
		lineHeight: 24,
		fontWeight: 'bold',
		color: 'red'
	},

	description: {
		fontSize: 14,
		lineHeight: 20,
		color: 'black',
		marginTop: 10
	},

	button: {
		marginTop: 16,
		borderRadius: 18,
		width: 96,
		height: 36,
		backgroundColor: '#00CDB4',
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'center'
	},

	textButton: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#FFFFFF'
	}
});

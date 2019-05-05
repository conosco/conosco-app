import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  content: {
    borderRadius: 10,
    width: '80%',
    marginHorizontal: 32,
    padding: 8,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  image: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 12,
  },

  text: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },

  shadow: {
    shadowOpacity: 0.3,
    shadowColor: '#2a2a2b',
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  }

});

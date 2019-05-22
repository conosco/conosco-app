import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  shadow: {
    shadowOpacity: 0.3,
    shadowColor: '#2a2a2b',
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },

  bg: {
    backgroundColor: '#D3D3D3',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  progress: {
    backgroundColor: '#6DBCD6',
    position: 'absolute',
    bottom: 0,
  },

  image: {
    height: 24,
    width: 24,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 5,
  },

});

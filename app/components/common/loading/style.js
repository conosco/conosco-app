import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({

  container: {
    backgroundColor: 'rgba(100, 100, 100, 0.3)',
    marginTop: height/2 - 80,
    position: 'absolute',
    height,
    width,
    justifyContent: 'center',
    zIndex: 5,
  },

  centered: {
    alignItems: 'center',
  },

  square: {
    padding: 16, 
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.5)'
  }

});

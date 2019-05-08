import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({

  container: {
    backgroundColor: 'transparent',
    marginTop: height/2 - 80,
    position: 'absolute',
    backgroundColor: 'transparent',
    height,
    width,
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

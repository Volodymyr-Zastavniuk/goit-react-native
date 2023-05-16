import { Dimensions, StyleSheet } from 'react-native';

export const AuthBackgroundStyles = StyleSheet.create({
  bgImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover',
    // justifyContent: 'flex-end',
  },
});

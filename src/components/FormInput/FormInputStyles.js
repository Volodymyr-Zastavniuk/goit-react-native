import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export const FormInputStyles = StyleSheet.create({
  input: {
    height: 50,
    paddingRight: 16,
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'RobotoNormal',
    fontSize: 16,
    color: Colors.mainText,
    borderColor: Colors.inputBorderColor,
    backgroundColor: Colors.inputBgColor,
  },
  passContainer: {
    position: 'relative',
  },
  showPassBtn: {
    position: 'absolute',
    top: 15,
    right: 16,
  },
});

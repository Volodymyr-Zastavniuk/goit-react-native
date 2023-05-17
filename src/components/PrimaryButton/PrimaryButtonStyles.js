import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export const PrimaryButtonStyles = StyleSheet.create({
  primaryButton: {
    height: 50,
    marginTop: 27,
    paddingRight: 16,
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',

    borderColor: Colors.primaryButtonBg,
    backgroundColor: Colors.primaryButtonBg,
  },
  buttonText: {
    fontFamily: 'RobotoMedium',
    fontSize: 16,
    color: Colors.white,
  },
});

import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export const AuthFormStyles = StyleSheet.create({
  formView: {
    flexGrow: 1,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
  },

  form: {
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: Colors.white,
    gap: 16,
  },
  formTitle: {
    marginBottom: 17,
    alignSelf: 'center',
    fontFamily: 'RobotoBold',
    fontSize: 30,
    color: Colors.mainText,
  },
});

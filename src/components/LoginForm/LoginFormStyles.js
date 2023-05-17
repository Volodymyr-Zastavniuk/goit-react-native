import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export const LoginFormStyles = StyleSheet.create({
  avatarContainer: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: -60,
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: Colors.inputBgColor,
  },
  addAvatarBtn: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: -12,
    bottom: 14,
  },
  avatarImage: { width: 120, height: 120 },
});

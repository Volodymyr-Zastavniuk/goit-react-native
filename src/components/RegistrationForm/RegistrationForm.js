import {
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { FormInput } from '../FormInput/FormInput';
import { AuthLinkText } from '../AuthLinkText/AuthLinkText';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { RegistrationFormStyles } from './RegistrationFormStyles';
import AddAvatarSvg from '../../../assets/icons/AddAvatarSvg';
import { AuthFormLayout } from '../AuthFormLayout/AuthFormLayout';

export const RegistrationForm = () => {
  const { avatarContainer, addAvatarBtn, avatarImage } = RegistrationFormStyles;

  const handleKeyboardClose = () => {
    Keyboard.dismiss();
  };

  return (
    <AuthFormLayout title="Registration">
      <View style={avatarContainer}>
        <Image
          style={avatarImage}
          source={require('../../../assets/images/test-avatar.jpg')}
        />
        <TouchableOpacity activeOpacity={0.7} style={addAvatarBtn}>
          <AddAvatarSvg />
        </TouchableOpacity>
      </View>
      <FormInput placeholder="Name" />
      <FormInput placeholder="Email" />
      <FormInput placeholder="Password" password />

      <PrimaryButton
        title="Register"
        handleKeyboardClose={handleKeyboardClose}
      />
      <AuthLinkText>Already have an account? Login</AuthLinkText>
    </AuthFormLayout>
  );
};

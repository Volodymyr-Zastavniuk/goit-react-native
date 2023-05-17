import { Image, Keyboard, TouchableOpacity, View } from 'react-native';
import { FormInput } from '../FormInput/FormInput';
import { AuthLinkText } from '../AuthLinkText/AuthLinkText';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { RegistrationFormStyles } from './RegistrationFormStyles';
import AddAvatarSvg from '../../../assets/icons/AddAvatarSvg';
import { AuthFormLayout } from '../AuthFormLayout/AuthFormLayout';
import { useState } from 'react';

const initialRegState = {
  name: '',
  email: '',
  password: '',
};

export const RegistrationForm = () => {
  const [regState, setRegState] = useState(initialRegState);
  const { name, email, password } = regState;
  const { avatarContainer, addAvatarBtn, avatarImage } = RegistrationFormStyles;

  const handleInputChange = (value, name) => {
    setRegState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Submit Reg State---> ', regState);
    setRegState(initialRegState);
    Keyboard.dismiss();
  };

  return (
    <AuthFormLayout title="Sign up">
      <View style={avatarContainer}>
        <Image
          style={avatarImage}
          source={require('../../../assets/images/test-avatar.jpg')}
        />
        <TouchableOpacity activeOpacity={0.7} style={addAvatarBtn}>
          <AddAvatarSvg />
        </TouchableOpacity>
      </View>
      <FormInput
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <FormInput
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      <FormInput
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleInputChange}
      />

      <PrimaryButton title="Sign up" handleKeyboardClose={handleSubmit} />
      <AuthLinkText>Already have an account? Login</AuthLinkText>
    </AuthFormLayout>
  );
};

import { Keyboard } from 'react-native';
import { FormInput } from '../FormInput/FormInput';
import { AuthLinkText } from '../AuthLinkText/AuthLinkText';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { AuthFormLayout } from '../AuthFormLayout/AuthFormLayout';
import { useState } from 'react';

const initialLoginState = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [loginState, setLoginState] = useState(initialLoginState);
  const { email, password } = loginState;

  const handleInputChange = (value, name) => {
    setLoginState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Submit Login State---> ', loginState);
    setLoginState(initialLoginState);
    Keyboard.dismiss();
  };

  return (
    <AuthFormLayout title="Login" login={true}>
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

      <PrimaryButton title="Login" handleKeyboardClose={handleSubmit} />
      <AuthLinkText>Don't have an account? Sign up</AuthLinkText>
    </AuthFormLayout>
  );
};

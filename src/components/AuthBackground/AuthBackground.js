import { ImageBackground } from 'react-native';
import { AuthBackgroundStyles } from './AuthBackgroundStyles';

export const AuthBackground = ({ children }) => {
  const { bgImage } = AuthBackgroundStyles;
  return (
    <ImageBackground
      source={require('../../../assets/images/bgPhoto.png')}
      style={bgImage}
    >
      {children}
    </ImageBackground>
  );
};

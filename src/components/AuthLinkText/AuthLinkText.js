import { Text } from 'react-native';
import { AuthLinkTextStyles } from './AuthLinkTextStyles';

export const AuthLinkText = ({ children }) => {
  const { authLinkText } = AuthLinkTextStyles;
  return <Text style={authLinkText}>{children}</Text>;
};

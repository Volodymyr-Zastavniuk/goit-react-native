import { View } from 'react-native';
import { MainContainerStyles } from './MainContainerStyles';

export const MainContainer = ({ children }) => {
  const { container } = MainContainerStyles;
  return <View style={container}>{children}</View>;
};

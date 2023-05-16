import { Text, TouchableOpacity } from 'react-native';
import { PrimaryButtonStyles } from './PrimaryButtonStyles';

export const PrimaryButton = ({ title, handleKeyboardClose }) => {
  const { primaryButton, buttonText } = PrimaryButtonStyles;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={primaryButton}
      onPress={handleKeyboardClose}
    >
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

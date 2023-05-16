import { FormInputStyles } from './FormInputStyles';
import { Colors } from '../../constants/Colors';
import { TextInput, View } from 'react-native';
import { AuthLinkText } from '../AuthLinkText/AuthLinkText';

export const FormInput = ({ placeholder, password }) => {
  const { input, showPassBtn, passContainer } = FormInputStyles;
  return password ? (
    <View style={passContainer}>
      <TextInput
        style={input}
        placeholder={placeholder}
        placeholderTextColor={Colors.inputPlaceholderColor}
        secureTextEntry={true}
      />
      <View style={showPassBtn}>
        <AuthLinkText>Show</AuthLinkText>
      </View>
    </View>
  ) : (
    <TextInput
      style={input}
      placeholder={placeholder}
      placeholderTextColor={Colors.inputPlaceholderColor}
    />
  );
};
// onFocus={() => setIsKeyboardOpen(true)}

import { FormInputStyles } from './FormInputStyles';
import { Colors } from '../../constants/Colors';
import { TextInput, View } from 'react-native';
import { AuthLinkText } from '../AuthLinkText/AuthLinkText';

export const FormInput = ({ placeholder, name, value, onChange }) => {
  const { input, showPassBtn, passContainer } = FormInputStyles;
  return name === 'password' ? (
    <View style={passContainer}>
      <TextInput
        name={name}
        value={value}
        onChangeText={value => onChange(value, (name = name))}
        style={input}
        placeholder={placeholder}
        placeholderTextColor={Colors.inputPlaceholderColor}
        secureTextEntry={true}
        maxLength={20}
      />
      <View style={showPassBtn}>
        <AuthLinkText>Show</AuthLinkText>
      </View>
    </View>
  ) : (
    <TextInput
      name={name}
      value={value}
      onChangeText={value => onChange(value, (name = name))}
      style={input}
      placeholder={placeholder}
      placeholderTextColor={Colors.inputPlaceholderColor}
      maxLength={35}
      inputMode={name === 'email' ? 'email' : 'text'}
    />
  );
};

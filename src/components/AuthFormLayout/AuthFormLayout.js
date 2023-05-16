import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text, View } from 'react-native';
import { AuthFormStyles } from './AuthFormLayoutStyles';
import { useState } from 'react';

export const AuthFormLayout = ({ title, children }) => {
  const [isKeyboardOpen, setisKeyboardOpen] = useState(false);
  const { formView, form, formTitle } = AuthFormStyles;

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={formView}
      keyboardShouldPersistTaps="handled"
      onKeyboardDidShow={() => {
        setisKeyboardOpen(true);
      }}
      onKeyboardDidHide={() => {
        setisKeyboardOpen(false);
      }}
    >
      <View style={{ ...form, paddingBottom: isKeyboardOpen ? 110 : 78 }}>
        <Text style={formTitle}>{title}</Text>
        {children}
      </View>
    </KeyboardAwareScrollView>
  );
};

// height: isKeyboardOpen ? '100%' : Dimensions.get('window').height,
// <View style={{ ...form, paddingBottom: isKeyboardOpen ? 78 : 78 }}></View>

//  contentContainerStyle={{
//     ...formView,
//     justifyContent: isKeyboardOpen ? 'center' : 'flex-end',
//   }}

// paddingBottom: Keyboard.isVisible() ? -32 - keyboardHeight : 0,

// onKeyboardDidShow={e => {
//   console.log(Keyboard.isVisible());
//   // console.log(Keyboard.metrics().height);
//   setKeyboardHeight(Keyboard.metrics().height);
// }}
// onKeyboardDidHide={() => {
//   console.log(Keyboard.isVisible());
//   setKeyboardHeight(0);
// }}
// enableOnAndroid={true}
// enableAutomaticScroll={Platform.OS === 'ios'}
// extraHeight={32}
// extraScrollHeight={32}

// "windowSoftInputMode": "adjustPan",   -- do not work in app.json
// "softwareKeyboardLayoutMode": "pan"   -- form jump with bg image

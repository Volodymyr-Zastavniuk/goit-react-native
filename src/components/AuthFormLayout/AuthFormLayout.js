import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text, View } from 'react-native';
import { AuthFormStyles } from './AuthFormLayoutStyles';
import { useState } from 'react';

export const AuthFormLayout = ({ title, children, login = false }) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const { formView, form, formTitle } = AuthFormStyles;
  const topPadding = login ? 32 : 92;
  const bottomPadding = login ? 144 : 78;

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={formView}
      keyboardShouldPersistTaps="handled"
      onKeyboardDidShow={() => {
        setIsKeyboardOpen(true);
      }}
      onKeyboardDidHide={() => {
        setIsKeyboardOpen(false);
      }}
    >
      <View
        style={{
          ...form,
          paddingTop: topPadding,
          paddingBottom: isKeyboardOpen ? bottomPadding + 32 : bottomPadding,
        }}
      >
        <Text style={formTitle}>{title}</Text>
        {children}
      </View>
    </KeyboardAwareScrollView>
  );
};

// paddingBottom: Keyboard.isVisible() ? 32 - keyboardHeight : 0,

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

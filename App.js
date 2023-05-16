// import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

import { Colors } from './src/constants/Colors';
import { RegistrationScreen } from './src/Screens/RegistrationScreen/RegistrationScreen';
// import { LoginScreen } from './src/Screens/LoginScreen/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoNormal: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </View>
  );
}
// <StatusBar style="auto" />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

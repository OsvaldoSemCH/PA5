import * as SplashScreen from 'expo-splash-screen';
import { Text } from 'react-native';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
    </Stack>
  );
}

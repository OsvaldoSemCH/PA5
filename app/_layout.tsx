import * as SplashScreen from 'expo-splash-screen';
import { Text } from 'react-native';
import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Header } from '@/components/header';

SplashScreen.preventAutoHideAsync();

export default function RootLayout()
{
  const [loaded, error] = useFonts({DefFont: require("../assets/fonts/SpaceMono-Regular.ttf")})

  useEffect(() =>
  {
    if(loaded || error)
    {
      SplashScreen.hideAsync();
    }
  }, []);

  return (
    <>
    <Header image={require("@/assets/images/react-logo.png")}/>
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
    </Stack>
    </>
  );
}

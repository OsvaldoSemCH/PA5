import { Header } from '@/components/header';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function TabLayout()
{
  return (
    <>
      <Tabs>
        <Tabs.Screen name="index" options=
        {{
          headerShown: false,
          tabBarIcon: () => 
          (<>
            <Text>♻</Text>
          </>),
          tabBarLabel: () => (null)
        }}
        ></Tabs.Screen>
        <Tabs.Screen name="new" options=
        {{
          headerShown: false,
          tabBarIcon: () => 
          (<>
            <Text>☣</Text>
          </>),
          tabBarLabel: () => (null)
        }}
        ></Tabs.Screen>
      </Tabs>
    </>
  );
}

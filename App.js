import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './components/Screens/Screen1';
import Screen2 from './components/Screens/Screen2';
import Screen3 from './components/Screens/Screen3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />

        {/* Thêm các màn hình khác ở đây */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

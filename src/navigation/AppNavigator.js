import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoard from '../screens/OnBoard';
import { TapGestureHandler } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoard"
        screenOptions={{
          headerShown: TapGestureHandler,
        }}>
       
        <Stack.Screen
          name="OnBoard"
          options={{ headerShown: false }}
          component={OnBoard}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;

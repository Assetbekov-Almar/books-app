import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withTheme } from 'styled-components';

import SearchScreen from '../screens/SearchScreen';
import ResultScreen from '../screens/ResultScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import Tabs from "./tabs";
import { BookDetail } from "../screens";

enableScreens();

const Stack = createStackNavigator();

function Navigation({ theme }) {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: theme.colors.primary,
          headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: theme.colors.bg,
            elevation: 0,
          },
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        <Stack.Screen name="qwe" component={BookDetail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withTheme(Navigation);

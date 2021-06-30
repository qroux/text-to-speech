/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import * as React from 'react';

// SCREENS
import ProgressScreen from '../screens/ProgressScreen';
import TextScreen from '../screens/TextScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {
  BottomTabParamList,
  ProgressParamList,
  TextParamList,
  SettingsParamList,
} from '../types';

// STYLING
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons';

const BottomTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Progress'
      tabBarPosition='bottom'
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showIcon: true,
        showLabel: true,
      }}>
      <BottomTab.Screen
        name='Progress'
        component={ProgressNavigator}
        options={{
          tabBarLabel: 'Progress',
          tabBarIcon: ({ color }) => (
            <AntDesignTabBarIcon name='barschart' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Text'
        component={TextNavigator}
        options={{
          tabBarLabel: 'Practice',
          tabBarIcon: ({ color }) => (
            <CommunityTabBarIcon name='text-to-speech' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Settings'
        component={SettingsNavigator}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <IoniconsTabBarIcon name='ios-settings-outline' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function IoniconsTabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}

function CommunityTabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={24} style={{ marginBottom: -3 }} {...props} />
  );
}

function MaterialTabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={24} style={{ marginBottom: -3 }} {...props} />;
}

function AntDesignTabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>['name'];
  color: string;
}) {
  return <AntDesign size={24} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ProgressStack = createStackNavigator<ProgressParamList>();

function ProgressNavigator() {
  return (
    <ProgressStack.Navigator>
      <ProgressStack.Screen
        name='ProgressScreen'
        component={ProgressScreen}
        options={{ headerTitle: 'Dashboard' }}
      />
    </ProgressStack.Navigator>
  );
}

const TextStack = createStackNavigator<TextParamList>();

function TextNavigator() {
  return (
    <TextStack.Navigator>
      <TextStack.Screen
        name='TextScreen'
        component={TextScreen}
        options={{ headerTitle: 'Practice' }}
      />
    </TextStack.Navigator>
  );
}

const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name='Settings'
        component={SettingsScreen}
        options={{ headerTitle: 'Settings' }}
      />
    </SettingsStack.Navigator>
  );
}

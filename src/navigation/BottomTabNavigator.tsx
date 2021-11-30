/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

// SCREENS
import DashboardScreen from "../screens/DashboardScreen";
import PracticeScreen from "../screens/PracticeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {
  BottomTabParamList,
  PracticeParamList,
  SettingsParamList,
  DashboardParamList,
} from "../../types";

// STYLING
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

const BottomTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      tabBarPosition="bottom"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showIcon: true,
        showLabel: false,
        indicatorStyle: { backgroundColor: Colors.light.primary },
      }}
    >
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardNavigator}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <AntDesignTabBarIcon name="barschart" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Practice"
        component={PracticeNavigator}
        options={{
          tabBarLabel: "Practice",
          tabBarIcon: ({ color }) => (
            <CommunityTabBarIcon name="text-to-speech" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <IoniconsTabBarIcon name="ios-settings-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function IoniconsTabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}

function CommunityTabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={24} style={{ marginBottom: -3 }} {...props} />
  );
}

function AntDesignTabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
}) {
  return <AntDesign size={24} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const DashboardStack = createStackNavigator<DashboardParamList>();

function DashboardNavigator() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{ headerTitle: "Dashboard" }}
      />
    </DashboardStack.Navigator>
  );
}

const PracticeStack = createStackNavigator<PracticeParamList>();

function PracticeNavigator() {
  return (
    <PracticeStack.Navigator>
      <PracticeStack.Screen
        name="PracticeScreen"
        component={PracticeScreen}
        options={{
          headerTitle: "Practice",
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert("This is a button!")}
          //     title=" + "
          //     type="solid"
          //     buttonStyle={{
          //       marginRight: 15,
          //     }}
          //   />
          // ),
        }}
      />
    </PracticeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: "Settings" }}
      />
    </SettingsStack.Navigator>
  );
}

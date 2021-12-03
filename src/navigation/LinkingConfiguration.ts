/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Dashboard: {
            screens: {
              DashboardScreen: "dashboard",
            },
          },
          Practice: {
            screens: {
              PracticeScreen: "practice",
            },
          },
          Settings: {
            screens: {
              SettingsScreen: "settings",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};

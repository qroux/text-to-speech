import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

// CONTEXT
import { Provider as AppProvider } from "./src/context/AppContext";

// internationalization
import * as Localization from "expo-localization";
import i18n from "i18n-js";

i18n.translations = {
  en: {
    dashboard: {
      title: "Overall Progress",
      items: {
        clicks: "Clicks",
        vocabulary: {
          label: "Vocabulary",
          unit: "words",
        },
        goal: {
          label: "Goal",
          unit: "words",
        },
      },
      vocabularySection: "Vocabulary",
    },
    settings: {
      title: "test title",
      content: "test content",
    },
  },
  fr: {
    dashboard: {
      title: "Progression",
      items: {
        clicks: "Clicks",
        vocabulary: {
          label: "Vocabulaire",
          unit: "mots",
        },
        goal: {
          label: "Objectif",
          unit: "mots",
        },
      },
      vocabularySection: "Vocabulaire",
    },
    settings: {
      title: "test title",
      content: "test content",
    },
  },
};

// i18n.locale = "FR";
i18n.fallbacks = true;

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </AppProvider>
    );
  }
}

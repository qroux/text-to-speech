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
import i18n from "i18n-js";

i18n.translations = {
  en: {
    dashboard: {
      screenTitle: "Dashboard",
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
      cta: "Start Practicing",
    },
    practice: {
      screenTitle: "Practice",
      instructions: {
        import: {
          span: "Import",
          text: "an image/photo containing some text content",
        },
        process: {
          span: "Process",
          text: "the image to extract its text content",
        },
        practice: {
          span: "Practice",
          text: "your prononciation by clicking on the desired word",
        },
      },
    },
    settings: {
      screenTitle: "App Settings",
      language: "App Language",
      synth: {
        title: "Vocal Synth",
        button: "Change accent",
      },
      storage: {
        title: "Storage",
        button: "App Memory Reset",
      },
    },
  },
  fr: {
    dashboard: {
      screenTitle: "Tableau De Bord",
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
      cta: "Commencer !",
    },
    practice: {
      screenTitle: "S'entrainer",
      instructions: {
        import: {
          span: "Importer",
          text: "une image/photo contenant du text en anglais",
        },
        process: {
          span: "Extraire",
          text: "le contenu textuel de l'image selectionnée",
        },
        practice: {
          span: "Entrainer",
          text: "vous en cliquant sur les mots inconnus ou dont la prononciation vous échappe",
        },
      },
    },
    settings: {
      screenTitle: "Pramètres de l'Application",
      language: "Langue de l'interface",
      synth: {
        title: "Synthèse Vocale",
        button: "Changer l'accent",
      },
      storage: {
        title: "Mémoire De l'App",
        button: "Remise à Zero",
      },
    },
  },
};

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

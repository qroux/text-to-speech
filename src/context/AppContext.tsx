import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

export enum Actions {
  toggleLang = "TOGGLELANG",
  error = "ERROR",
  incrementWordCount = "INCREMENT_WORD_COUNT",
  populateWordContext = "POPULATE_WORD_CONTEXT",
  resetWordContext = "RESET_WORD_CONTEXT",
}

interface Action {
  type: Actions;
  payload?: { [key: string]: any };
}

export type WordsObject = {
  [key: string]: number;
};

// REDUCER
const AppReducer = (state: { [key: string]: any }, action: Action) => {
  switch (action.type) {
    case Actions.incrementWordCount:
      const count = state.words[action.payload?.content]
        ? (state.words[action.payload?.content] + 1).toString()
        : "1";

      const word = [action.payload?.content, count];
      AsyncStorage.setItem(word[0], word[1]);
      return {
        ...state,
        keys: [...state.keys, word[0]],
        words: {
          ...state.words,
          [action?.payload?.content]: state.words[action.payload?.content]
            ? state.words[action.payload?.content] + 1
            : 1,
        },
      };
    case Actions.populateWordContext:
      return {
        ...state,
        words: action.payload?.words,
        keys: action.payload?.keys,
      };
    case Actions.resetWordContext:
      return {
        ...state,
        words: {},
        keys: [],
      };
    case Actions.toggleLang:
      return { ...state, lang: action.payload?.lang, error: null };
    case Actions.error:
      return { ...state, error: "something went wrong" };
    default:
      return state;
  }
};

// ACTIONS
const fetchLang = (dispatch: (action: Action) => void) => async () => {
  // MUST implement asyncstorage data key to save preference before using it
  const lang = "fr" || Localization.locale;
  try {
    dispatch({
      type: Actions.toggleLang,
    });
  } catch (err) {
    dispatch({ type: Actions.error });
  }
};

const toggleLang =
  (dispatch: (action: Action) => void) => async (lang: string) => {
    i18n.locale = lang;
    try {
      dispatch({
        type: Actions.toggleLang,
        payload: { lang },
      });
    } catch (err) {
      dispatch({ type: Actions.error });
    }
  };

const incrementWordCount =
  (dispatch: (action: Action) => void) => async (word: string) => {
    try {
      dispatch({
        type: Actions.incrementWordCount,
        payload: { content: word },
      });
    } catch (err) {
      dispatch({ type: Actions.error });
    }
  };

const populateWordContext =
  (dispatch: (action: Action) => void) =>
  async (words: WordsObject, keys: string[]) => {
    try {
      dispatch({
        type: Actions.populateWordContext,
        payload: { words, keys },
      });
    } catch (err) {
      dispatch({ type: Actions.error });
    }
  };

const resetWordContext = (dispatch: (action: Action) => void) => () => {
  try {
    dispatch({
      type: Actions.resetWordContext,
    });
  } catch (err) {
    dispatch({ type: Actions.error });
  }
};

export const { Provider, Context } = createDataContext({
  reducer: AppReducer,
  actions: {
    toggleLang,
    incrementWordCount,
    populateWordContext,
    resetWordContext,
  },
  initialState: {
    lang: "en",
    words: {},
  },
});

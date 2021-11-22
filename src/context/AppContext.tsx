import createDataContext from "./createDataContext";

export enum Actions {
  toggleLang = "TOGGLELANG",
  error = "ERROR",
  incrementWordCount = "INCREMENT_WORD_COUNT",
}

interface Action {
  type: Actions;
  payload?: { [key: string]: any };
}

// REDUCER
const AppReducer = (state: { [key: string]: any }, action: Action) => {
  switch (action.type) {
    case Actions.incrementWordCount:
      return {
        ...state,
        words: {
          ...state.words,
          [action?.payload?.content]: state.words[action.payload?.content]
            ? state.words[action.payload?.content] + 1
            : 1,
        },
      };
    case Actions.toggleLang:
      return { ...state, lang: state.lang === "fr" ? "en" : "fr", error: null };
    case Actions.error:
      return { ...state, error: "something went wrong" };
    default:
      return state;
  }
};

// ACTIONS
const toggleLang = (dispatch: (action: Action) => void) => async () => {
  try {
    dispatch({
      type: Actions.toggleLang,
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

export const { Provider, Context } = createDataContext({
  reducer: AppReducer,
  actions: {
    toggleLang,
    incrementWordCount,
  },
  initialState: {
    lang: "fr",
    words: {},
  },
});

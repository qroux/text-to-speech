import { createDataContext } from "./createDataContext";

export enum Actions {
  random = "RANDOM",
  error = "ERROR",
}

interface Action {
  type: Actions;
  payload?: { [key: string]: any };
}

// REDUCER
const dashboardRedcuer = (state: { [key: string]: any }, action: Action) => {
  switch (action.type) {
    case "ERROR":
      return state;
    default:
      return state;
  }
};

// ACTIONS

// EXPORTS
export const { Context, Provider } = createDataContext({
  reducer: dashboardRedcuer,
  actions: [],
  initialState: {
    lang: "truc",
  },
});

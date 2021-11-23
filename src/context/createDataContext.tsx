import React, { createContext, ReactNode, useReducer } from "react";

interface AppStates {
  [key: string]: any;
}

interface Actions {
  [key: string]: (param?: any) => void;
}

interface CreateContext {
  reducer: any;
  actions: any;
  initialState: AppStates;
}

type AppContext = {
  state: AppStates;
  actions: Actions;
};

export default ({ reducer, actions, initialState }: CreateContext) => {
  const Context = createContext({} as AppContext);

  const Provider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions: Actions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, actions: boundActions } as AppContext}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

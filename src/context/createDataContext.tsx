import React, { createContext, ReactNode, useReducer, useState } from "react";

interface AppStates {
  [key: string]: any;
}

interface Actions {
  [key: string]: () => void;
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

export const createDataContext = ({
  reducer,
  actions,
  initialState,
}: CreateContext) => {
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

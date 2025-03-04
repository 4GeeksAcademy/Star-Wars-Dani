import React, { createContext, useContext, useReducer } from 'react';
import storeReducer from '../storeReducer'; 

const initialStore = {
  people: [],
  planets: [],
  starships: [],
  vehicles: [],
};

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {

  const [state, dispatch] = useReducer(storeReducer, initialStore);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

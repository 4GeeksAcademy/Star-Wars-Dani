import React, { createContext, useState } from "react";


export const Context = createContext();


const AppContextProvider = ({ children }) => {
  const [store, setStore] = useState({
    characters: [],
    planets: [],
    vehicles: []
  });

  return (
    <Context.Provider value={{ store, setStore }}>
      {children}
    </Context.Provider>
  );
};

export default AppContextProvider;

import React, { createContext, useContext, useReducer } from 'react';
import { SWAPI_URL } from './Constants';  // Si lo necesitas
import storeReducer from './storeReducer';  // Ajusta según tu archivo de reducer

// Estado inicial de la tienda
const initialStore = {
  people: [],
  planets: [],
  starships: [],
  vehicles: [],
};

// Crear el contexto
const StoreContext = createContext();

// StoreProvider para envolver la aplicación
export const StoreProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(storeReducer, initialStore);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};


export const useStore = () => useContext(StoreContext);


export const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      starships: [],
      vehicles: [],
    },
    actions: {
      getDa: async (type) => {
        try {
          if (!["people", "planets", "starships", "vehicles"].includes(type)) {
            throw new Error("Tipo de dato no válido.");
          }

          const response = await fetch(`${SWAPI_URL}/${type}`);
          const data = await response.json();

          setStore({ [type]: data.results });
        } catch (error) {
          console.error("Error al descargar la información", error);
        }
      },
    },
  };
};

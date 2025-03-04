import { SWAPI_URL } from "./Constants";

const getState = ({ getStore, getActions, setStore }) => {
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

export default getState;

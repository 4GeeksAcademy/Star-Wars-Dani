import React, { createContext, useState, useEffect } from "react";


export const Context = createContext();


const AppContextProvider = ({ children }) => {
    const [store, setStore] = useState({}); 

    const getData = async (dataType) => {
        try {
            const response = await fetch(`https://swapi.dev/api/${dataType}/`);
            const data = await response.json();
            setStore((prevStore) => ({ ...prevStore, [dataType]: data.results }));
        } catch (error) {
            console.error("Error al obtener datos de SWAPI:", error);
        }
    };

    return (
        <Context.Provider value={{ getData, store }}>
            {children}
        </Context.Provider>
    );
};

export default AppContextProvider;

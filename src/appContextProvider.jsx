import React, { createContext, useState, useEffect } from "react";


export const Context = createContext();

    

const AppContextProvider = ({ children }) => {
    const [dataType, setDataType] = useState("people");
    const [store, setStore] = useState({}); 

    const getData = async (dataType) => {
        try {
            console.log(`Llamando a: https://swapi.dev/api/${dataType}/`);
            const response = await fetch(`https://swapi.dev/api/${dataType}/`);
            const data = await response.json();
            console.log("Datos recibidos:", data);
            setStore((prevStore) => ({ ...prevStore, [dataType]: data.results }));
        } catch (error) {
            console.error("Error al obtener datos de SWAPI:", error);
        }

        
    };
    return (
        <Context.Provider value={{ getData, store, dataType, setDataType }}>
            {children}
        </Context.Provider>
    );

    
};

export default AppContextProvider;

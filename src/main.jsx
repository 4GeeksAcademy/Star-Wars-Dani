import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import AppContextProvider from "./appContextProvider";
import { router } from "./routes";
import { StoreProvider } from './hooks/useGlobalReducer';



const Main = () => {
    return (
        <React.StrictMode>
            <AppContextProvider> {/* ESTO ES MI CONTEXTO */}
                <StoreProvider>
                    {/* Set up routing for the application */}
                    <RouterProvider router={router}>
                    </RouterProvider>
                </StoreProvider>
            </AppContextProvider>
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)

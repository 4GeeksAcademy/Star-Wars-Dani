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
            <router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/todo/:theId" component={Single} />
                </Switch>
            </router>
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)

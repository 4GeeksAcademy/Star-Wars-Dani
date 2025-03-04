import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import { StoreProvider } from "./store";  
import AppContextProvider from "./appContextProvider";
import Home from "./pages/Home";
import { Single } from "./pages/Single";


const Main = () => {
  return (
    <React.StrictMode>
      <StoreProvider>
        <AppContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/single/:theId" element={<Single />} />
            </Routes>
          </Router>
        </AppContextProvider>
      </StoreProvider>
    </React.StrictMode>
  );
};

// Renderizar en el root de la aplicación
ReactDOM.createRoot(document.getElementById("root")).render(<Main />);

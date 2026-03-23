import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import './index.css'
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pokemons" element={<PrivateRoute element={<App />} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

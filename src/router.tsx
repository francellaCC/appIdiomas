import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Auth0Provider } from "@auth0/auth0-react";


export default function Router() {

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

  if (!domain || !clientId) {
    return <div>Error: Las variables de entorno de Auth0 no están configuradas.</div>;
  }
  return (
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: window.location.origin }}>
      <BrowserRouter>

        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} index />
          </Route>
          <Route>
            <Route path="/auth/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  )
}
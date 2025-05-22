import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthCheck from "./components/AuthCheck";
import AdminLayout from "./layouts/AdminLayout";
import { Dashboard } from "./pages/dashboardAdmin/Dashboard";
import Modules from "./pages/dashboardAdmin/Modules";
import ModuleForm from "./components/dashboardAdmin/ModuleForm";
import Languages from "./pages/dashboardAdmin/Languages";
import LanguageForm from "./components/dashboardAdmin/LanguageForm";


export default function Router() {

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

  if (!domain || !clientId) {
    return <div>Error: Las variables de entorno de Auth0 no están configuradas.</div>;
  }
  return (
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin + "/auth/check",
          audience: "http://localhost:8080/api", // 👈 Usa el "Identifier" de tu API registrada en Auth0
          scope: "openid profile email"   // 👈 Esto asegura que venga el email y perfil en el token
        }}
      >
        <Routes>
          {/* Ruta raíz por defecto (redirige al login) */}
          <Route path="/" element={<Navigate to="/auth/login" />} />

          {/* Rutas protegidas con layout */}
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
          </Route>

          {/* Rutas del panel de administracion */}
          <Route path="/admin" element={<AdminLayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="modules" element={<Modules/>}/>
              <Route path="/admin/modules/create" element={<ModuleForm />} />
              <Route path="languages" element={<Languages/>}/>
              <Route path="/admin/languages/create" element={<LanguageForm />} />
          </Route>
          {/* Rutas de autenticación */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/check" element={<AuthCheck />} />
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  )
}
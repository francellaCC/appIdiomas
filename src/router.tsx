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
import Languages from "./pages/dashboardAdmin/languajes/Languages";
import LanguageCreate from "./pages/dashboardAdmin/languajes/LanguageCreate";
import LanguageEdit from "./pages/dashboardAdmin/languajes/LanguageEdit";
import ModulesEdit from "./pages/dashboardAdmin/modules/ModulesEdit";
import ModulesCreate from "./pages/dashboardAdmin/modules/ModulesCreate";


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
          audience: "http://localhost:8080/api",
          scope: "openid profile email"
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
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
               {/* Modulos */}
            <Route path="modules" element={<Modules />} />
            <Route path="/admin/modules/edit/:id" element={<ModulesEdit/>}/>
            <Route path="/admin/modules/create" element={<ModulesCreate/>}/>
            {/* Lenguajes */}
            <Route path="languages" element={<Languages />} />
            <Route path="/admin/languages/create" element={<LanguageCreate />} />
            <Route path="/admin/languages/edit/:id" element={<LanguageEdit />} />
          </Route>
          {/* Rutas de autenticación */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/check" element={<AuthCheck />} />
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  )
}
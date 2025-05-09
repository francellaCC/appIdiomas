import { useAuth0 } from "@auth0/auth0-react";
import { Link, Outlet, useNavigate } from "react-router-dom"


function MainLayout() {
  const { isAuthenticated, isLoading,  logout } = useAuth0();
  const navigate = useNavigate(); // Obtén la función navigate

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: 'http://localhost:5173/auth/login' } });
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">

        <nav className="bg-blue-600 text-white p-4 flex justify-between">
          <h1 className="font-bold">Mi Sitio</h1>
          <div className="space-x-4">
            <Link to='/' className="hover:underline">Home</Link>
          </div>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </nav>

        <main className="flex-grow p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>


    )
  }
}

export default MainLayout
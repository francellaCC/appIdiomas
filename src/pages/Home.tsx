import { useAuth0 } from '@auth0/auth0-react'

export default function Home() {

  const { isAuthenticated, user, isLoading} = useAuth0();



  if (isLoading) {
    return <div>Cargando información del usuario...</div>;
  }

  if (isAuthenticated && user) {
    return (
      <div>
        <h2>Bienvenido, {user.name}</h2>
        {user.email && <p>Email: {user.email}</p>}
        {user.picture && <img src={user.picture} alt={user.name} />}
      </div>
    );
  }

  return <p>Usuario no autenticado.</p>;
}


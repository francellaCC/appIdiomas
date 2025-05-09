import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'

export default function Home() {

  const { isAuthenticated, user, isLoading, getAccessTokenSilently } = useAuth0()

 useEffect(() => {
    const getToken = async () => {
      if (isAuthenticated) {
        try {
          const accessToken = await getAccessTokenSilently();
          console.log('Access Token:', accessToken);
        } catch (error) {
          console.error('Error al obtener el Access Token:', error);
        }
      }
    };

    getToken();
  }, [isAuthenticated, getAccessTokenSilently]);
  
  if (isLoading) {
    return <div>Cargando información del usuario...</div>;
  }

  
  if (isAuthenticated && user) {
    console.log('Información del usuario (decodificada del ID Token):', user);
    console.log(getAccessTokenSilently)
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


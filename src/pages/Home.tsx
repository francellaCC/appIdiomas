import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useLoginMutation, useGetUserProfileQuery } from '../services/authApi';

export default function Home() {

  const { isAuthenticated, user, isLoading, getAccessTokenSilently } = useAuth0();

 const [login, loginResult] = useLoginMutation();
  const { data: userProfile, isError } = useGetUserProfileQuery();

  console.log('useLoginMutation:', login);
  console.log('loginResult:', loginResult);
  console.log('useGetUserProfileQuery data:', userProfile);
  console.log('useGetUserProfileQuery isError:', isError);

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


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface UserProfile {
  id: number;
  name: string;
  email: string;
  // ... otras propiedades (ajusta según la respuesta real de tu API)
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/api',
  prepareHeaders: (headers, { getState }) => {
    // Aquí puedes añadir headers a todas las peticiones
    const token = ''// Obtén el token de tu estado de autenticación
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/users',
        method: 'POST',
        body: credentials,
      }),
    }),
    getUserProfile: builder.query<UserProfile, void>({
      query: () => '/users/me',
      transformResponse: (response: any) => response.data as UserProfile,
      providesTags:  ['UserProfile' as any],
    }),
    // ... otros endpoints
  }),
});

export const { useLoginMutation, useGetUserProfileQuery } = authApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface UserProfile {
  name: string;
  email: string;
  // ... otras propiedades (ajusta según la respuesta real de tu API)
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/api',
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: '/users/register',
        method: 'POST',
        body: userData,
      }),
    }),
    // getUserProfile: builder.query<UserProfile, void>({
    //   query: () => '/users/me',
    //   transformResponse: (response: any) => response.data as UserProfile,
    //   providesTags:  ['UserProfile' as any],
    // }),
    // ... otros endpoints
  }),
});

export const { useLoginMutation } = authApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store/store';


interface UserProfile {
  name: string;
  email: string;
  // ... otras propiedades (ajusta según la respuesta real de tu API)
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/api',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    console.log(" token" ,token)
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  }
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: '/users/register',
        method: 'POST',
        body: userData
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
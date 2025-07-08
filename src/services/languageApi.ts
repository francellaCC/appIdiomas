import Languages from '../pages/dashboardAdmin/languajes/Languages';
import type { RootState } from '../store/store';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Language {
  id: number;
  name: string;
  code: string;
}

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/api',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    console.log(" token", token)
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  }
});

export const languageApi = createApi({
  reducerPath: "languageApi",
  baseQuery, // Cambia la URL base a la de tu backend
  tagTypes: ["Language"],
  endpoints: (builder) => ({
    getLanguages: builder.query<Language[], void>({
      query: () => "/admin/languages",
      providesTags: ["Language"],
    }),
    createLanguage: builder.mutation<Language, Partial<Language>>({
      query: (newLanguage) => ({
        url: "/admin/languages/create",
        method: "POST",
        body: newLanguage,
      }),
      invalidatesTags: ["Language"],
    }),
    getLanguageById: builder.query<Language, number>({
      query: (id) => ({
        url: `/admin/languages/${id}`,
        method: "GET",
      }),
    }),
    updateLanguage: builder.mutation<Language, { id: number, code: string, name: string }>({
      query: ({ id, ...body }) => ({
        url: `/admin/languages/${id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ["Language"],
    }),
    deleteLanguaje: builder.mutation<{ menssage: string }, number>({
      query: (id) => ({
        url: `/admin/languages/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ["Language"],
    })
  }),
});

export const { useGetLanguagesQuery, useCreateLanguageMutation, useGetLanguageByIdQuery, useUpdateLanguageMutation, useDeleteLanguajeMutation } = languageApi;

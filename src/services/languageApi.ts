import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Language {
  id: number;
  name: string;
  code: string;
}

export const languageApi = createApi({
  reducerPath: "languageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }), // Cambia la URL base a la de tu backend
  tagTypes: ["Language"],
  endpoints: (builder) => ({
    getLanguages: builder.query<Language[], void>({
      query: () => "/languages",
      providesTags: ["Language"],
    }),
    createLanguage: builder.mutation<Language, Partial<Language>>({
      query: (newLanguage) => ({
        url: "/languages",
        method: "POST",
        body: newLanguage,
      }),
      invalidatesTags: ["Language"],
    }),
  }),
});

export const { useGetLanguagesQuery, useCreateLanguageMutation } = languageApi;

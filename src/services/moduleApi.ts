import type { RootState } from '../store/store';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Module, TypeModuleForm } from '../types/types';


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

export const moduleApi = createApi({
  reducerPath: "moduleApi",
  baseQuery, // Cambia la URL base a la de tu backend
  tagTypes: ["Module"],
  endpoints: (builder) => ({
    getModules: builder.query<Module[], void>({
      query: () => "/admin/modules",
      providesTags: ["Module"],
    }),
    createModule: builder.mutation<TypeModuleForm, Partial<TypeModuleForm>>({
      query: (newModule) => ({
        url: "/admin/modules/create",
        method: "POST",
        body: newModule,
      }),
      invalidatesTags: ["Module"],
    }),
    getModuleById: builder.query<TypeModuleForm, number>({
      query: (id) => ({
        url: `/admin/modules/${id}`,
        method: "GET",
      }),
    }),
    updateModule: builder.mutation<Module, { id: number, title: string, description: string , order:number, language : {id:number, name?:string}}>({
          query: ({ id, ...body }) => ({
            url: `/admin/modules/${id}`,
            method: 'PUT',
            body
          }),
          invalidatesTags: ["Module"],
        }),
        deleteLanguaje: builder.mutation<{ menssage: string }, number>({
          query: (id) => ({
            url: `/admin/modules/${id}`,
            method: 'DELETE'
          }),
          invalidatesTags: ["Module"],
        })
  }),
});

export const { useGetModulesQuery, useCreateModuleMutation, useGetModuleByIdQuery, useUpdateModuleMutation} = moduleApi;
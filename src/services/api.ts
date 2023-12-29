import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ReceivedData, ResponseData, SentData, UpdateArgs } from './api.types'

export const dataApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://185.244.172.108:8081/v1/outlay-rows/entity/17220/row' }),
    endpoints: (builder) => ({
        getTreeRows: builder.query<ReceivedData[], void>({
            query: () => '/list',
        }),
        createRowInEntity: builder.mutation<ResponseData, SentData>({
            query: (data) => ({
                url: '/create',
                method: 'POST',
                body: data
            }),
        }),
        updateRow: builder.mutation<ResponseData, UpdateArgs>({
            query: ({id, data}) => ({
                url: `/${id}/update`,
                method: 'POST',
                body: data
            }),
        }),
        deleteRow: builder.mutation<ResponseData, number>({
            query: (id) => ({
                url: `/${id}/delete`,
                method: 'POST'
            }),
        }),
    })
})

export const {useGetTreeRowsQuery, useCreateRowInEntityMutation, useUpdateRowMutation, useDeleteRowMutation} = dataApi;
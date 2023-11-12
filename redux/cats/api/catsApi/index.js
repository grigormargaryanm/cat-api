import {createApi} from '@reduxjs/toolkit/query/react'
import {baseQuery} from "../apiBaseQuery";

export const catApi = createApi({
    reducerPath: 'cat/api',
    baseQuery,
    refetchOnFocus: true,
    endpoints: build => ({
        getCats: build.query({
            query: (data) => ({
                url: `search`,
                params: {
                    ...data,
                    has_breeds: data.hasBreeds,
                    mime_types: data.mimeTypes
                },
            }),
        }),
        getCat: build.query({
            query: (id) => ({
                url: `${id}`
            }),
        }),
        uploadImage: build.mutation({
            query: (data) => ({
                url: 'upload',
                method: 'POST',
                body: data,
            }),
        })
    })
})

export const {useGetCatsQuery, useGetCatQuery, useUploadImageMutation} = catApi
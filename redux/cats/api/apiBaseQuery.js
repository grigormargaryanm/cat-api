import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/images/',
    headers: {
        "x-api-key": 'live_7u5zj0cMJQl8LFjKMDzjLhFN1XPKXh9qd1tXWzxDIUqv3NGNWgZ4YmC4YV36rjbi',
    }
})


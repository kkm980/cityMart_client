import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi', // Unique name for the API slice
    baseQuery: fetchBaseQuery({ baseUrl: ' https://ctymart-co3pi8f0.b4a.run' }), // API base URL
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (body) => ({
                url: '/api/user/create',
                method: 'POST',
                body: body, // Send the data for the POST request
            }),
        }),
    }),
});

export const {
    useSignUpMutation
} = authApi;

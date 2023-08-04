import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Iproduct from '../types/product.type'
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Iproduct[], void>({
            query: () => `products`
        }),
        getProduct: builder.query<Iproduct, void>({
            query: (id) => `products/${id}`
        }),
        addProduct: builder.mutation<Iproduct, Partial<Iproduct>>({
            query: (product) => {
                return {
                    url: 'products',
                    method: 'POST',
                    body: product
                }
            }
        }),
        updateProduct: builder.mutation<Iproduct, Partial<Iproduct>>({
            query: (product) => {
                return {
                    url: `products/${product.id}`,
                    method: 'PUT',
                    body: product
                }
            }
        }),
        deleteProduct: builder.mutation<void, Iproduct>({
            query: (id) => {
                return {
                    url: `products/${id}`,
                    method: 'DELETE'
                }
            }
        })
    }),
})

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi;